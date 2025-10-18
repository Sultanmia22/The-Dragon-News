import React from 'react';
import swiming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGround from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <h2 className='font-bold p-6'> Q-Zone </h2>
            <div className='flex flex-col justify-center'>
                <img src={swiming} alt="" />
                <img src={classImg} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;