{/*Component displaying an avatar image and a name*/}
import React from 'react'
import avatar from '../Images/image-avatar.webp';

const Avatar_And_Name = (props) => {
    return (
        <div className='p-3 flex justify-center items-center mr-auto Mobile_Small_Size:p-2.5'>
            <img src={avatar} alt={'avatar'} className='h-8 w-8 Mobile_Small_Size:h-7 Mobile_Small_Size:w-7' />
            <p className='font-fig_tree text-Black text-base font-bold ml-3 Mobile_Large_Size:text-sm Mobile_Medium_Size:text-xs Mobile_Small_Size:text-[10px] Mobile_Small_Size:px-2.5 Mobile_Small_Size:py-0.5 Mobile_Small_Size:ml-1.5'>{props.name}</p>
        </div>
    )
}

export default Avatar_And_Name;