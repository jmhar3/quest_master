import { Flex, Text, Icon, Stack } from "@chakra-ui/react";
import { ElementType } from "react";

export interface Quest {
	icon: ElementType;
	label: string;
	damage: number;
}

interface QuestListItemProps {
	quest: Quest;
}

export const QuestListItem = ({ quest }: QuestListItemProps) => {
	return (
		<Flex py="3" px="5" gap="5" bg="brand.100" align="center">
			<Icon as={quest.icon} />
			<Stack>
				<Text>{quest.label}</Text>
				<Text>inflicts {quest.damage} damage</Text>
			</Stack>
		</Flex>
	);
};
