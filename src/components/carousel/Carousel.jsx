import { useState, useId } from "react";
import CarouselControl from "./CarouselControl";
import { rotate } from "../../../utils/helperFunction";
import "./Carousel.css";

const Carousel = ({ images, setImages }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const prevHandler = () => {
    setSelectedIndex((selectedIndex) => {
      return selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    });

    const rotated = rotate(images, -1);
    setImages(rotated);
  };

  const nextHandler = () => {
    setSelectedIndex((selectedIndex) => {
      return selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    });
    // rotate right
    const rotated = rotate(images, 1);
    setImages(rotated);
  };
  const id = useId();

  return (
    <>
      <div className="carousel">
        <div className="carousel-container">
          {images.map((image, index) => {
            return (
              <div
                key={`${id}_${index}`}
                className={`carousel-item carousel-item-${index + 1}`}
              >
                <img src={image.path} className="image" />
                {index === Math.floor(images.length / 2) && (
                  <p className="image-description">{image?.description}</p>
                )}
              </div>
            );
          })}
        </div>
        <CarouselControl
          nextBtn={nextHandler}
          prevBtn={prevHandler}
          selectedIndex={selectedIndex}
          images={images}
          setImages={setImages}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </>
  );
};

export default Carousel;
