import { Box, Button, Container, Text, Image } from "@chakra-ui/react";

const Banner: React.FC = () => {
  return (
    <Box bg="linear-gradient(63deg, rgba(163,156,239,1) 0%, rgba(105,99,242,1) 100%)">
      <Container
        display="flex"
        justifyContent="space-between"
        px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
        py={10}
      >
        <Box
          my="auto"
          width={{ base: "100%", lg: "fit-content" }}
          maxW={{ base: "600px", lg: "100%" }}
          textAlign={{ base: "center", lg: "left" }}
          m="auto"
        >
          <Text
            as="h1"
            fontSize={{
              base: "clamp(3rem, 5vw, 4rem) !important",
              md: "clamp(4rem, 5vw, 5rem) !important",
            }}
            fontWeight={700}
            whiteSpace={{ base: "normal", lg: "nowrap" }}
            lineHeight={"1.1 !important"}
          >
            Generate Quiz{" "}
            <Box as="br" display={{ base: "none", md: "block" }} />
            Questions with AI
          </Text>
          <Text as="h2" textStyle="2xl" mt={7}>
            Choose a topic or enter your own, and let AI create questions for
            your quiz.
          </Text>
          <Button
            bg="blue.900"
            mt={10}
            size="2xl"
            borderRadius={50}
            px={20}
            width={{ base: "100%", lg: "auto" }}
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            Get Started
          </Button>
        </Box>
        <Box w="100%" display={{ base: "block", lgDown: "none" }}>
          <Image
            src="/images/robot.png"
            w="100%"
            objectFit="contain"
            maxH={550}
            h="auto"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
