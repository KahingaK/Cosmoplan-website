import React from 'react'
import { navigation } from "../data";
import {Link} from "react-router-dom"

function NavMobile() {
  return (
    <div className='bg-white w-[250px] h-full shadow-2xl'>
        <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6`'>
            {navigation.map((item, index) => 
            (
                <li className=' cursor-pointer  text-xl font-medium capitalize'  key={index}>
                    <Link to={item.href} >{item.name}</Link>
                </li>
            )
              )}
        </ul>
    </div>
  )
}

export default NavMobile