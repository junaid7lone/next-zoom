//@ts-nocheck

"use client";

import { useEffect } from "react";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";

interface CallListProps {}

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "upcoming":
        return upcomingCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      case "recordings":
        return "No Call Recordings";
      default:
        return [];
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        callRecordings.map((meeting) => meeting.queryRecordings())
      );

      const recordings =
        callData.length > 0
          ? callData
              .filter((call) => call.recordings.length > 0)
              ?.flatMap((call) => call.recordings)
          : [];

      setRecordings(recordings);
    };

    if (type === "recordings" && callRecordings.length > 0) {
      fetchRecordings();
    }
  }, [type, callRecordings.length]);

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 ">
      {calls?.length > 0 ? (
        calls.map((meeting: Call | CallRecording, index) => {
          return (
            <MeetingWrapper
              key={index + "meeting"}
              meeting={meeting}
              type={type}
            />
          );
        })
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

const MeetingWrapper = ({ meeting, type }: { neeting: Call; type: string }) => {
  const router = useRouter();

  const meetingIcon =
    type === "ended"
      ? "/icons/previous.svg"
      : type === "upcoming"
      ? "/icons/upcoming.svg"
      : "/icons/recordings.svg";

  const description =
    meeting.state?.custom?.description?.substring(0, 26) ||
    meeting?.filename?.substring(0, 20) ||
    "No description";

  const date =
    (meeting as Call).state?.startsAt?.toLocaleString() ||
    (meeting as CallRecording).start_time.toLocaleString();

  const handleClick =
    type === "recordings"
      ? () => router.push(meeting.url)
      : () => router.push(`/meeting/${meeting.id}`);

  const link =
    type === "recordings"
      ? meeting.url
      : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`;

  return (
    <MeetingCard
      icon={meetingIcon}
      title={description}
      date={date}
      isPreviousMeeting={type === "ended"}
      buttonIcon={type === "recordings" ? "/icons/play.svg" : undefined}
      handleClick={handleClick}
      link={link}
      buttonText={type === "recordings" ? "Play" : "Start"}
    />
  );
};

export default CallList;
