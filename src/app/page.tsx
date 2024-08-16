import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75 ">Browse more than <span className="italic text-accent underline font-bold">10,000 events</span> around you</p>

      <SearchForm/>

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2">
          <Link href="events/delhi">Delhi</Link>
          <Link href="events/bangalore">Bangalore</Link>
        </div>
      </section>

    </main>
  )
}
