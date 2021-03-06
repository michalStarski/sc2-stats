import React from "react";
import { Pane } from "evergreen-ui";
import LadderTable from "../LadderTable/LadderTable";
import LadderHeader from "../LadderHeader/LadderHeader";

function LadderPreview(props) {
	const { data } = props;
	return (
		<Pane>
			<Pane
				display="grid"
				gridTemplateColumns="20% 70% "
				alignItems="center"
			>
				<LadderHeader {...props} />
				<LadderTable
					{...data}
					tabIndex={props.tabIndex}
					selfIndex={props.selfIndex}
				/>
			</Pane>
		</Pane>
	);
}

export default LadderPreview;
