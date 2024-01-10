"use client";
import dynamic from "next/dynamic";
import { Title } from "@/components/Title";
const Notes = dynamic(() => import("./Notes"), { ssr: false });

export default function page() {
  return (
    <div className="flexCenterMargin h-full">
      <Title title="Notes App: A Simple Way to" highlight="Keep Your Notes" />
      <Notes />
    </div>
  );
}
