import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { foodCategory } from "./foodData";

function App() {
  return (
    <div className="flex flex-row justify-center">
      <Carousel className="max-w-screen-2xl">
        <CarouselContent className="-ml-1">
          {foodCategory.map((category, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/6 lg:basis-40">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${category.imageId}`}
                width="144"
                height="180"
                alt="restaurants curated for north indian"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default App;
