import { Button, Flex, Input } from "@chakra-ui/react";
import Container from "../Container";

const Form: React.FC = () => {
  return (
    <Container title="Or Enter Your Own Category">
      <Flex as="form" flexDir="column" gap={4} maxW={600} m="auto">
        <Input
          borderRadius={15}
          size="2xl"
          placeholder="Enter category"
          bg="whiteAlpha.100"
          borderColor="whiteAlpha.300"
          color="white"
          _focus={{
            outlineColor: "whiteAlpha.300",
            outlineWidth: 2,
          }}
          _placeholder={{
            color: "whiteAlpha.600",
          }}
        />
        <Input
          borderRadius={15}
          size="2xl"
          placeholder="Enter a number"
          bg="whiteAlpha.100"
          borderColor="whiteAlpha.300"
          color="white"
          type="number"
          min={2}
          max={6}
          _focus={{
            outlineColor: "whiteAlpha.300",
            outlineWidth: 2,
          }}
          _placeholder={{
            color: "whiteAlpha.600",
          }}
        />
        <Button size="2xl" borderRadius={15} bg="blue.900">
          Generate
        </Button>
      </Flex>
    </Container>
  );
};

export default Form;
