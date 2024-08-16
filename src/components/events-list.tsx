import { EventoEvent } from "@/lib/type"
import EventCard from "./event-card";

type EventsCardProps = {
    events : EventoEvent[],
};


export default function EventsList({events}: EventsCardProps) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
        {events.map((event)  => (
            <EventCard key={event.id} event={event} />
      ) )}
    </section>
  )
}