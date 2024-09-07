import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { title } from "process";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type eventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? `All Events` : `Events in ${capitalize(city)}`,
  };
}

// zod schema
const pageNumberSchema = z.coerce.number().int().positive().optional();

// pre generating popular routes
export async function generateStaticParams() {
  return [
    {
      city: "react-meetup-bangalore",
    },
    {
      city: "science-space-expo",
    },
  ];
}

const EventsPage = async ({ params, searchParams }: eventsPageProps) => {
  const city = params.city;
  // const page = searchParams.page || 1;
  // zod validation
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
