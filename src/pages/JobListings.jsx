import ListingsCard from "../components/ListingsCard";
import data from "../data.json";
import { useState, useEffect } from "react";
import FilterBox from "../components/FilterBox";

export default function JobListings() {
  const [originalListings, setOriginalListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([])
  const [filters, setFilters] = useState({
    role: "",
    level: "",
    languages: [],
    tools: [],
  });
  


  async function getListings() {
    setOriginalListings(data);
    setFilteredListings(data)
  }
  useEffect(() => {
    getListings();
  }, []);

  useEffect(()=>{
    let newListings = Object.values(originalListings)
    if(filters.role){
      newListings =  newListings.filter((item) => item.role === filters.role)
    }
    if (filters.level) {
      newListings = newListings.filter((item) => item.level === filters.level);
    }
    if(filters.languages && filters.languages.length > 0){
      newListings = newListings.filter((item) => filters.languages.every((language) => item.languages.includes(language)))
    }
    if (filters.tools && filters.tools.length > 0) {
            newListings = newListings.filter((item) => filters.tools.every((tool) => item.tools.includes(tool)))

    }

    setFilteredListings(newListings)

  }, [filters, originalListings])


  function toggleFilter(filter, type) {
    var newFilters = { ...filters };

    if (type === "role" || type === "level") {
      newFilters[type] === filter
        ? (newFilters = { ...filters, [type]: "" })
        : (newFilters = { ...filters, [type]: filter });
    } else if (type === "languages" || type === "tools") {
      newFilters[type].includes(filter)
        ? (newFilters = {
            ...filters,
            [type]: [
              ...filters[type].filter((f) => {
                return f !== filter;
              }),
            ],
          })
        : (newFilters = {
            ...filters,
            [type]: [...filters[type], filter],
          });
     
    }
    setFilters(newFilters);
  }

  function removeFilter(type, filter) {
    if (type === "role" || type === "level") {
      const newFilters = { ...filters, [type]: "" };
      setFilters(newFilters);
    } else {
      const newFilters = { ...filters };
      const index = newFilters[type].indexOf(filter);
      console.log(index);
      if (index > -1) {
        newFilters[type].splice(index, 1);
      }
      setFilters(newFilters);
    }
  }

 
  return (
    <>
      <header className=" relative">
        <img src="/bg-header-desktop.svg" alt="" className="" />
        <div className=" overlay w-full h-full inset-0 bg-[#248e8e] opacity-[50%]"></div>
      </header>
      <main className=" relative flex flex-col gap-[30px] w-full items-center justify-center p-[20px] pt-[70px] bg-[#eefafa]">
        <div className="flex items-center justify-between  max-w-[900px] w-full h-[70px] px-[10px]   bg-[#ffffff]">
          <div className=" flex  gap-[12px] flex-wrap  ">
            {filters.role && (
              <FilterBox
                filter={filters.role}
                removeFilter={removeFilter}
                type={"role"}
              />
            )}
            {filters.level && (
              <FilterBox
                filter={filters.level}
                removeFilter={removeFilter}
                type={"level"}
              />
            )}
            {filters.languages &&
              filters.languages.length > 0 &&
              filters.languages.map((prop, index) => {
                return (
                  <FilterBox
                    key={index}
                    filter={prop}
                    removeFilter={removeFilter}
                    type={"languages"}
                  />
                );
              })}
            {filters.tools &&
              filters.tools.length > 0 &&
              filters.tools.map((prop, index) => {
                return (
                  <FilterBox
                    key={index}
                    filter={prop}
                    removeFilter={removeFilter}
                    type={"tools"}
                  />
                );
              })}
          </div>

          <span className=" text-[#499ea6] font-semibold hover:underline  cursor-pointer" onClick={ ()=>{
            setFilters({
              role: "",
              level: "",
              languages: [],
              tools: [],
            });
          }}>
            Clear
          </span>
        </div>

        {filteredListings.map((listing, index) => {
          return (
            <ListingsCard
              key={index}
              listing={listing}
              toggleFilter={toggleFilter}
              filters={filters}
            />
          );
        })}
      </main>
    </>
  );
}
