import { Spinner } from "@/components/Spinner";

export default function Loading() {
  return (
    <section className="projects w-full max-w-7xl">
      <h1 className="w-full pb-20 pt-10 text-left text-5xl font-extrabold md:text-8xl">Top Stories</h1>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner />
      </div>
    </section>
  );
}
