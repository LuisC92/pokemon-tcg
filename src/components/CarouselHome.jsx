// your imports goes here
import Carousel from "react-bootstrap/Carousel";
import background1 from "../img/background.gif"
import background2 from "../img/pokemon.gif"
import background3 from "../img/pokemon-2.gif"
function CarouselHome() {
  // your variables goes here

  return (
    <Carousel fade>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 slide"
          src={background1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 slide"
          src={background2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 slide"
          src={background3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
