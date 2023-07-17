import React from "react";
import {stats} from "../data";

function Stats() {
  return (
    <div className="bg-[#4B5B84] rounded-[20px] p-[36px]">
      <div className="flex flex-wrap gap-y-8 ">
        {stats.map((item, index)=> {
          return (
            <div className="min-h-[40px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:last:border-none   ">
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
