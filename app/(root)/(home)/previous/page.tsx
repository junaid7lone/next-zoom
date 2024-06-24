import CallList from "@/components/CallList";

interface PreviousProps {}

const Previous: React.FC<PreviousProps> = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-white text-3xl font-bold">Previous</h1>
      <CallList type="ended" />
    </section>
  );
};

export default Previous;
