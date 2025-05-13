import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function foodPage() {
  const food: Video[] = [
    {
      title: "Overview over the dishes",
      url: "https://www.youtube.com/shorts/_QMBzJ7dli0",
    },
    {
      title: "Mantu",
      url: "https://youtube.com/shorts/WJkzZPRobOs",
    },
    {
      title: "Sheer Yakh",
      url: "https://www.youtube.com/shorts/XPYgt6Xq8is",
    },
    {
      title: "Shorba",
      url: "https://www.youtube.com/shorts/oLThHU-SCY4",
    },
    {
      title: "Dupiyaza",
      url: "https://www.youtube.com/shorts/7i-LA36L8hw",
    },
    {
      title: "Bolani",
      url: "https://www.youtube.com/shorts/Z5Xg0wlVWAY",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Food</h1>
      <VideoGallery videos={food} layout="grid"></VideoGallery>
    </section>
  );
}
