import { Spinner } from "@/components/spinner/Spinner";

const Loading = () => {
  return (
    <section className="projects w-full max-w-7xl">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner />
      </div>
    </section>
  );
};

export default Loading;
