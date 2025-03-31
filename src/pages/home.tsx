import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
//@ts-ignore
import List from "../assets/list.svg?react";
//@ts-ignore
import Customize from "../assets/customize.svg?react";
//@ts-ignore
import Quiz from "../assets/quiz.svg?react";

const NAV_ITEMS = ["Home", "About", "Contact"];
const STEPS = [
  { icon: <List width="100%" height="100%" />, text: "Select a topic" },
  {
    icon: <Customize width="100%" height="100%" fill="#4d37a7" />,
    text: "AI generated Quiz",
  },
  {
    icon: <Quiz width="100%" height="100%" fill="#4d37a7" />,
    text: "Get your questions",
  },
];

const HomePage: React.FC = () => {
  return (
    <Box h="100%" bg="gray.100">
      <Container
        bgImage="url(/bg.svg)"
        bgRepeat="no-repeat"
        bgSize="cover"
        py={5}
        px={{ base: 5, md: 10, lg: 20 }}
        maxW="container.xl"
      >
        <Flex as="header" justify="space-between" align="center">
          <Text as="span" textStyle="2xl">
            Logo
          </Text>
          <Flex as="nav" gap={6} display={{ base: "none", md: "flex" }}>
            {NAV_ITEMS.map((item) => (
              <Text key={item} as="span" textStyle="2xl">
                {item}
              </Text>
            ))}
          </Flex>
        </Flex>
        <Box py={{ base: 10, md: 20 }} position="relative">
          <Box
            maxW={{ base: 650, md: 600 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              as="h1"
              textStyle={{ base: "4xl", sm: "6xl" }}
              fontWeight={600}
              lineHeight={1.1}
            >
              Generate Quiz Questions with AI
            </Text>
            <Text
              as="h2"
              textStyle={{ base: "xl", sm: "2xl" }}
              mt={{ base: 3, sm: 6 }}
            >
              Choose a topic or enter your own, and let AI create questions for
              your quiz.
            </Text>
            <Flex
              gap={4}
              mt={{ base: 5, sm: 10 }}
              wrap="wrap"
              justify={{ base: "center", md: "flex-start" }}
              flexDir={{ base: "column", sm: "row" }}
            >
              <Button
                flex={{ base: "auto", sm: 1 }}
                variant="subtle"
                bg="bg.secondary"
                color="white"
                size="2xl"
                borderColor="bg.primary"
              >
                Get Started
              </Button>
              <Button
                variant="subtle"
                size="2xl"
                flex={{ base: "auto", sm: 1 }}
                color="bg.primary"
                borderColor="bg.secondary"
              >
                Enter a topic
              </Button>
            </Flex>
          </Box>
          <Image
            src="./iphone.webp"
            position="absolute"
            top={{ base: "auto", md: 10 }}
            left={{ base: "50%", md: "70%" }}
            transform={{ base: "translateX(-50%)", md: "none" }}
            display={{ lgDown: "none" }}
            height={{ base: 300, md: 580 }}
            boxShadow="8px 8px 24px rgba(66, 68, 90, 1)"
            borderRadius={46}
          />
        </Box>
      </Container>
      <Container
        py={10}
        px={{ base: 5, md: 10, lg: 20 }}
        maxW="container.xl"
        color="gray.900"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontWeight={500} textStyle={{ base: "4xl", sm: "5xl" }}>
          How it Works
        </Text>
        <Text textStyle="xl" fontWeight={500}>
          Generate a set of AI-powered quiz questions in three simple steps.
        </Text>
        <Flex
          alignItems="stretch"
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 10, xl: 20 }}
          mt={8}
        >
          {STEPS.map(({ icon, text }, index) => (
            <Flex
              key={index}
              textAlign="center"
              alignItems="center"
              flexDir="column"
              justify="center"
              boxShadow="md"
              p={6}
              borderRadius={10}
              flex={1}
            >
              <Center maxW={200}>{icon}</Center>
              <Text textStyle="3xl" fontWeight={600} mt={4}>
                {text}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
