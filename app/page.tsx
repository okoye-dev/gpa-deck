import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20 bg-gray-900 text-white shadow-xl">
      <nav className="flex h-16 w-full justify-center border-b border-white/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <Button variant={"ghost"}>GPA Deck</Button>
        </div>
      </nav>

      <div className="animate-in flex max-w-4xl flex-1 flex-col gap-20 px-3 text-white">
        <section className="flex flex-1 flex-col items-center gap-6">
          <h2 className="mb-2 text-4xl font-bold text-white">
            Welcome to GPA Deck
          </h2>
          <p>Track your GPA and simulate your dream scores</p>
          <Link href={"/courses"}>
            <Button variant={"ghost"}>View Courses</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
