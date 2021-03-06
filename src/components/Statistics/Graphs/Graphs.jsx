import React, { useEffect, useState } from "react";
import { Pane, Icon } from "evergreen-ui";

import MatchHistoryGraph from "./MatchHistoryGraph/MatchHistoryGraph";
import WinsPerMapGraph from "./WinsPerMapGraph/WinsPerMapGraph";

const graphs = [WinsPerMapGraph, MatchHistoryGraph];

function Graphs(props) {
	const [matches, setMatches] = useState([]); // Contains fetched info about games played
	useEffect(() => {
		const { matchHistory } = props;
		const formattedMatches = matchHistory.map(match => ({
			map: match.map,
			Result: match.decision === "Win" ? 1 : 0,
			date: new Date(match.date * 1000).toDateString(),
		}));
		setMatches(formattedMatches);
	}, []);
	return (
		<Pane className="graphs" display="flex">
			{graphs[Math.abs(props.graphIndex % graphs.length)](matches)}
			<Pane
				className="arrows"
				display="flex"
				flexFlow="column"
				justifyContent="space-around"
			>
				<Icon
					onClick={() => props.graphTabChange("up")}
					cursor="pointer"
					className="arrow-up"
					icon="arrow-up"
				/>
				<Icon
					onClick={() => props.graphTabChange("down")}
					cursor="pointer"
					className="arrow-down"
					icon="arrow-down"
				/>
			</Pane>
		</Pane>
	);
}

export default Graphs;
