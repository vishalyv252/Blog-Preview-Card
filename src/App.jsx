{/*Main component representing the structure of the application*/}

import React from 'react'
import Card from './Components/Card';

const App = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full bg-Yellow overflow-hidden'>
            <div className='flex flex-col justify-center items-center h-auto w-full'>
                <Card />
            </div>
        </div>
    )
}

export default App;