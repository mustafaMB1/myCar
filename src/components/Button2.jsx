import React from 'react';

const Button2 = ({title}) => {
    return (
        <>
            <button  className='border-Myprimary border text-Myprimary inline-block  py-3 px-10 font-bold rounded-full hover:bg-primaryHover hover:text-black transition uppercase '>{title}</button>
        </>
    );
} 

export default Button2;
