import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

export default function UncontrolledExample() {
  return (
    <>
      <section className="section-carusel">
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <ExampleCarouselImage text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}
