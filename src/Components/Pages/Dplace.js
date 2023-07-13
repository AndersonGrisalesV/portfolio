import React, { useState, useEffect, lazy, Suspense, memo } from "react";

import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
// import SectionOne from "../Pages/DplaceComponents/SectionOne/SectionOne";
// import SectionTwo from "../Pages/DplaceComponents/SectionTwo/SectionTwo";
// import SectionThree from "../Pages/DplaceComponents/SectionThree/SectionThree";
// import SectionFour from "../Pages/DplaceComponents/SectionFour/SectionFour";
// import Footer from "../shared/Footer/Footer";

const LazySectionOne = lazy(() =>
  import("../Pages/DplaceComponents/SectionOne/SectionOne")
);
const LazySectionTwo = lazy(() =>
  import("../Pages/DplaceComponents/SectionTwo/SectionTwo")
);
const LazySectionThree = lazy(() =>
  import("../Pages/DplaceComponents/SectionThree/SectionThree")
);
const LazySectionFour = lazy(() =>
  import("../Pages/DplaceComponents/SectionFour/SectionFour")
);
const LazyFooter = lazy(() => import("../shared/Footer/Footer"));

const Dplace = () => {
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
      {loading ? (
        <div>
          <Loader onLoaderDplace />
        </div>
      ) : (
        <React.Fragment>
          <NavBar onDplace />
          <Suspense>
            <MemoizedSectionOne />
            <MemoizedSectionTwo />
            <MemoizedSectionThree />
            <MemoizedSectionFour />
            <MemoizedFooter onDplace />
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
const MemoizedFooter = memo(LazyFooter);

export default Dplace;
