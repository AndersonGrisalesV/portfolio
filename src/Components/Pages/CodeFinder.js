import React, { useState, useEffect, lazy, Suspense, memo } from "react";

import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const LazySectionOne = lazy(() =>
  import("../Pages/CodeFinderComponents/SectionOne/SectionOne")
);
const LazySectionTwo = lazy(() =>
  import("../Pages/CodeFinderComponents/SectionTwo/SectionTwo")
);
const LazySectionThree = lazy(() =>
  import("../Pages/CodeFinderComponents/SectionThree/SectionThree")
);
const LazySectionFour = lazy(() =>
  import("../Pages/CodeFinderComponents/SectionFour/SectionFour")
);
const LazySectionFive = lazy(() =>
  import("../Pages/CodeFinderComponents/SectionFive/SectionFive")
);
const LazySectionSix = lazy(() =>
  import("../Pages/CodeFinderComponents/SectionSix/SectionSix")
);

const CodeFinder = () => {
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
          <Loader onLoaderCodeFinder />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onCodeFinder />
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

export default CodeFinder;
