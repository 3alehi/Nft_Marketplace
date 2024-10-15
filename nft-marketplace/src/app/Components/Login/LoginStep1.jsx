import React from 'react'
export default function LoginStep1({handelLoginModal }) {
    
  return (
    <div class="fixed inset-0 flex items-center justify-center bg-[#2B2B2B] bg-opacity-50 z-10">
    <div class="p-8 rounded-lg shadow-lg">
    <i className=' cursor-pointer w-full flex justify-end ' onClick={handelLoginModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#fff" stroke-linecap="square" stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="#fff" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>

            </i>
            <h1 className='text-[20px] font-mono'>Welcom To Nft MarketPlace</h1>

    
    </div>
  </div>
  

)
}
