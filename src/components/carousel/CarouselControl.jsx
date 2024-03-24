import { useId } from "react";
import "./CarouselControl.css";
const CarouselControl = ({ nextBtn, prevBtn, selectedIndex, images }) => {
  const id = useId();

  return (
    <>
      <div className="carousel-control-container">
        <button className="prev-btn-container" onClick={() => prevBtn()}>
          <span className="prev-btn">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75024 10.5H21.6289V13.5H8.75024L13.6896 18.4393L11.5683 20.5606L3.0076 12L11.5683 3.4393L13.6896 5.56062L8.75024 10.5Z"
                fill="#D3D2D2"
              />
            </svg>
          </span>
        </button>
        {images.map((_, index) => {
          return index === selectedIndex ? (
            <span className="selectedIndicator" key={`${id}_${index}`}>
              <svg
                width="33"
                height="12"
                viewBox="0 0 33 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="32.6289"
                  y="12"
                  width="32"
                  height="12"
                  rx="6"
                  transform="rotate(-180 32.6289 12)"
                  fill="#60BCEA"
                />
              </svg>
            </span>
          ) : (
            <span
              key={`${id}_${index}`}
              className={`carousel-indicator-${index + 1}`}
            >
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.62891"
                  cy="5.99997"
                  r="6"
                  transform="rotate(-180 6.62891 5.99997)"
                  fill="#D3D2D2"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.62891"
                  cy="5.99997"
                  r="6"
                  transform="rotate(-180 6.62891 5.99997)"
                  fill="#D3D2D2"
                />
              </svg>
            </span>
          );
        })}
        <button className="next-btn-container" onClick={() => nextBtn()}>
          <span className="next-btn">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1069 10.557H0.5532V7.443H13.1069L8.29219 2.31595L10.36 0.114014L18.7046 9L10.36 17.886L8.29219 15.6841L13.1069 10.557Z"
                fill="#D3D2D2"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default CarouselControl;
