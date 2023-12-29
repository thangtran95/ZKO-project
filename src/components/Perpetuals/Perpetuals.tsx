import React from "react";
import Chart from "./Chart";
import { LongShort } from "./LongShort";

export default function Perpetuals() {
	return (
		<div className="flex flex-col-reverse lg:flex-row p-[15px] gap-3">
			<div className="chart w-[70%]">
				<Chart />
			</div>
			<div className="long_short w-[30%]">
				<LongShort />
			</div>
		</div>
	);
}
