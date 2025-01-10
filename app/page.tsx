import Header from "@/components/Header/Header";
import Carousel from "@/components/Carousel/Carousel";
import { carouselItems } from "@/data/carouselItems";

export default function Home() {
  return (
    <div>
      <Header />
      <Header />
      <main>
        <Carousel items={carouselItems} />
      </main>
    </div>
  );
}
