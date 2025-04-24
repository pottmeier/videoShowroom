import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function GeographyPage() {
  const geography: Video[] = [
    {
      title: "The Unseen Afghanistan",
      url: "https://www.youtube.com/watch?v=JDrScVo7aBs",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Geography</h1>
      <VideoGallery videos={geography}></VideoGallery>
    </section>
  );
}
