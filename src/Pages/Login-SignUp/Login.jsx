import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../src/assets/images/login/login.svg"
import { FaFacebookSquare, FaGoogle, FaInstagramSquare } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {userSignIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    
    const handleUserSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        userSignIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
            form.reset()

        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="flex items-center justify-between mb-28">
            <div className="w-1/2">
                <img src={img} alt="" />
            </div>
            <div className="w-1/2 border border-[#D0D0D0] rounded-xl p-20">
                <form onSubmit={handleUserSignIn}>
                    <h1 className="text-4xl font-bold mb-12">Login</h1>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Confirm Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] border-white">Sign In</button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="mt-7">Or Sign In with</p>
                    <div className="flex items-center justify-center gap-4 my-7">
                        <button className="text-3xl p-4 bg-[#F5F5F8] rounded-full border-0"><FaFacebookSquare></FaFacebookSquare></button>
                        <button onClick={handleGoogleSignIn} className="text-3xl p-4 bg-[#F5F5F8] rounded-full border-0"><FaGoogle></FaGoogle></button>
                        <button className="text-3xl p-4 bg-[#F5F5F8] rounded-full border-0"><FaInstagramSquare></FaInstagramSquare></button>
                    </div>
                    <p>Already have an account? <Link to='/signUp' className="text-[#FF3811] text-lg font-semibold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;