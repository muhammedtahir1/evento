import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col pt-28 items-center space-y-4">
      <Skeleton className="h-4 w-[550px]" />
      <Skeleton className="h-4 w-[400px]"/>
      <Skeleton className="h-4 w-[430px]"/>
    </div>
  )
}
