import { useState } from "react";
import Leverage from "./Leverage";
import ProfixStoploss from "./ProfixStoploss";

export const LongShort = () => {
	const [isLong, setIsLong] = useState(true);
	const [isShort, setIsShort] = useState(false);
	const [rangeValue, setRangeValue] = useState(50);
	const [isProfix, setProfix] = useState(false);
	const [activeButton, setActiveButton] = useState("Market");
	const [showLimit, setShowLimit] = useState(false);
	const [showStop, setShowStop] = useState(false);

	const changeLongShort = (mode: number) => {
		setIsLong(mode == 1);
		setIsShort(mode != 1);
	};

	const handleMarketClick = () => {
		setActiveButton("Market");
		setShowLimit(false);
		setShowStop(false);
	};

	const handleLimitClick = () => {
		setActiveButton("Limit");
		setShowLimit(true);
		setShowStop(false);
	};

	const handleStopClick = () => {
		setActiveButton("Stop");
		setShowLimit(false);
		setShowStop(true);
	};

	const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRangeValue(+event.target.value);
	};

	const toggleProfix = () => {
		setProfix(!isProfix);
	};

	return (
		<div className="rounded-md border border-[#4F4F4F]">
			<div className="flex">
				<button
					className={`${
						isLong
							? "activeLong text-[#6FCF97]"
							: "text-[#828282] bg-transparent"
					}  grow p-2 btnLong font-medium duration-500 transition-all hover:text-[#6FCF97]`}
					onClick={() => changeLongShort(1)}
				>
					Long
				</button>
				<button
					className={`${
						isShort
							? "activeShort text-[#FF7676]"
							: "text-[#828282] bg-transparent"
					}  grow p-2 btnShort font-medium duration-500 transition-all hover:text-[#FF7676]`}
					onClick={() => changeLongShort(2)}
				>
					Short
				</button>
			</div>

			<div className="p-4">
				<div className="flex border border-[#333] rounded-md font-[500] text-[#4F4F4F]">
					<button
						onClick={handleMarketClick}
						className={`text-xs w-full py-[2px] transition-all hover:text-[#F2F2F2] hover:bg-[#333] ${
							activeButton === "Market" ? "text-[#F2F2F2] bg-[#333]" : ""
						}`}
					>
						Market
					</button>
					<button
						onClick={handleLimitClick}
						className={`text-xs w-full py-[2px] border-x border-[#333] transition-all hover:text-[#F2F2F2] hover:bg-[#333] ${
							activeButton === "Limit" ? "text-[#F2F2F2] bg-[#333]" : ""
						}`}
					>
						Limit
					</button>
					<button
						onClick={handleStopClick}
						className={`text-xs w-full py-[2px] transition-all hover:text-[#F2F2F2] hover:bg-[#333] ${
							activeButton === "Stop" ? "text-[#F2F2F2] bg-[#333]" : ""
						}`}
					>
						Stop
					</button>
				</div>

				<div
					className={`mt-4 overflow-hidden p-4 px-0 transition-all duration-500 ${
						showLimit ? "h-[100px]" : "mt-0 h-0 py-0"
					}`}
				>
					{showLimit && (
						<div className="flex h-full items-center gap-3">
							{isLong && (
								<div className="w-[50%] text-center">
									<p className="text-[10px]">Long BTC when</p>
									<span className="font-medium">1 BTC = </span>
								</div>
							)}
							{isShort && (
								<div className="w-[50%] text-center">
									<p className="text-[10px]">Short BTC when</p>
									<span className="font-medium">1 BTC = </span>
								</div>
							)}
							<div className="w-[50%] rounded-lg border bg-[#f1f1ff] p-4 transition-all hover:border-[#5d5fef]">
								<a
									className="block text-right text-[10px] font-medium text-[#5d5fef]"
									href="#"
								>
									Set to market
								</a>
								<div className="flex items-center">
									<input
										placeholder="00.0"
										className="w-full bg-transparent p-2 text-right outline-none"
										type="text"
									/>
									<span>USD</span>
								</div>
							</div>
						</div>
					)}
				</div>

				<div
					className={`overflow-hidden p-4 px-0 transition-all duration-500 ${
						showStop ? "h-[100px]" : "h-0 py-0"
					}`}
				>
					{showStop && (
						<div className="flex h-full items-center gap-3">
							{isLong && (
								<div className="w-[50%] text-center">
									<p className="text-[10px]">Long BTC when</p>
									<span className="font-medium">1 BTC = </span>
								</div>
							)}
							{isShort && (
								<div className="w-[50%] text-center">
									<p className="text-[10px]">Short BTC when</p>
									<span className="font-medium">1 BTC = </span>
								</div>
							)}
							<div className="w-[50%] rounded-lg border bg-[#f1f1ff] p-4 transition-all hover:border-[#5d5fef]">
								<a
									className="block text-right text-[10px] font-medium text-[#5d5fef]"
									href="#"
								>
									Set to market
								</a>
								<div className="flex items-center">
									<input
										placeholder="00.0"
										className="w-full bg-transparent p-2 text-right outline-none"
										type="text"
									/>
									<span>USD</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="flex justify-between px-4 font-medium text-sm mb-4 text-white">
				<p>Collateral</p>
				<p>
					Balance: <span>12.34</span>
				</p>
			</div>

			<div className="px-4 mb-4">
				<div className="border border-[#4F4F4F] flex rounded-lg px-2 pl-4 py-2">
					<div className="flex items-center w-full gap-2">
						<span className="bg-stake-dark-300 relative h-5 w-5 shrink-0 overflow-hidden rounded-full">
							<img
								alt="USD Coin"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								src="https://perp-devnet.ashswap.io/_next/static/media/usdc.6a9b797d.png"
							/>
						</span>
						<div className="truncate text-base text-white font-semibold sm:text-lg">
							USDC
						</div>
					</div>
					<div className="flex flex-col w-full items-end gap-1.5">
						<input
							type="text"
							inputMode="decimal"
							autoComplete="off"
							autoCorrect="off"
							pattern="^[0-9]*[.,]?[0-9]*$"
							placeholder="0.00"
							spellCheck="false"
							className="text-black-80 caret-iris-100 text-m-2xl h-10 w-full rounded border border-transparent bg-[#333] px-2 text-left font-medium outline-none transition-all duration-200 ease-in-out placeholder:text-[#89839b] sm:h-10 sm:text-base"
							// value=""
						/>
					</div>
				</div>
			</div>

			<Leverage onChangeRage={handleRangeChange} />

			<ProfixStoploss isProfix={isProfix} toggleProfixProp={toggleProfix} />

			<div className="px-4 mb-4">
				<button className="h-[52px] color-[#333] font-semibold text-base rounded-lg btn-connect-wallet w-full hover:bg-transparent hover:border-lime-300">
					Connect Wallet
				</button>
			</div>

			<div className="mb-6 h-12 px-4">
				{isLong ? (
					<div className="transition-all">
						<button className="border-1 border-[#27AE60] border-solid w-full rounded-lg bg-[#27AE60] p-2 text-base text-white transition-all hover:bg-transparent">
							Long / Buy
						</button>
					</div>
				) : (
					<div className="transition-all">
						<button className="border-1 border-[#EB5757] border-solid w-full rounded-lg bg-[#EB5757] p-2 text-base text-white transition-all hover:bg-transparent">
							Short / Sell
						</button>
					</div>
				)}
			</div>

			<div className="px-4">
				<div className="mt-3 space-y-2 py-3 ">
					<p className="flex justify-between text-sm font-medium">
						Pool <span className="text-white">BTC-USDT</span>
					</p>
					<p className="flex justify-between text-sm font-medium">
						Collateral In: <span className="text-white text-sm">USDT</span>
					</p>
				</div>

				<div className="py-3 border-y border-[#333] space-y-2">
					<p className="flex justify-between text-sm font-medium">
						Leverage:{" "}
						<span id="rangeNum" className="text-white text-sm">
							{rangeValue}x
						</span>
					</p>
					<p className="flex justify-between text-sm font-medium">
						Entry Price: <span className="text-white text-sm">$41,843.67</span>
					</p>
					<p className="flex justify-between text-sm font-medium">
						Price Impact: <span className="text-white text-sm">0.00%</span>
					</p>
					<p className="flex justify-between text-sm font-medium">
						Acceptable Price: <span className="text-white text-sm">-</span>
					</p>
					<p className="flex justify-between text-sm font-medium">
						Liq. Price: <span className="text-white text-sm">-</span>
					</p>
				</div>

				<div className="py-3">
					<p className="mb-3 flex justify-between text-sm font-medium">
						Fees (Rebated) and Price Impact:{" "}
						<span className="text-white text-sm underline">-$3.19</span>
					</p>
				</div>
			</div>
		</div>
	);
};
