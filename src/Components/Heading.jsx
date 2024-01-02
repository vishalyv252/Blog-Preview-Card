{/*Component displaying a heading of text*/}
import React from 'react';

const Heading = ({ setIsHeadingHovered }) => {
    return (
        <div className='px-3 py-1 mr-auto Mobile_Small_Size:px-2.5 Mobile_Small_Size:py-0.5'>
            <p className='font-fig_tree text-Black text-2xl font-bold hover:text-Yellow hover:cursor-pointer Mobile_Large_Size:text-xl Mobile_Medium_Size:text-base Mobile_Small_Size:text-sm' onMouseEnter={() => setIsHeadingHovered(true)} onMouseLeave={() => setIsHeadingHovered(false)}>HTML & CSS foundations</p>
        </div>
    );
};

export default Heading;