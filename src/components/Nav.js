import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import SwitchTheme from "./SwitchTheme";

const Nav = ({ libraryStatus, setLibraryStatus, theme, setTheme }) => {
  return (
    <nav>
      <h1>Chill Beats</h1>
      <div className="switchSection">
        <SwitchTheme theme={theme} setTheme={setTheme} />
      </div>
      <button
        className={`${libraryStatus ? "activeLibraryBtn" : ""}`}
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
