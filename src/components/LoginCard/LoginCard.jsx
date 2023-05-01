import logo from '../../assets/logo.svg';
import { ScrollReveal } from 'reveal-on-scroll-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// google auth
import { UserAuth } from '../../context/AuthContext';

export default function LoginCard() {
	const { googleSignIn, user } = UserAuth();

	const navigate = useNavigate()
	const handle_google_login = async () => {
		try {
			await googleSignIn();
		} 
		catch (err) {
			console.error(err);
		}
	};

	// if the user is logged in the redirect
	// and it will run everytime the user state updates
	useEffect(() => {
		if (user != null) {
			navigate('/dashboard');
		}
	}, [user]);

	return (
		<div className="flex h-screen bg-white rounded-r-xl">
			<div className="flex flex-wrap w-[400px] flex-col justify-start py-9 px-6 pt-0 mt-10">
				<ScrollReveal.h1
					delay={1}
					easing="anticipate"
					className="text-[48px] font-black text-center text-[#00D884] italic tracking-tighter"
				>
					Budget Buddy
				</ScrollReveal.h1>

				<ScrollReveal.h2
					delay={1}
					easing="easeOut"
					className="w-[40%] min-w-[300px] m-[24px] text-gray-500 text-lg font-bold leading-8 whitespace-pre-wrap"
				>
					Welcome to Budget Buddy! Take control of your finances and achieve
					your financial goals with our easy-to-use expense tracking and
					budgeting tools. Let's get started!
				</ScrollReveal.h2>
				<div className="flex justify-start flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0 ml-5">
					<button
						onClick={handle_google_login}
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
