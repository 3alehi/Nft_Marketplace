import React from 'react'
import CollectionBox from '../CollectionBox/CollectionBox'

export default function Collection() {
    const data = [0,1]
    return (
        <div className='mt-20 mx-80 max-2xl:mx-16 max-xl:mx-10 '>
            <h1 className='text-[36px]'>Trending Collection</h1>
            <p className='text-[22px] mt-3 mb-16'>Checkout our weekly updated trending collection.</p>
            <div className='grid grid-cols-3'>

                <CollectionBox/>
                <CollectionBox/>

                <CollectionBox/>

           

            </div>
        </div>
        
    )
}
