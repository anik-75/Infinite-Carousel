import { forwardRef, useState } from "react";
import "./Dropdown.css";

const DropdownMenu = forwardRef(function DropdownMenu({ list }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!list || list?.length === 0) {
    return null;
  }

  function clickHandler(index) {
    setSelectedIndex(index);
  }

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-toggle-container">
        <button
          type="button"
          className="dropdown-toggle"
          onClick={toggleDropdown}
        >
          <h3>MORE</h3>
          <span className="dropdown-icon">
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.293031 1.29302C0.480558 1.10555 0.734866 1.00023 1.00003 1.00023C1.26519 1.00023 1.5195 1.10555 1.70703 1.29302L5.00003 4.58602L8.29303 1.29302C8.38528 1.19751 8.49562 1.12133 8.61763 1.06892C8.73963 1.01651 8.87085 0.988924 9.00363 0.98777C9.13641 0.986616 9.26809 1.01192 9.39098 1.0622C9.51388 1.11248 9.62553 1.18673 9.71943 1.28062C9.81332 1.37452 9.88757 1.48617 9.93785 1.60907C9.98813 1.73196 10.0134 1.86364 10.0123 1.99642C10.0111 2.1292 9.98354 2.26042 9.93113 2.38242C9.87872 2.50443 9.80254 2.61477 9.70703 2.70702L5.70703 6.70702C5.5195 6.89449 5.26519 6.99981 5.00003 6.99981C4.73487 6.99981 4.48056 6.89449 4.29303 6.70702L0.293031 2.70702C0.10556 2.51949 0.000244141 2.26518 0.000244141 2.00002C0.000244141 1.73486 0.10556 1.48055 0.293031 1.29302Z"
                fill="#83CEF9"
              />
            </svg>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="dropdown-content-container">
          {/* list */}
          <ul className="dropdown-content">
            {list.map((element, index) => {
              return (
                <li
                  key={index}
                  className={`${index === selectedIndex ? "selected" : ""}`}
                  onClick={() => clickHandler(index)}
                >
                  <span className="title">{element}</span>
                  <span
                    className={`${index === selectedIndex ? "tick-svg" : ""}`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});

export default DropdownMenu;
