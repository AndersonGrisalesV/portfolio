import React, { useState, useEffect, lazy, Suspense, memo } from "react";

import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const LazySectionOne = lazy(() =>
  import("../Pages/GroceryShopComponents/SectionOne/SectionOne")
);
const LazySectionTwo = lazy(() =>
  import("../Pages/GroceryShopComponents/SectionTwo/SectionTwo")
);
const LazySectionThree = lazy(() =>
  import("../Pages/GroceryShopComponents/SectionThree/SectionThree")
);
const LazySectionFour = lazy(() =>
  import("../Pages/GroceryShopComponents/SectionFour/SectionFour")
);
const LazySectionFive = lazy(() =>
  import("../Pages/GroceryShopComponents/SectionFive/SectionFive")
);
const LazySectionSix = lazy(() =>
  import("../Pages/GroceryShopComponents/SectionSix/SectionSix")
);

const GroceryShop = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {loading && (
        <div>
          <Loader onLoaderGroceryShop />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onGroceryShop />
          <Suspense>
            <MemoizedSectionOne />
            <MemoizedSectionTwo />
            <MemoizedSectionThree />
            <MemoizedSectionFour />
            <MemoizedSectionFive />
            <MemoizedSectionSix />
            <Footer />
          </Suspense>
        </React.Fragment>
      )}
    </div>
  );
};

const MemoizedSectionOne = memo(LazySectionOne);
const MemoizedSectionTwo = memo(LazySectionTwo);
const MemoizedSectionThree = memo(LazySectionThree);
const MemoizedSectionFour = memo(LazySectionFour);
const MemoizedSectionFive = memo(LazySectionFive);
const MemoizedSectionSix = memo(LazySectionSix);

export default GroceryShop;
