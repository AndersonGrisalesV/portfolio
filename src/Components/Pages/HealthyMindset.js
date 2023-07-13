import React, { useState, useEffect, lazy, Suspense, memo } from "react";

import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const LazySectionOne = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionOne/SectionOne")
);
const LazySectionTwo = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionTwo/SectionTwo")
);
const LazySectionThree = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionThree/SectionThree")
);
const LazySectionFour = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionFour/SectionFour")
);
const LazySectionFive = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionFive/SectionFive")
);
const LazySectionSix = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionSix/SectionSix")
);
const LazySectionSeven = lazy(() =>
  import("../Pages/HealthyMindsetComponents/SectionSeven/SectionSeven")
);

const HealthyMindset = () => {
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
          <Loader onLoaderHealthyMindset />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onHealthyMindset />
          <Suspense>
            <MemoizedSectionOne />
            <MemoizedSectionTwo />
            <MemoizedSectionThree />
            <MemoizedSectionFour />
            <MemoizedSectionFive />
            <MemoizedSectionSix />
            <MemoizedSectionSeven />
            <Footer onHealthyMindset />
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
const MemoizedSectionSeven = memo(LazySectionSeven);

export default HealthyMindset;
