import * as React from "react";
import { GiBrightExplosion } from "react-icons/gi";

import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	Img,
	Progress,
	Stack,
	Text,
} from "@chakra-ui/react";

import { QuestList } from "./components/AllQuests";

import { userGreeting } from "./helpers/UserGreeting";
import { QuestListItem } from "./components/QuestListItem";

export const App = () => {
	const quests = [
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
		{ icon: GiBrightExplosion, label: "Evacuate Debris", damage: 15 },
	];

	return (
		<Grid templateColumns="repeat(3, 1fr)" gap={6} p="6">
			<GridItem as={Stack} h="90vh" colSpan={1} gap="5">
				<Stack>
					<Heading>Quest Master</Heading>
					<Text>{userGreeting()}</Text>
				</Stack>

				<Box bg="brand.300" overflow="hidden">
					<QuestList label="All Quests" quests={quests} />
				</Box>

				<Stack bg="brand.300" py="3" px="5">
					<Text>Unleash Battle Cry</Text>
				</Stack>
			</GridItem>
			<GridItem as={Stack} h="90vh" gap="5" colSpan={2}>
				<Stack p="5" bg="brand.300">
					<Flex>
						<Stack>
							<Stack p="5" bg="brand.400">
								<Img src="https://hips.hearstapps.com/hmg-prod/images/233718-1352185-64fb46f4d8c00.jpeg" />
								<Heading>Gluck Gluck 9000</Heading>
								<Text>3 days remaining</Text>
								<Progress value={80} />
							</Stack>
							<Text>Promoted Quests</Text>
						</Stack>

						<Stack>
							{quests.map((quest) => (
								<QuestListItem quest={quest} />
							))}
						</Stack>
					</Flex>
					<Flex>
						<QuestListItem quest={quests[0]} />
						<QuestListItem quest={quests[1]} />
					</Flex>
				</Stack>
				<Stack bg="brand.300">
					<Stack>
						<Text>Raid Dungeons</Text>
						<Flex>
							<Text>Waterfall Canyon</Text>
							<Text>The Matrix</Text>
							<Text>Hall of the Gods</Text>
						</Flex>
					</Stack>
				</Stack>
			</GridItem>
		</Grid>
	);
};
