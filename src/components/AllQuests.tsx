import { Text, Stack } from "@chakra-ui/react";
import { Quest, QuestListItem } from "./QuestListItem";

interface QuestListProps {
	quests: Quest[];
	label?: string;
}

export const QuestList = ({ label, quests }: QuestListProps) => {
	return (
		<Stack p="5" gap="5">
			{label && <Text>{label}</Text>}
			<Stack gap="5">
				{quests.map((quest) => (
					<QuestListItem quest={quest} />
				))}
			</Stack>
		</Stack>
	);
};
