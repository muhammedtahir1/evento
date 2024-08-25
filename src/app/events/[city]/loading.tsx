import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-10 gap-20">
      {
        // trick in js to map components - depends on the number of length
        Array.from({length: 6}).map((item , i) => (
          <SkeletonCard key={i}/>
        ))
      }
    </div>
  );
}
