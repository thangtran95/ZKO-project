import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();
	return (
		<div className="p-[15px] border-b border-[#4F4F4F] flex justify-between">
			<div className="flex">
				<a href="#">
					<img src="../assets/images/logo.png" alt="" />
				</a>
				<ul className="flex items-center gap-[32px] uppercase text-[14px] font-medium style-header">
					<li>
						<Link
							to="/trade"
							className={location.pathname === "/trade" ? "active" : ""}
						>
							Trade
						</Link>
					</li>
					<li>
						<Link
							to="/pool"
							className={location.pathname === "/pool" ? "active" : ""}
						>
							Pool
						</Link>
					</li>
					<li>
						<Link
							to="/farm"
							className={location.pathname === "/farm" ? "active" : ""}
						>
							Farm
						</Link>
					</li>
					<li>
						<Link to="/" className={location.pathname === "/" ? "active" : ""}>
							Perpetuals
						</Link>
					</li>
					<li>
						<Link
							to="/leaderboard"
							className={location.pathname === "/leaderboard" ? "active" : ""}
						>
							Leaderboard
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex gap-[32px]">
				<button className="bg-[#33333380] rounded px-8 py-[5px] text-white">
					X1 Network
				</button>
				<button className="btn-connect-wallet rounded px-8 py-[5px] bg-gradient-[linear-gradient(96deg, #BAFC4E 1.96%, #83FFC7 55.54%, #FBFF41 109.59%)]">
					Connect Wallet
				</button>
			</div>
		</div>
	);
}
