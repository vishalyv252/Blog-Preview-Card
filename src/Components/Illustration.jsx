{/*Component displaying an illustration*/}
import React from 'react'
import illustration from '../Images/illustration-article.svg';

const Illustration = () => {
    return (
        <div>
            <div className='p-3 Mobile_Small_Size:p-2.5'>
                <img src={illustration} alt={'Illustraion'} className='h-auto w-auto rounded-xl Mobile_Large_Size:w-72 Mobile_Medium_Size:w-64 Mobile_Small_Size:w-60' />
            </div>
        </div>
    )
}

export default Illustration;