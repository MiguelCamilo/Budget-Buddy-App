import { useState } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// google auth
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { UserAuth } from "../../context/AuthContext";
import { auth } from "../../firebase.config";

import "./logincard.css";

export default function LoginCard() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { googleSignIn, user, setUser } = UserAuth();

	const navigate = useNavigate();

	const handleContinueGoogle = async () => {
		try {
			await googleSignIn();
		} catch (err) {
			console.error(err);
		}
	};

	const handleGoogleEmailAndPassword = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return toast.error("Please fill out all required fields");
		}

		try {
			const promise = await signInWithEmailAndPassword(auth, email, password);
			return promise;
		} catch (error) {
			console.error(error);
			switch (error.code) {
				case "auth/invalid-email":
					toast.error("Incorrect Email or Password.");
					break;
				case "auth/user-not-found":
					toast.error(
						"Account does not exist or already in use."
					);
					break;
				case "auth/wrong-password":
					toast.error(
						"Password is invalid."
					);
					break;
				case "auth/user-disabled":
					toast.error(
						"The user account has been disabled by an administrator."
					);
					break;
				default:
					toast.error("An undefined error occurred.");
			}
		}
	};

	// listener for changes in the AuthState
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// if the user is logged in the redirect
	// and it will run everytime the user state updates
	useEffect(() => {
		if (user != null) {
			navigate("/dashboard");
		}
	}, [user]);

	return (
		<>
			{/* Global Container */}
			<div className="h-full w-full md:w-[50%] fixed z-[1] top-0 overflow-hidden pt-6 md:pt-20 bg-white">
				{/* Left Side */}
				<div className="w-full px-6 py-8 md:px-8">
					<div className="flex justify-center mx-auto">
						<ScrollReveal.h1
							delay={0}
							easing="anticipate"
							className="text-[48px] font-black text-center text-[#46b563] italic tracking-tighter"
						>
							Budget Buddy
						</ScrollReveal.h1>
					</div>
					<ScrollReveal.h2
						delay={0.3}
						easing="anticipate"
						className="w-[100%] min-w-[300px] text-gray-500 text-md text-center font-normal italic leading-8"
					>
						Take control of your finances and achieve your financial goals with
						our easy-to-use expense tracking and budgeting tools. Let's get
						started!
					</ScrollReveal.h2>
					<ScrollReveal.div
						delay={0.4}
						easing="anticipate"
						className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border-2 rounded-lg border-gray-700 hover:bg-gray-100"
					>
						<div className="px-4 py-2">
							<svg className="w-6 h-6" viewBox="0 0 40 40">
								<path
									d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
									fill="#FFC107"
								/>
								<path
									d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
									fill="#FF3D00"
								/>
								<path
									d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
									fill="#4CAF50"
								/>
								<path
									d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
									fill="#1976D2"
								/>
							</svg>
						</div>
						<button
							onClick={handleContinueGoogle}
							className="w-5/6 px-4 py-3 font-bold text-center"
						>
							Continue with Google
						</button>
					</ScrollReveal.div>
					<ScrollReveal.div delay={0.6} easing="anticipate">
						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
							<span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
								or login with email
							</span>
							<span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
						</div>

						<form onSubmit={handleGoogleEmailAndPassword}>
							<div className="mt-4">
								<label
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
									htmlFor="LoggingEmailAddress"
								>
									Email Address
								</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									type="email"
								/>
							</div>

							<div className="flex justify-between mt-4">
								<label
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
									htmlFor="loggingPassword"
								>
									Password
								</label>
							</div>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
								type="password"
							/>

							<div className="mt-6">
								<button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 hover:opacity-90">
									Login
								</button>
							</div>
						</form>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
							<Link to="/register">
								<span className="text-xs text-center uppercase text-black hover:underline">
									Or Create an account
								</span>{" "}
							</Link>
							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
						</div>
					</ScrollReveal.div>
				</div>
				{/* Right Side */}
				<div className="h-full w-[50%] fixed -z-[1] top-0 overflow-hidden right-0">
					<div
						className="w-full h-full gradient-bg hidden md:block bg-cover"
						style={{
							backgroundImage:
								'url("https://images.unsplash.com/photo-1561414926-7f3f921a2e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80")',
						}}
					/>
				</div>
			</div>
		</>
	);
}
