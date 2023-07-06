import srcData from "../../public/data.json";
import { Link } from "react-router-dom";

function HomePage() {
  if (screen.width < 375) {
    document.body.style.background = `url(${srcData.homePage[0].bgImageMob})  no-repeat  fixed `;
    document.body.style.backgroundSize = "cover";
  }
  if (screen.width < 700 && screen.width > 375) {
    document.body.style.background = `url(${srcData.homePage[0].bgImageTab})  no-repeat  fixed`;
  }
  if (screen.width > 700) {
    document.body.style.background = `url(${srcData.homePage[0].bgImageDesk})  no-repeat  fixed `;
    document.body.style.backgroundSize = "cover";
  }
  window.addEventListener("resize", () => {
    if (screen.width < 375) {
      document.body.style.background = `url(${srcData.homePage[0].bgImageMob})  no-repeat  fixed`;
      document.body.style.backgroundSize = "cover";
    }
    if (screen.width < 700 && screen.width > 375) {
      document.body.style.background = `url(${srcData.homePage[0].bgImageTab})  no-repeat  `;
    }
    if (screen.width > 700) {
      document.body.style.background = `url(${srcData.homePage[0].bgImageDesk})  no-repeat  fixed  `;
      document.body.style.backgroundSize = "cover";
    }
  });
  
  return (
    <>
      <div className="text-white sm:space-y-28 flex flex-col
                     my-10  justify-start  text-center h-[-80vh]
                     md:grid grid-cols-2 items-center md:mt-[00%">

        <div className="space-y-3  md:text-left 
                       justify-seft-center  md:ml-11  md:w-96">

           <h5 className="my-3 subTitle sm:text-xl">
               {srcData.homePage[0].subTitle}             
           </h5>
           <h1 className="my-3 title sm:text-8xl md:m-0">
               {srcData.homePage[0].title}
           </h1>
           <p className="body md:m-0 md:text-lg">
               {srcData.homePage[0].description}
           </p> 
        </div>
        <Link to="destinations">
           <button className=" exploreBtn md: !text-center relative
                               hover:before:absolute
                               hover:before:flex
                               hover:before:content-['']
                               hover:before:bg-white
                               hover:before:opacity-[40%]
                               hover:before:rounded-full
                               hover:before:translate-x-[-50%]
                               hover:before:z-[-1]
                               hover:before:translate-y-[-50%]
                               hover:before:top-[50%]
                               hover:before:left-[50%]
                               hover:before:h-[150%]
                               hover:before:w-[150%]
                               md:text-3xl
                               justify-self-center
                               font-['Bellefair']
                               bg-white
                               mx-auto
                               h-40
                               w-40
                               md:h-52
                               md:w-52
                               my-14
                               rounded-[100%]
                               text-[#0B0D17]
                               text-2xl">
               Explorar
           </button>
        </Link>
      </div>
    </>
  )
}

export { HomePage }