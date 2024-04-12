import React from 'react'
import buffet from '../../assets/buffet/1.webp'
import buffet2 from '../../assets/buffet/2.webp'
import buffet3 from '../../assets/buffet/3.webp'
import buffet4 from '../../assets/buffet/4.webp'
const Buffet = () => {
    return (
        <div className='mx-[5%]'>
            <h2 className=" heading-text font-bold text-black m-10 mt-[100px] text-2xl max-w-[400px] text-center ">Everything Buffet! 🍱 🍲</h2>

            <div className='flex gap-5 cursor-pointer'>
                <img src={buffet} alt="" className='w-[280px] h-[160px]' />
                <img src={buffet2} alt="" className='w-[280px] h-[160px]' />
                <img src={buffet3} alt="" className='w-[280px] h-[160px]' />
                <img src={buffet4} alt="" className='w-[280px] h-[160px]' />
            </div>
        </div>
    )
}

export default Buffet
