import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function SportsPage() {
  const sports: Video[] = [
    {
      title: "Buzkashi Polo: Equestrian sport with an Afghan twist",
      url: "https://www.youtube.com/watch?v=ZOYPADB3sTU",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Sports</h1>
      <VideoGallery videos={sports}></VideoGallery>
    </section>
  );
}
