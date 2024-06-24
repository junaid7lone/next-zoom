"use client";

import { tokenProvider } from "@/actions/stream.action";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call('default', 'my-first-call');
// call.join({ create: true });

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (!apiKey) {
      throw new Error("Steam API Key Missing!");
    }

    if (!user?.id) {
      throw new Error("User Missing!");
    }

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      token: tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) {
    return <Loader />;
  }

  return (
    <StreamVideo client={videoClient}>
      {/* <StreamCall call={call}>
        <MyVideoUI /> 
      </StreamCall> */}
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
