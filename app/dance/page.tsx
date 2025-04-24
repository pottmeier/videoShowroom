import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function DancePage() {
  const dance: Video[] = [
    {
      title: "Afghan Dance",
      url: "https://www.youtube.com/watch?v=ObSl6s8MDsA",
    },
    {
      title: "Afghan Loghari dance",
      url: "https://www.youtube.com/watch?v=gLflrGStfaY",
    },
    {
      title: "Attan Remix",
      url: "https://www.youtube.com/watch?v=cC7BdCDJWGg",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Traditional Dances</h1>
      <VideoGallery videos={dance}></VideoGallery>
    </section>
  );
}
