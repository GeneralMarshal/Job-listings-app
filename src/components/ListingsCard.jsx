import { useState } from "react";


export default function ListingsCard({listing, toggleFilter, filters}){
    // const listingArray = [listing.role, listing.level];
    // const language = listing.languages
    // const tools = listing.tools
    // listingArray.push(...language);
    // listingArray.push(...tools);
    // console.log(listingArray)
    return (
      <div className=" flex relative border-t border-[#829899] bg-white flex-wrap md:flex-nowrap items-center w-full max-w-[900px] p-[30px] shadow-xl">
        <img
          src={listing.logo}
          alt=""
          className=" mx-[20px] ml-[10px] absolute md:relative h-[70px] md:h-[100px] top-[-25px] md:top-0"
        />
        <div className=" flex flex-wrap w-full justify-between gap-[15px]">
          {/* description */}
          <div className=" my-[15px] max-w-[230px] w-full ">
            <div className="text-sm text-[#499ea6] gap-[10px] font-bold">
              {listing.company}
              {/* <span className="  text-sm font-semibold m-[10px] ml-[15px] rounded-[15px] h-[15px] p-[6px] bg-[#499ea6] text-[white] ">
                  New!
                </span>
                <span className="  text-sm font-semibold rounded-[15px] h-[15px] p-[6px] bg-[black] text-[white] ">
                  Featured
                </span> */}
            </div>
            <p className=" text-lg text-[#499ea6] font-bold my-[7px]">
              {listing.position}
            </p>
            <div className=" flex justify-between">
              <span className=" text-[#829899] text-sm font-semibold">
                {listing.postedAt}
              </span>
              <span className=" text-[#829899] text-sm font-semibold">.</span>
              <span className=" text-[#829899] text-sm font-semibold">
                {listing.contract}
              </span>
              <span className=" text-[#829899] text-sm font-semibold">.</span>
              <span className=" text-[#829899] text-sm font-semibold">
                {listing.location}
              </span>
            </div>
          </div>
          {/* divider line for smaller screens */}

          <span className="block md:hidden w-full h-[1px] bg-[#829899] my-[20px]"></span>
          {/* filters */}
          <div className=" flex items-center">
            <div className=" flex flex-wrap items-center gap-[10px] w-full">
              <span
                onClick={() => toggleFilter(listing.role, "role")}
                className={`flex items-center justify-center p-[5px] cursor-pointer font-semibold text-sm rounded-[6px]  ${
                  filters.role && filters.role === listing.role
                    ? "text-[#e4f5f5] bg-[#499ea6]"
                    : " bg-[#e4f5f5] text-[#499ea6]"
                }`}
              >
                {listing.role}
              </span>
              <span
                className={`flex items-center justify-center cursor-pointer p-[5px] font-semibold text-sm rounded-[6px]
                  ${
                    filters.level && filters.level === listing.level
                      ? "text-[#e4f5f5] bg-[#499ea6]"
                      : " bg-[#e4f5f5] text-[#499ea6]"
                  }
                  `}
                onClick={() => toggleFilter(listing.level, "level")}
              >
                {listing.level}
              </span>
              {listing.languages.map((language, index) => {
                return (
                  <span
                    key={index}
                    className={` flex items-center cursor-pointer justify-center p-[5px] font-semibold text-sm rounded-[6px]
                      ${
                        filters.languages &&
                        filters.languages.includes(language)
                          ? "text-[#e4f5f5] bg-[#499ea6]"
                          : " bg-[#e4f5f5] text-[#499ea6]"
                      }
                      `}
                    onClick={() => toggleFilter(language, "languages")}
                  >
                    {language}
                  </span>
                );
              })}
              {listing.tools.map((tool, index) => {
                return (
                  <span
                    key={index}
                    className={`flex items-center  justify-center p-[5px] font-semibold text-sm cursor-pointer rounded-[6px] 
                        ${
                          filters.tools && filters.tools.includes(tool)
                            ? "text-[#e4f5f5] bg-[#499ea6]"
                            : " bg-[#e4f5f5] text-[#499ea6]"
                        }   
                      `}
                    onClick={() => toggleFilter(tool, "tools")}
                  >
                    {tool}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}