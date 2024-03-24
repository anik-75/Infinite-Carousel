import { useState, useEffect } from "react";
import Carousel from "./components/carousel/Carousel";
import Heading from "./components/main/Heading";
import Navigation from "./components/navbar/Navigation";

const options = [
  "HOME",
  "ELECTRONICS",
  "BOOKS",
  "MUSIC",
  "MOVIES",
  "CLOTHING",
  "GAMES",
  "FURNITURE",
  "ELECTRONICS",
  "TRAVEL",
  "BOTANICAL",
  "CATEGORY NAME",
];

const description = [
  "Modern kitchen Utensils",
  "Shape of You",
  "Sun Flower",
  "White Rose",
  "Cones",
];

function App() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const allImageModule = import.meta.glob(
        "./assets/images/*.{png,jpg,jpeg}"
      );
      const paths = [];
      let i = 0;
      for (const image in allImageModule) {
        const path = await allImageModule[image]();
        paths.push({ path: path.default, id: i, description: description[i] });
        i++;
      }
      setImagePaths(paths);
    };
    importImages();
  }, []);

  return (
    <>
      <Navigation navItems={options} />
      <Heading />
      <Carousel images={imagePaths} setImages={setImagePaths} />
    </>
  );
}

export default App;
