import { useState } from "react";
import srcData from "../../public/data.json";

function Technology() {
   const [techIndex, setTechIndex] = useState(0);
   const [activeChildIndex, setActiveChildIndex] = useState(0);
   const [screenRes, setScreenRes] = useState(screen.width);

   if(screen.width < 375) {
     document.body.style.background = `url(${srcData.backgroundImages[0].technology.mob})  no-repeat  fixed`;
     document.body.style.backgroundSize = "cover";
   } 
   if(screen.width < 700  && screen.width > 375) {
     document.body.style.background = `url(${srcData.backgroundImages[0].technology.tab})  no-repeat  fixed`
     document.body.style.backgroundSize = "cover";
   }
   if(screen.width > 700) {
     document.body.style.background = `url(${srcData.backgroundImages[0].technology.desk})  no-repeat  fixed`
     document.body.style.backgroundSize = "cover";
   }
   window.addEventListener("resize", () => {
    setScreenRes(screen.width) 
      if(screen.width < 375) {
        document.body.style.background = `url(${srcData.backgroundImages[0].technology.mob})  no-repeat  fixed`;
        document.body.style.backgroundSize = "cover";
       } 
      if(screen.width < 700  && screen.width > 375) {
        document.body.style.background = `url(${srcData.backgroundImages[0].technology.tab})  no-repeat  fixed`
        document.body.style.backgroundSize = "cover";
        }
      if(screen.width > 700) {
        document.body.style.background = `url(${srcData.backgroundImages[0].technology.desk})  no-repeat  fixed`
        document.body.style.backgroundSize = "cover";
        
      }
   });
   const Indexs = (): JSX.Element[] => {
    const c: JSX.Element[] = [];
      let backGround: string;
      let numColor: string;
    for (let i: number = 0; i < 3; i++) {
        if (activeChildIndex == i) {
            backGround = "bg-white";
            numColor = "text-black";
        } else {
            numColor = "text-white";
            backGround = "bg-none";
        }
        c.push(
            <h1
          key={i}
          className={`${numColor} border-solid flex items-center
                    ${backGround}
                    justify-center hover:bg-white cursor-pointer hover:text-black
                    border-white border-[1px] border-opacity-50 rounded-full w-10 h-10 md:w-14 md:h-14 text-center`}
          onClick={() => {
            setTechIndex(i);
            setActiveChildIndex(i);
          }}
        >
                {i + 1}
            </h1>
        )
    }

    return c;
   };
   return (
    <>
      <div className=" ">
        <div className="col-span-5">
          <h5 className="subTitle m-14 md:ml-[9%] sm:text-left
                         tracking-[.2em]">
            <span className="subTitleNums  ">03</span>&nbsp; SPACE LAUNCH 101
          </h5>
        </div>
        <div className=" centerContent md:grid md:grid-cols-9 md:align-top ">
          <div className="col-start-8 col-end-11  row-start-1 row-end-3">
            <img
              className="md:h-full !block rounded"
              src={
                screenRes < 770
                  ? srcData.technology[techIndex].images.landscape
                  : srcData.technology[techIndex].images.portrait
              }
              alt=""
            />
          </div>
          <div className="flex justify-center gap-5 mt-5 md:flex-col md:col-start-1 md:justify-self-end">
            {<Indexs></Indexs>}
          </div>
          <div className="space-y-3 mt-4 col-span-5 md:ml-10 md:self-center">
            <div className=" text-center md:text-left">
              <h3 className="text-[#D0D6F9]    font-BarlowCondensed tracking-[.2em]">
                {"the terminology ...".toUpperCase()}
              </h3>
              <h1 className="text-white text-2xl   font-[Bellefair] ">
                {srcData.technology[techIndex].name.toUpperCase()}
              </h1>
            </div>
            <p className="body !mx-4 md:!text-left md:!ml-0 text-sm md:w-[70%]">
              {srcData.technology[techIndex].description}
            </p>
          </div>
        </div>
      </div>
    </>
   )
}

export { Technology }