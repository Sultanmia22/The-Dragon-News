import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { creatUser, setUser, updateUser } = use(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log({ name, photoURL, email, password });

        //! Creat Users
        creatUser(email, password)
            .then(res => {
                const users = res.user;

                //! Update Profile 
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...users, displayName: name, photoURL: photoURL })
                    })

                    .catch(er => {
                        const errors = er;
                        toast.error(errors)
                    })

                toast.success('Register Successfull')
                event.target.reset()
            })

            .catch(er => {
                const error = er.message;
                // console.log(error);
                toast.error(error)
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-center py-4 text-2xl'> Register your account </h2>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">

                            {/* Name Field */}
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name='name' />

                            {/* Image Field */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" name='photoURL' />

                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />

                            {/* Password Field */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' />

                            <div className='flex gap-3 mt-2'>
                                <input type="checkbox" name="" id="" />
                                <p>Accept Term & Conditions</p>
                            </div>

                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p>Already Have An Account ? <Link to='/auth/login' className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;