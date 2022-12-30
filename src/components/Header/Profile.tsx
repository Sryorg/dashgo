import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
  <Flex align="center">
    { showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Jorge</Text>
        <Text color="gray" fontSize="small">
          jorgeluis20022020@gmail.com
        </Text>
      </Box>
    ) }

    <Avatar size="md" src="https://github.com/SrYorg.png"/>
  </Flex>
  );
}