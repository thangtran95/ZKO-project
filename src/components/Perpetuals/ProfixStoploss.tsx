import React from "react";
import { MouseEventHandler } from "react";

interface ProfixProps {
	isProfix: boolean;
	toggleProfixProp: () => void;
}
export default function ProfixStoploss({
	isProfix,
	toggleProfixProp,
}: ProfixProps) {
	return (
		<div>
			<div className="px-4 mb-4">
				<div
					className={`border border-[#4F4F4F] duration-500 transition-all overflow-hidden rounded-lg px-4 py-4 ${
						isProfix ? "h-[282px]" : "h-[60px]"
					}`}
				>
					<div
						onClick={toggleProfixProp}
						className="flex justify-between cursor-pointer"
					>
						<h2 className="">Take profit / Stop loss</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-6 h-6 transition-all duration-500 ${
								isProfix ? "rotate-0" : "-rotate-180"
							}`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>

					<div className=" mt-4">
						<div className="flex justify-between items-center mb-4">
							<p className="text-white">TP</p>
							<div className="flex gap-1 text-[#828282] text-center text-[10px] ">
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									0%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									25%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									50%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									75%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									100%
								</button>
							</div>
						</div>
						<input
							type="text"
							placeholder="No TP"
							className="h-14 w-full border text-white placeholder:text-[#4F4F4F] border-[#4F4F4F] pl-4 pr-2 py-2 rounded-lg bg-transparent"
						/>
					</div>

					<div className=" mt-4">
						<div className="flex justify-between items-center mb-4">
							<p className="text-white">SL</p>
							<div className="flex gap-1 text-[#828282] text-center text-[10px] ">
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									0%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									15%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									20%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									50%
								</button>
								<button className="px-2 border border-[#4F4F4F] rounded-sm h-[14px] leading-[100%]">
									75%
								</button>
							</div>
						</div>
						<input
							type="text"
							placeholder="No TP"
							className="h-14 w-full border text-white placeholder:text-[#4F4F4F] border-[#4F4F4F] pl-4 pr-2 py-2 rounded-lg bg-transparent"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
