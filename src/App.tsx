import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import srcData from "../public/data.json";
import { HomePage } from "./Routes/HomePage";
import { Destinations } from "./Routes/Destinations";

import { ToggleNav } from "./ToggleNav";

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleHamburgerClick = () => {
    if (showNav) setShowNav(false);
    else setShowNav(true);
  };

  return (
    <>
      <div className="">
        <nav className="m-6 !mb-2 flex items-center
                        justify-between">
          <img src={srcData.nav[0].logoImage}
               alt=""
               className="block"
          />
          <img className="block"
               src={srcData.nav[0].hamburgerImage}
               alt=""
               onClick={handleHamburgerClick}
          />
        </nav>

        <BrowserRouter>
          <Routes>
            <Route 
                path="/"
                element={
                  <ToggleNav
                    imgSrc={srcData.nav[0].exitIcon}
                    hidAndShowNav={showNav}
                    setShowNav={handleHamburgerClick}/>
                }>
              <Route index element={<HomePage/>} />
              <Route path="destinations" element={<Destinations/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
