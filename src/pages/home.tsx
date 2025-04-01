import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Center,
  Input,
  Field,
  Card,
  Grid,
} from "@chakra-ui/react";
//@ts-ignore
import List from "../assets/list.svg?react";
//@ts-ignore
import Customize from "../assets/customize.svg?react";
//@ts-ignore
import Quiz from "../assets/quiz.svg?react";
import LayoutBlock from "../components/Layout/Block";

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
      <LayoutBlock
        title="How it Works"
        subtitle="Generate a set of AI-powered quiz questions in three simple steps."
      >
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
      </LayoutBlock>
      <LayoutBlock title="Quiz Topics" color="#000">
        <Grid
          templateColumns={{
            base: "auto",
            sm: "repeat(2, auto)",
            md: "repeat(3, auto)",
            xl: "repeat(4, auto)",
          }}
          mt={5}
          gap={5}
        >
          {new Array(12).fill(null).map((el, index) => (
            <Card.Root
              key={index}
              bg="none"
              bgImage="url(./categories/category.jpg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              h={200}
              transition="0.2s"
              _hover={{
                zIndex: 99,
                transform: "scale(1.05)",
              }}
            >
              <Card.Body>
                <Card.Title>Living room Sofa</Card.Title>
                <Card.Description>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </LayoutBlock>
      <LayoutBlock title="Create Your Own Quiz" textAlign="center">
        <Flex
          as="form"
          maxW={500}
          m="auto"
          boxShadow="2xl"
          p={10}
          mt={5}
          borderRadius={10}
          flexDir="column"
          gap={5}
        >
          <Field.Root required>
            <Field.Label textStyle="xl" fontWeight={700}>
              Topic
            </Field.Label>
            <Input
              placeholder="Enter a topic"
              size="xl"
              borderColor="gray.700"
              borderRadius={10}
            />
          </Field.Root>
          <Field.Root required>
            <Field.Label textStyle="xl" fontWeight={700}>
              Number of questions
            </Field.Label>
            <Input
              placeholder="Enter a number"
              size="xl"
              borderColor="gray.700"
              borderRadius={10}
              type="number"
            />
          </Field.Root>
          <Button type="submit" size="xl" bg="bg.primary">
            Generate
          </Button>
        </Flex>
      </LayoutBlock>
    </Box>
  );
};

export default HomePage;
