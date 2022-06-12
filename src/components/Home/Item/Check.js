import React from 'react';
// import {BsCheckSquareFill} from "react-icons/bs";
import {BsCheck} from "react-icons/bs";

const Check = ({isCompleted}) => (
    <div className={`border-2 rounded-lg border-pink-700 w-7 h-7 mr-3
    ${isCompleted ? 'bg-pink-400' : '' } flex items-center justify-center`}>
        {
            isCompleted &&
            <BsCheck size={24} className='text-gray-600'/>
        }
    </div>
);

export default Check;