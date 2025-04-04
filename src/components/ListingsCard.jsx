export default function ListingsCard(){
    return (
      <main className=" p-[50px]">
        <div className=" flex relative border-t border-[#829899] flex-wrap md:flex-nowrap items-center w-full max-w-[900px] p-[30px] shadow-xl">
          <img
            src="/photosnap.svg    "
            alt=""
            className=" mx-[20px] ml-[10px] absolute md:relative h-[70px] md:h-[100px] top-[-25px] md:top-0"
          />
          <div className=" flex flex-wrap w-full justify-between">
            {/* description */}
            <div className=" my-[15px]">
              <div className="text-sm text-[#499ea6] gap-[10px] font-bold">
                Photosnap
                <span className="  text-sm font-semibold m-[10px] ml-[15px] rounded-[15px] h-[15px] p-[6px] bg-[#499ea6] text-[white] ">
                  New!
                </span>
                <span className="  text-sm font-semibold rounded-[15px] h-[15px] p-[6px] bg-[black] text-[white] ">
                  Featured
                </span>
              </div>
              <p className=" text-lg text-[#499ea6] font-bold my-[7px]">
                Senior Frontend Developer
              </p>
              <div className=" flex justify-between">
                <span className=" text-[#829899] text-sm font-semibold">
                  1d ago
                </span>
                <span className=" text-[#829899] text-sm font-semibold">.</span>
                <span className=" text-[#829899] text-sm font-semibold">
                  Full Time
                </span>
                <span className=" text-[#829899] text-sm font-semibold">.</span>
                <span className=" text-[#829899] text-sm font-semibold">
                  USA only
                </span>
              </div>
            </div>
            {/* divider line for smaller screens */}

            <span className="block md:hidden w-full h-[1px] bg-[#829899] my-[20px]"></span>
            {/* filters */}
            <div className=" flex items-center">
              <div className=" flex flex-wrap items-center gap-[10px] w-full">
                <span className=" flex items-center justify-center p-[5px] font-semibold text-sm rounded-[6px] bg-[#e4f5f5] text-[#499ea6] ">
                  Frontend
                </span>
                <span className=" flex items-center justify-center p-[5px] font-semibold text-sm rounded-[6px] bg-[#e4f5f5] text-[#499ea6] ">
                  Frontend
                </span>
                <span className=" flex items-center justify-center p-[5px] font-semibold text-sm rounded-[6px] bg-[#e4f5f5] text-[#499ea6] ">
                  Frontend
                </span>
                <span className=" flex items-center justify-center p-[5px] font-semibold text-sm rounded-[6px] bg-[#e4f5f5] text-[#499ea6] ">
                  Frontend
                </span>
                <span className=" flex items-center justify-center p-[5px] font-semibold text-sm rounded-[6px] bg-[#e4f5f5] text-[#499ea6] ">
                  Frontend
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}