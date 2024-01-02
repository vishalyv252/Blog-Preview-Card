{/*Component displaying a paragraph of text*/}
import React from 'react'

const Paragraph = () => {
    return (
        <div className='px-3 py-1 mr-auto Mobile_Small_Size:px-2.5 Mobile_Small_Size:py-0.5'>
            <p className='font-fig_tree text-Grey text-base w-80 Mobile_Large_Size:text-sm Mobile_Large_Size:w-72 Mobile_Medium_Size:text-xs Mobile_Medium_Size:w-64 Mobile_Small_Size:text-[11px] Mobile_Small_Size:leading-normal Mobile_Small_Size:w-56'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
    )
}

export default Paragraph;