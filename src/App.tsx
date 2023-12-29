import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Perpetuals from "./components/Perpetuals/Perpetuals";
import Trade from "./components/Trade/Trade";
import Pool from "./components/Pool/Pool";
import Farm from "./components/Farm/Farm";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
	return (
		<div className=" bg-black min-h-screen">
			<Router>
				<Header />
				<Routes>
					<Route path="/trade" element={<Trade />} />
					<Route path="/pool" element={<Pool />} />
					<Route path="/farm" element={<Farm />} />
					<Route path="/" element={<Perpetuals />} />
					<Route path="/leaderboard" element={<Leaderboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
