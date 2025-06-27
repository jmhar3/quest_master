import * as React from "react";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";

export const App = () => (
	<Grid templateColumns="repeat(5, 1fr)" gap={6}>
		<GridItem colSpan={1} bg="tomato">
			<Stack>
				<Heading>Quest Master</Heading>
			</Stack>
		</GridItem>
		<GridItem colSpan={2} bg="papayawhip">
			<Stack></Stack>
		</GridItem>
	</Grid>
);
