import React from 'react'
import CollectionBox from '../CollectionBox/CollectionBox'

export default function Collection() {
    const data = [0, 1, 3
    ]
    return (
        <div className='mt-20 mx-80 max-2xl:mx-16 max-xl:mx-10 '>
            <h1 className='text-[36px] max-sm:text-[25px]'>Trending Collection</h1>
            <p className='text-[22px] mt-3 mb-16 max-sm:text-[15px]'>Checkout our weekly updated trending collection.</p>
            <div className='grid grid-cols-3 max-lg:grid-cols-3 max-sm:grid-cols-1'>
            {data.map((i, index) => (
  <div
    key={index}
    className={index === 0 ? "block sm:block" : "hidden sm:block"}
  >
    <CollectionBox />
  </div>
))}



            </div>
        </div>

    )
}
