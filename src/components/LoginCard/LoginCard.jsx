import { ScrollReveal } from "reveal-on-scroll-react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.svg";

// google auth
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { useContext } from "react";
import { auth } from "../../App";

export default function LoginCard() {
	const { setUser } = useContext(AuthContext)
	const navigate = useNavigate();

	const handle_login = async () => {
		
		const provider = new GoogleAuthProvider();
		const _user = await signInWithPopup(auth, provider).catch((err) => {
			toast.error(err);
		});
		setUser(_user.user);
		navigate("/dashboard");
		toast.success("Successfully Logged In");
	};



	return (
		<div className="flex h-screen bg-white rounded-r-xl">
			<div className="flex flex-wrap w-[400px] flex-col justify-start py-9 px-6 pt-0 mt-10">
				<ScrollReveal.h1 delay={1}  easing="anticipate" className="text-[48px] font-black text-center text-[#00D884] italic tracking-tighter">
					Budget Buddy
				</ScrollReveal.h1>

				<ScrollReveal.h2 delay={1}  easing="easeOut"   className="w-[40%] min-w-[300px] m-[24px] text-gray-500 text-lg font-bold leading-8 whitespace-pre-wrap">
					Welcome to Budget Buddy! Take control of your finances and achieve
					your financial goals with our easy-to-use expense tracking and
					budgeting tools. Let's get started!
				</ScrollReveal.h2>
				<div className="flex justify-start flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0 ml-5">
					<button
						onClick={handle_login}
						className="flex items-center justify-center space-x-3 border p-3 sm:p-0 bg-[#1ACB88] border-gray-300 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-0.5 duration-150 w-[50%] font-extrabold text-white"
					>
						<span className="font-normal">Get Started</span>
					</button>
				</div>
				<img src={logo} alt="" className="sm:hidden mt-20" />
			</div>
			<div className="hidden md:flex flex-row items-center py-9 px-10 pt-0 bg-[#1E8277] bg-contain shrink-1">
				<img src={logo} alt="" className="" />
			</div>
		</div>
	);
}

// {/* Bottom Content */}
// <p className="py-6 text-md font-light text-center text-purple-400">
// 	Or Login in With
// </p>

// {/* bottom buttons container */}
//<a></a>;

// 	<div className="p-6 md:p-20">
// 	{/* content */}
// 	<h2 className="mb-5 text-4xl font-bold text-center text-white">Log In</h2>
// 	<p className="max-w-sm mb-12 font-sans font-light text-white text-center ml-10">
// 		Log in to view your account
// 	</p>
// 	<input
// 		type="text"
// 		className="w-full p-6 border border-purple-300 hover:border-purple-300 bg-[#2e3647] rounded-md placeholder:font-sans placeholder:font-light"
// 		placeholder="Email"
// 	/>
// 	<input
// 		type="text"
// 		className="w-full p-6 mt-5 border border-purple-300 hover:border-purple-300 bg-[#2e3647] rounded-md placeholder:font-sans placeholder:font-light"
// 		placeholder="Password"
// 	/>

// 	{/* middle container */}
// 	<div className="flex flex-col items-center justify-between my-8 space-y-2 md:space-y-0">
// 		<p className="text-purple-400 font-light">Dont' have an account?</p>
// 		<Link to="/signup" className="font-bold text-lg text-purple-400">
// 			Sign Up
// 		</Link>
// 	</div>

// 	{/* next btn  */}
// 	<button className="w-full flex justify-center items-center p-6 space-x-4 font-sans text-white rounded-md shadow-lg px-9 bg-purple-400 hover:shadow-gray-900 hover:shadow-2xl border transition hover:-translate-y-0.5 duration-150">
// 		<span>{arrow}</span>
// 	</button>

// 	{/* Border */}
// 	<div className="mt-16 border-b border-gray-300"></div>
// </div>
