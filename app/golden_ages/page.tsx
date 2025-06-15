import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function afghanistanPage() {
  const afghanistan: Video[] = [
    {
      title: "Kabul, An Open City to the West",
      url: "https://www.youtube.com/watch?v=Fx5cQ8VThiE",
    },
    {
      title: "Kabul in 1970",
      url: "https://www.youtube.com/watch?v=2TNYnM6k3Do",
    },
    {
      title: "Old Afghanistan - Music",
      url: "https://www.youtube.com/watch?v=_FDGnBWX52Y",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Golden Ages of Afghanistan</h1>
      <VideoGallery videos={afghanistan} layout="grid"></VideoGallery>
    </section>
  );
}
