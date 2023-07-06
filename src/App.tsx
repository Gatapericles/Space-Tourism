import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import srcData from "../public/data.json";
import { HomePage } from "./Routes/HomePage";

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
          <img src={srcData.nav[0].hamburgerImage}
               alt=""
               onClick={handleHamburgerClick}
          />
        </nav>

        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<HomePage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
