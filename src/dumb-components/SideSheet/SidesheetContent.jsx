import React from "react";
import { Pane, TabNavigation, SidebarTab } from "evergreen-ui";
import BroodLordGIF from "../../../assets/carbot_broodlord.gif";

function SidesheetContent(props) {
	const { handlers } = props;

	const optionItems = {
		profile_summary: {
			label: "Profile Summary",
			onSelect: () => handlers.profileSummary(),
		},
		change_profile: {
			label: "Change profile",
			onSelect: () => handlers.changeProfile(),
		},
		ladder: {
			label: "Ladder",
			onSelect: () => handlers.ladder(),
		},
		achievements: {
			label: "Achievements",
			onSelect: () => handlers.achievements(),
		},
		statistics: {
			label: "Statistics",
			onSelect: () => handlers.statistics(),
		},
		replay_analysis: {
			label: "Replay Analysis",
			onSelect: () => {},
		},
		logout: {
			label: "Logout",
			onSelect: () => handlers.logout(),
		},
	};

	return (
		<Pane>
			<img
				style={{ width: "100px", height: "50px" }}
				src={BroodLordGIF}
				alt="Broodlord GIF"
			/>
			<TabNavigation marginX={-4} marginBottom={16}>
				{Object.keys(optionItems).map((option, index) => (
					<SidebarTab
						key={optionItems[option].label}
						is="span"
						onSelect={optionItems[option].onSelect}
						id={"i" + index}
					>
						{optionItems[option].label}
					</SidebarTab>
				))}
			</TabNavigation>
		</Pane>
	);
}

export default SidesheetContent;
