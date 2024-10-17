import React from 'react'
export default function CollectionBox() {
  return (
    <div className='px-4 '>
      <img className='rounded-xl' src="https://i.seadn.io/gcs/files/6b28d17c83d7e0449352ca005d904569.jpg?auto=format&dpr=1&h=500&fr=1" alt="img" />
      <div className="grid grid-cols-3">
        <img className='p-2 max-sm rounded-3xl' src="https://i.seadn.io/gcs/files/6b28d17c83d7e0449352ca005d904569.jpg?auto=format&dpr=1&h=500&fr=1" alt="" />
        <img className='p-2 max-sm rounded-3xl' src="https://i.seadn.io/gcs/files/6b28d17c83d7e0449352ca005d904569.jpg?auto=format&dpr=1&h=500&fr=1" alt="" />
        <div className='p-2 max-sm m-1 bg-bgBtn rounded-3xl flex'>
          <span className='font-mono bg-bgBtn items-center justify-center w-full text-center flex'>1024+</span>

        </div>
      </div>
      <h2 className='font-sans mt-3'>DSGN Animals</h2>
      <div className='flex 4 mt-2'>
        <img src="/images/avater.png" className='rounded-full mr-2' alt="NFT 1" />


        <p className='font-sans' >MrFox</p>
      </div>

    </div>
  )
}
