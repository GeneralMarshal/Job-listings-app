export default function FilterBox({filter, removeFilter, type}){
    return (
      <>
        <div className=" flex items-center overflow-hidden h-[30px] rounded-[6px]  ">
          <span className="flex items-center py-[5px] px-[5px] h-full bg-[#e4f5f5] text-sm font-bold text-[#499ea6]">
            {filter}
          </span>
          <span className=" flex h-full py-[5px] px-[7px] bg-[#499ea6] hover:bg-black cursor-pointer items-center">
            <img src="/icon-remove.svg" alt="" className=" h-[10px]" onClick={()=>removeFilter(type, filter)}/>
          </span>
        </div>
      </>
    );
}