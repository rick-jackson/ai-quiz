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
  For,
  List,
} from "@chakra-ui/react";
//@ts-ignore
import ListIcon from "../assets/list.svg?react";
//@ts-ignore
import Customize from "../assets/customize.svg?react";
//@ts-ignore
import Quiz from "../assets/quiz.svg?react";
import LayoutBlock from "../components/Layout/Block";
import { IoMdSettings } from "react-icons/io";
import { IoIosText } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const NAV_ITEMS = ["Home", "About", "Contact"];
const STEPS = [
  { icon: <ListIcon width="100%" height="100%" />, text: "Select a topic" },
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
    <Box>
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
      <Box bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)">
        <Container
          px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
          py={5}
          pt={10}
        >
          <Text
            textStyle="4xl"
            fontWeight={600}
            textAlign={{ base: "center", lg: "left" }}
          >
            How It Work
          </Text>
          <List.Root
            gap="2"
            variant="plain"
            align="start"
            mt={5}
            textStyle="2xl"
            flexDir={{ base: "column", lg: "row" }}
          >
            <List.Item>
              <List.Indicator asChild color="white">
                <IoMdSettings />
              </List.Indicator>
              AI generates questions based on chosen category
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="white">
                <IoMdCheckmarkCircleOutline />
              </List.Indicator>
              Try to answer all the questions correctly!
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="white">
                <IoIosText />
              </List.Indicator>
              Get immediate feedback on your answers
            </List.Item>
          </List.Root>
        </Container>
        <Container
          px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
          py={5}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Text textStyle="4xl" fontWeight={600}>
            Choose a Category
          </Text>
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
            <For each={new Array(8).fill(null)}>
              {(_, index) => (
                <Card.Root
                  key={index}
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                  color="white"
                  textStyle="3xl"
                  fontWeight={500}
                  h={200}
                  transition="0.2s"
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  <Card.Body>sdf</Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>
        </Container>
        <Container
          px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
          py={5}
        >
          <Text textStyle="4xl" fontWeight={600} textAlign="center">
            Or Enter Your Own Category
          </Text>
          <Flex as="form" flexDir="column" gap={4} maxW={600} m="auto" mt={5}>
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
      </Box>
    </Box>
  );

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
          gap={{ base: 5, xl: 20 }}
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
              <Center maxW={{ base: 100, md: 150 }}>{icon}</Center>
              <Text
                textStyle={{ base: "xl", xl: "3xl" }}
                fontWeight={600}
                mt={4}
              >
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
          {new Array(12).fill(null).map((_, index) => (
            <Card.Root
              key={index}
              bg="none"
              bgImage="url(./categories/category.jpg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              h={200}
              transition="0.2s"
              boxShadow="inset 0px -84px 63px -22px rgba(0, 0, 0, 0.82)"
              _hover={{
                zIndex: 99,
                transform: "scale(1.05)",
              }}
            >
              <Card.Body justifyContent="end" color="white">
                <Card.Title>Living room Sofa</Card.Title>
                <Card.Description color="whiteAlpha.900">
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
