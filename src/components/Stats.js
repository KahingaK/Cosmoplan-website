import React from "react";
import {stats} from "../data";

function Stats() {

    // Check if the current screen size is large (lg)
    const isLargeScreen = window.innerWidth >= 1024;

  return (
    <div className={`bg-[#386480] opacity-75 rounded-lg p-[36px] ${
      isLargeScreen ? "absolute w-[75%] bottom-6 left-4" : ""
    } `}>
      <div className="flex flex-wrap gap-y-8 ">
        {stats.map((item, index)=> {
          return (
            <div key = {index} className="min-h-[40px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:last:border-none   ">
              <div>{item.value}</div>
              <div>{item.text}</div>
            </div>
          )

          
        })}
      </div>
    </div>
  );
}

export default Stats;
