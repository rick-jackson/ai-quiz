import { Container as ChakraContainer, Text } from "@chakra-ui/react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

const Container: React.FC<ContainerProps> = ({ title, children, id = "" }) => {
  return (
    <ChakraContainer
      px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
      py={7}
      textAlign="center"
    >
      <Text textStyle="4xl" fontWeight={600} mb={7} id={id} scrollMarginTop={5}>
        {title}
      </Text>

      {children}
    </ChakraContainer>
  );
};

export default Container;
