{/*Component representing the blog preview card*/}
import React, { useState } from 'react';
import Illustration from './Illustration';
import Avatar_And_Name from './Avatar_And_Name';
import Date from './Date';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Learning_Box from './Learning_Box';

const Card = () => {
    
    {/*State to track whether the heading is being hovered:*/}
    const [isHeadingHovered, setIsHeadingHovered] = useState(false);

    {/*Shadow effect for the card based on the hover state:*/}    
    const card_shadow = {
        boxShadow: isHeadingHovered ? '20px 20px 0px hsl(0, 0%, 7%)' : '10px 10px 0px hsl(0, 0%, 7%)',
    };

    return (
        <div className='flex flex-col justify-center items-center h-auto w-auto bg-white rounded-xl border-solid border-Black border-2 Mobile_Large_Size:w-80 Mobile_Medium_Size:w-72 Mobile_Small_Size:w-64' style={card_shadow} >
            <Illustration />
            <Learning_Box />
            <Date />
            <Heading setIsHeadingHovered={setIsHeadingHovered} />
            <Paragraph />
            <Avatar_And_Name name="Grey Hooper" />
        </div>
    );
};

export default Card;