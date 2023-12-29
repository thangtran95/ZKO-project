import React from "react";
import { ChangeEventHandler } from "react";

export default function Leverage({
	onChangeRage,
}: {
	onChangeRage: ChangeEventHandler;
}) {
	return (
		<div>
			<div className="px-4 mb-4">
				<p className="text-sm text-white mb-4 font-medium">Limit Price</p>
				<input
					type="text"
					placeholder="43,345.86"
					className="h-14 w-full border text-white placeholder:text-[#4F4F4F] border-[#4F4F4F] pl-4 pr-2 py-2 rounded-lg bg-transparent"
				/>
			</div>

			<div className="px-4">
				<div className="flex justify-between">
					<p className="text-sm text-white mb-4 font-medium">Leverage</p>
				</div>

				<div className="relative mb-3">
					<input
						id="default-range"
						type="range"
						min={2}
						max={100}
						className=" bg-iris h-1 w-full cursor-pointer appearance-none rounded-lg px-2 shadow transition-all hover:h-2 dark:bg-[#333]"
						onChange={onChangeRage}
					/>
					<div className="relative inline-block h-6 w-full px-2">
						<span className="absolute left-2 text-center text-xs font-medium">
							2x
						</span>
						<span className="absolute left-[23%] text-center text-xs font-medium">
							25x
						</span>
						<span className="absolute left-[46%] text-center text-xs font-medium">
							50x
						</span>
						<span className="absolute right-[25%] text-center text-xs font-medium">
							75x
						</span>
						<span className="absolute right-0 text-center text-xs font-medium">
							100x
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
