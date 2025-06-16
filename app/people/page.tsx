import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function PeoplePage() {
  const people: Video[] = [    {
      title: "How people live in Afghan villages",
      url: "https://www.youtube.com/watch?v=hTBht8KPA0o",
    }];

  return (
    <section className="text-center">
      <h1 className={title()}>People</h1>
      <VideoGallery videos={people} layout="stacked"></VideoGallery>
    </section>
  );
}
