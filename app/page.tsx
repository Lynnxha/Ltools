import Homepage from "@/components/Homepages";

export default function Home() {
  return (
    <main className="px-5 mt-10 container">
      <div>
        <h1>
          Open Source Tools For
          <span className="text-aqua"> Your Daily Needs</span>
        </h1>
      </div>
      <section>
        <Homepage />
      </section>
    </main>
  );
}
