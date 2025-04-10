import { Box, Image, Text } from "@chakra-ui/react";

const Loader: React.FC = () => {
  return (
    <Box m="auto" textAlign="center" p={5}>
      <Image
        src={`/robot/robotgif.gif`}
        objectFit="contain"
        maxH="50vh"
        m="auto"
      />
      <Text textStyle="4xl" mt={5} fontWeight={500}>
        I'm preparing a question for you:)
      </Text>
    </Box>
  );
};

export default Loader;
