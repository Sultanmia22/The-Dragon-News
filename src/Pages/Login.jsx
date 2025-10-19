
import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
 
    const location = useLocation()

    const navigate = useNavigate()

    const {signInUser} = use(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email,password)
        .then(res => {
            const result = res.user;
            toast.success('Login Successfull')
            event.target.reset()
            navigate( `${location.state?location.state:'/'}`)
        })
        .catch(er => {
            const error = er.message;
            toast.error(error)
        })
    }

    
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-center py-4 text-2xl'> Login Your Account </h2>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

                            {/* Email Field  */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />

                            {/* Password Field */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;