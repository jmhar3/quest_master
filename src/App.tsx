import * as React from "react";
import { Provider } from "./components/ui/provider";
import { Text } from "@chakra-ui/react";

export const App = () => (
  <Provider>
    <Text>Hello World</Text>
  </Provider>
);
