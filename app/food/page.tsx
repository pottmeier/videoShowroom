import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function foodPage() {
  const food: Video[] = [
    {
      title: "Amazing Afghan Entrance & Dance With Afghani Dress",
      url: "https://www.youtube.com/watch?v=76b0SXH0vok",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Food</h1>
      <VideoGallery videos={food} layout="stacked"></VideoGallery>
    </section>
  );
}
