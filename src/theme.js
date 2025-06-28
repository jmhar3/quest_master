import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		brand: {
			100: "#F5F4E1",
			300: "#DDC5B4",
			400: "rgba(245, 244, 225, 0.60)",
			500: "#720000",
			700: "#240000",
			900: "#180000",
		},
	},
	styles: {
		global: {
			body: {
				bg: "brand.100",
				color: "brand.900",
			},
		},
	},
});
