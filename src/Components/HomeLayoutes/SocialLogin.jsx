import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'> Login with </h2>
            <div className='flex flex-col gap-3 my-4'>
                <button className='btn btn-outline btn-secondary'> <FcGoogle size={24} />Login with  Google</button>
                <button className='btn btn-outline btn-primary'> <FaGithub size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;