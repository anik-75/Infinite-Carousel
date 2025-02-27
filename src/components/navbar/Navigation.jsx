import { useEffect, useState, useRef, useCallback } from "react";
import DropdownMenu from "./Dropdown";
import "./Navigation.css";

const NavigationBar = ({ navItems }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleNavItems, setVisibleNavItems] = useState([]);
  const [hiddenNavItems, setHiddenNavItems] = useState([]);

  const logoRef = useRef(null);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const updateNavItems = useCallback(() => {
    // how much space it takes
    const logoWidth = logoRef.current.offsetWidth;
    const searchBarWidth = searchRef.current.offsetWidth;
    const dropdownWidth = dropdownRef?.current?.offsetWidth || 51;
    const totalNavBarWidth =
      windowWidth - (logoWidth + searchBarWidth + 44 + dropdownWidth + 44);

    let flag = true;
    let sliceIndex = -1;
    const navItemsWidth = navItems.reduce((accumulator, current, index) => {
      if (accumulator > totalNavBarWidth && flag) {
        sliceIndex = index;
        flag = false;
      }
      let itemWidth = 44 + 62 + 44;
      return accumulator + itemWidth;
    }, 0);

    if (totalNavBarWidth < navItemsWidth) {
      setVisibleNavItems(navItems.slice(0, sliceIndex));
      setHiddenNavItems(navItems.slice(sliceIndex));
    } else {
      setVisibleNavItems(navItems.slice(0));
      setHiddenNavItems([]);
    }
  }, [navItems, windowWidth]);

  useEffect(() => {
    if (updateNavItems) {
      updateNavItems();
    }
  }, [windowWidth, navItems, updateNavItems]);

  return (
    <>
      <header className="header">
        {/* logo  */}
        <div className="logo-container" ref={logoRef}>
          <span className="logo-icon">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7 0.237838C20.7 11.008 11.9472 19.7389 1.14999 19.7389C0.763947 19.7389 0.380514 19.7278 0 19.7058V22.0035C0.380833 22.0232 0.764247 22.0332 1.14999 22.0332C13.2174 22.0332 23 12.2751 23 0.237838C23 0.237732 23 0.237945 23 0.237838H20.7C20.7 0.237945 20.7 0.237732 20.7 0.237838Z"
                fill="white"
              />
              <path
                d="M19.55 0.237519C19.55 0.237412 19.55 0.237625 19.55 0.237519C19.55 10.3741 11.312 18.5918 1.14999 18.5918C0.763768 18.5918 0.380321 18.5799 0 18.5566V16.2572C0.379845 16.284 0.763328 16.2976 1.14999 16.2976C10.0418 16.2976 17.25 9.10738 17.25 0.237838C17.25 0.237732 17.25 0.237945 17.25 0.237838L19.55 0.237519Z"
                fill="white"
              />
              <path
                d="M0 15.107C0.379546 15.1358 0.763053 15.1504 1.14999 15.1504C9.40665 15.1504 16.1 8.47384 16.1 0.237838C16.1 0.237732 16.1 0.237945 16.1 0.237838L13.8 0.237519C13.8 0.237412 13.8 0.237625 13.8 0.237519C13.8 7.20645 8.1364 12.8562 1.14999 12.8562C0.762343 12.8562 0.378765 12.8388 0 12.8048V15.107Z"
                fill="white"
              />
              <path
                d="M0 11.6524C0.37824 11.6899 0.761872 11.7091 1.14999 11.7091C7.50127 11.7091 12.65 6.57323 12.65 0.237838C12.65 0.237732 12.65 0.237945 12.65 0.237838L10.35 0.237519C10.35 0.237412 10.35 0.237625 10.35 0.237519C10.35 5.30583 6.23101 9.41483 1.14999 9.41483C0.760537 9.41483 0.376732 9.39069 0 9.34383V11.6524Z"
                fill="white"
              />
              <path
                d="M0 8.18639C0.375592 8.23998 0.759547 8.2677 1.14999 8.2677C5.59589 8.2677 9.2 4.67261 9.2 0.237838C9.2 0.237732 9.2 0.237945 9.2 0.237838L6.89999 0.237519C6.89999 0.237412 6.89999 0.237625 6.89999 0.237519C6.89999 3.40521 4.32563 5.97346 1.14999 5.97346C0.756161 5.97346 0.371575 5.93396 0 5.85872V8.18639Z"
                fill="white"
              />
              <path
                d="M0 4.68178C0.367561 4.77614 0.752902 4.82633 1.14999 4.82633C3.6905 4.82633 5.74999 2.77199 5.74999 0.237838C5.74999 0.237732 5.74999 0.237945 5.74999 0.237838L0 0.237519V4.68178Z"
                fill="white"
              />
              <path
                d="M23 7.42155C22.7657 8.1311 22.4976 8.82535 22.1976 9.50241C22.4678 9.53419 22.7353 9.57447 23 9.62296V7.42155Z"
                fill="white"
              />
              <path
                d="M23 10.7915C22.5666 10.7037 22.1243 10.6403 21.6746 10.6026C21.278 11.3826 20.8379 12.137 20.3577 12.8625C20.4713 12.8584 20.5854 12.8563 20.7 12.8563C21.4942 12.8563 22.2649 12.9567 23 13.1454V10.7915Z"
                fill="white"
              />
              <path
                d="M11.5711 23.18H9.25674C9.21921 22.8028 9.2 22.4203 9.2 22.0333C9.2 21.9334 9.20128 21.8338 9.20382 21.7345C10.0255 21.428 10.825 21.076 11.5991 20.6816C11.5338 21.1227 11.5 21.574 11.5 22.0333C11.5 22.4216 11.5242 22.8043 11.5711 23.18Z"
                fill="white"
              />
              <path
                d="M23 14.3359C22.2712 14.1196 21.4992 14.0034 20.7 14.0034C20.2862 14.0034 19.8796 14.0345 19.4826 14.0946C17.6973 16.4412 15.4696 18.4345 12.9233 19.9508C12.7451 20.615 12.65 21.313 12.65 22.0333C12.65 22.4226 12.6778 22.8055 12.7315 23.18H15.0649C14.9896 22.8095 14.95 22.426 14.95 22.0333C14.95 18.8656 17.5244 16.2976 20.7 16.2976C21.5178 16.2976 22.2957 16.4679 23 16.7749V14.3359Z"
                fill="white"
              />
              <path
                d="M23 18.0586C22.3234 17.6682 21.5379 17.4448 20.7 17.4448C18.1595 17.4448 16.1 19.4991 16.1 22.0333C16.1 22.4292 16.1503 22.8135 16.2448 23.18H23V18.0586Z"
                fill="white"
              />
              <path
                d="M8.10153 23.18H5.79354C5.78186 23.0267 5.7725 22.8728 5.76549 22.7183C6.54206 22.5605 7.3044 22.3637 8.05036 22.13C8.05302 22.4836 8.07027 22.8338 8.10153 23.18Z"
                fill="white"
              />
              <path
                d="M4.64041 23.18C4.6343 23.0936 4.62888 23.0071 4.62414 22.9204C3.87194 23.034 3.10778 23.1114 2.33353 23.1505C2.33412 23.1604 2.33472 23.1702 2.33532 23.18H4.64041Z"
                fill="white"
              />
              <path
                d="M1.01379 23.18C0.674066 23.178 0.336084 23.1687 0 23.1522V23.18H1.01379Z"
                fill="white"
              />
            </svg>
          </span>
          <div className="logo-text-container">
            <p className="logo-text">E-COMM</p>
          </div>
        </div>

        {/* nav links */}
        <div className="menu-container">
          <div className="list">
            {visibleNavItems.map((option, index) => {
              return <h3 key={index}>{option}</h3>;
            })}
            {/* dropdown */}
          </div>
          <DropdownMenu list={hiddenNavItems} ref={dropdownRef} />

          {/* search bar */}
          <div className="search-container" ref={searchRef}>
            <span className="search-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 9.09938 14.0158 9.85792 13.7226 10.5657C13.4295 11.2734 12.9998 11.9164 12.4581 12.4581C11.9164 12.9998 11.2734 13.4295 10.5657 13.7226C9.85792 14.0158 9.09938 14.1667 8.33333 14.1667C7.56729 14.1667 6.80875 14.0158 6.10101 13.7226C5.39328 13.4295 4.75022 12.9998 4.20854 12.4581C3.66687 11.9164 3.23719 11.2734 2.94404 10.5657C2.65088 9.85792 2.5 9.09938 2.5 8.33333C2.5 6.78624 3.11458 5.30251 4.20854 4.20854C5.30251 3.11458 6.78624 2.5 8.33333 2.5C9.88043 2.5 11.3642 3.11458 12.4581 4.20854C13.5521 5.30251 14.1667 6.78624 14.1667 8.33333Z"
                  stroke="white"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search something"
              className="input-search"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
