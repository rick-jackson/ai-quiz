import { Box, Spinner, Text } from "@chakra-ui/react";

const Loader: React.FC = () => {
  return (
    <Box m="auto" textAlign="center" p={5}>
      <Spinner w={200} h={200} color="bg.thirty" borderWidth={10} />
      <Text textStyle="4xl" mt={5} fontWeight={500}>
        I'm preparing a question for you:)
      </Text>
    </Box>
  );
};

export default Loader;
