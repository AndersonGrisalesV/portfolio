import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Hamburger from "hamburger-react";

const HamburguerMenuButton = ({ toggled, toggle, visibleNavBar }) => {
  // useEffect(() => {
  //   if (visibleNavBar) {
  //     const hamburguerHook = document.getElementById("hamburguer-hook");
  //     if (hamburguerHook) {
  //       if (visibleNavBar) {
  //         hamburguerHook.style.position = "absolute";
  //       } else {
  //         hamburguerHook.style.position = "fixed";
  //       }
  //     }
  //   }
  // }, [visibleNavBar]);

  return (
    <React.Fragment>
      {visibleNavBar &&
        ReactDOM.createPortal(
          <Hamburger
            color="linear-gradient(90deg, #19c78e, #3c9ce5)"
            hideOutline={false}
            size="30"
            rounded
            toggled={toggled}
            toggle={toggle}
          />,
          document.getElementById("hamburguer-hook")
        )}
    </React.Fragment>
  );

  // return visibleNavBar ? (
  //   ReactDOM.createPortal(
  //     <Hamburger
  //       className={`${visibleNavBar ? "hide__hamburguer__menu" : ""}`}
  //       color="linear-gradient(90deg, #19c78e, #3c9ce5)"
  //       hideOutline={false}
  //       size="30"
  //       rounded
  //       toggled={toggled}
  //       toggle={toggle}
  //     />,
  //     document.getElementById("hamburguer-hook")
  //   )
  // ) : (
  //   <Hamburger
  //     color="linear-gradient(90deg, #19c78e, #3c9ce5)"
  //     hideOutline={false}
  //     size="30"
  //     rounded
  //     toggled={toggled}
  //     toggle={toggle}
  //   />
  // );
};

export default HamburguerMenuButton;
