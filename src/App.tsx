import * as React from "react"
import {
  Box,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Link } from 'react-router-dom';

export const App = () => (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text textAlign="center" fontWeight={500} fontSize="35px" paddingBottom="10%">
            Welcome to the Geyser evaluation app!
          </Text>
          <Link to={'/solution'}>
            <Logo h="40vmin" pointerEvents="none" />
          </Link>
          <Text>
            <b>Click on the Logo to start.</b> Show us your best skills and mostly, have fun!
          </Text>
        </VStack>
      </Grid>
    </Box>
)
