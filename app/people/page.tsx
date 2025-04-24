import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function PeoplePage() {
  const people: Video[] = [
    {
      title:
        "Afghanistan's Golden Age: The Land Where Women's Rights Were At Par With Western Nations",
      url: "https://www.youtube.com/watch?v=ylScuPfTb_A&t=1s",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>People</h1>
      <VideoGallery videos={people}></VideoGallery>
    </section>
  );
}
