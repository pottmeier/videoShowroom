import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function fashionPage() {
  const fashion: Video[] = [
    {
      title: "Afghan Bridal Outfits",
      url: "https://www.youtube.com/watch?v=a4ifrhK9o50",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Fashion</h1>
      <VideoGallery videos={fashion} layout="stacked"></VideoGallery>
    </section>
  );
}
