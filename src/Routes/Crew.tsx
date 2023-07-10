import { useState } from "react";
import srcData from "../../public/data.json";

function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);
  const [crewActiveIndex, setCrewActiveIndex] = useState(0);
 
  if(screen.width < 375) {
    document.body.style.background = `url(${srcData.backgroundImages[0].crew.mob})  no-repeat  fixed`;
    document.body.style.backgroundSize = "cover";
  }
  if(screen.width < 700 && screen.width > 375) {
    document.body.style.background = `url(${srcData.backgroundImages[0].crew.tab})  no-repeat  fixed`;
    document.body.style.backgroundSize = "cover";
  }
  if(screen.width > 700) {
     document.body.style.background = `url(${srcData.backgroundImages[0].crew.desk})  no-repeat  fixed`;
    document.body.style.backgroundSize = "cover";
  }
 window.addEventListener("resize", () => {
     if(screen.width < 375) {
         document.body.style.background = `url(${srcData.backgroundImages[0].crew.mob})  no-repeat  fixed`;
         document.body.style.backgroundSize = "cover";
      }
      if(screen.width < 700 && screen.width > 375) {
         document.body.style.background = `url(${srcData.backgroundImages[0].crew.tab})  no-repeat  fixed`;
         document.body.style.backgroundSize = "cover";
      }
      if(screen.width > 700) {
         document.body.style.background = `url(${srcData.backgroundImages[0].crew.desk})  no-repeat  fixed`;
         document.body.style.backgroundSize = "cover";
      }
    });
 
    const Circles = (): JSX.Element[] => {
     const c: JSX.Element[] = [];
     for(let i = 0; i < 4; i++) {
         let backGround: string
         i == crewActiveIndex
         ? (backGround = "bg-white")
         : (backGround = "bg-[#979797]");
       c.push(
         <div
            key={i}
            className={`${backGround}  active:bg-white
                        cursor-pointer  hover:bg-white  rounded-xl  w-[10px]  h-[10px]`}
            onClick={() => {
             setCrewIndex(i);
             setCrewActiveIndex(i);
            }}
         ></div>
       )
     }
     return c;
    }
    return(
     <>
       <div className=" centerContent sm:h-screen md:!h-[80vh] sm:!grid
                        md:grid-cols-2">
        <div className="md:self-end">
          <h5 className="subTitle sm:!text-left m-5 tracking-[.2em]
                         self-center align-middle md:ml-[15%]">
            <span className="subTitleNums  ">02</span>&nbsp; CONHEÇA SUA TRIPULAÇÃO
          </h5>
        </div>
        <div className="relative row-start-4  md:absolute md:right-0
                        md:bottom-0  md:row-start-1 md:col-start-2 md:row-end-4  ">
          <img
            className="w-[175px] md:h-[80vh] md:w-auto block 
                       mx-auto relative  
                       z-[-1]  "
            src={srcData.crew[crewIndex].images.png}
            alt=""
          />
          <div className="photoLine mx-auto sm:hidden"></div>
        </div>
        <div className=" flex justify-center gap-5 my-5 row-start-3 
                         md:self-start  md:justify-self-start  md:ml-[15%]">
          <Circles></Circles>
        </div>
        <div className="space-y-3 mt-4 md:ml-[15%] md:self-center md:row-start-2">
          <div className="md:!text-left text-center">
            <h3 className="text-white opacity-50 md:text-lg font-[Bellefair]">
              {srcData.crew[crewIndex].role.toUpperCase()}
            </h3>
            <h1 className="text-white text-2xl  md:text-3xl font-[Bellefair]">
              {srcData.crew[crewIndex].name.toUpperCase()}
            </h1>
          </div>
          <p className="body !mx-4 text-center md:text-left text-sm md:!ml-0">
            {srcData.crew[crewIndex].bio}
          </p>
        </div>
      </div>
     </>
    )
}

export { Crew }