import Image from "next/image";
import H1 from "@/components/h1";
import { title } from "process";
import { Metadata } from "next";
import { getEvent } from "@/lib/server-utils";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  // utils / getEvent function - to fetch data
  const event = await getEvent(slug);
  if (event)
    return {
      title: event.name,
    };

  return {
    title: "page not found",
  };
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  // console.log(slug); we are getting the segment path in slug

  const event = await getEvent(slug);

  if (!event) {
    return notFound();
  }

  return (
    <main>
      <section className="relative overflow-hidden flex items-center justify-center py-14 md:py-20">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vh,  1280px"
          priority
        />

        <div className="z-10 relative flex flex-col md:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover "
          />

          <div className="flex flex-col">
            <p className=" text-white/75 ">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>{" "}
            </p>
            <button className="bg-white/20 bg-blur capitalize mt-5 lg:mt-auto text-lg w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
