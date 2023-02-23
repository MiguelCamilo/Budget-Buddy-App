import Image from "./components/RightSide/Image"
import LeftSide from "./components/LeftSide/LeftSide";
import "./assets/App.css";

function App() {
	return (
		<div className="flex items-center justify-center h-screen w-screen bg-green-50">
      {/* card container */}
			<div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* left side */}
        <LeftSide />
        {/* right side */}
        <Image />
      </div>
		</div>
	);
}

export default App;
