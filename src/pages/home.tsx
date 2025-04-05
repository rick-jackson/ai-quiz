import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Input,
  Card,
  Grid,
  For,
  List,
} from "@chakra-ui/react";

const HomePage: React.FC = () => {
  const categories = [
    { name: "Art", icon: "./categories/art.png" },
    { name: "Chemistry", icon: "./categories/chemistry.png" },
    { name: "Economy", icon: "./categories/economy.png" },
    { name: "Food", icon: "./categories/food.png" },
    { name: "Geography", icon: "./categories/geography.png" },
    { name: "History", icon: "./categories/history.png" },
    { name: "Literature", icon: "./categories/literature.png" },
    { name: "Logic", icon: "./categories/logic.png" },
    { name: "Mathematic", icon: "./categories/mathematic.png" },
    { name: "Medicine", icon: "./categories/medicine.png" },
    {
      name: "Philosopny and Religion",
      icon: "./categories/philosophy-and-religion.png",
    },
    { name: "Policy", icon: "./categories/policy.png" },
    { name: "Space", icon: "./categories/space.png" },
    { name: "Sport", icon: "./categories/sport.png" },
    { name: "Technologies", icon: "./categories/technologies.png" },
    { name: "Travel", icon: "./categories/travel.png" },
    { name: "Zoology", icon: "./categories/zoology.png" },
  ];
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
      <Box bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)">
        <Container
          px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
          py={5}
          pt={10}
        >
          <Text textStyle="4xl" fontWeight={600} textAlign="center">
            How It Works
          </Text>
          <List.Root
            gap={20}
            variant="plain"
            // align="start"
            alignItems="center"
            mt={5}
            textStyle="2xl"
            flexDir={{ base: "column", md: "row" }}
            textAlign="center"
            justifyContent="space-around"
          >
            <List.Item
              flexDir="column"
              alignItems="center"
              // alignItems={{ base: "start", lg: "center" }}
              maxW={300}
            >
              <List.Indicator
                asChild
                color="white"
                fontSize={{ base: "inherit", lg: 100 }}
              >
                <Image
                  src="/robot/robot3.png"
                  w="100%"
                  objectFit="contain"
                  maxH={200}
                  h="auto"
                />
                {/* <IoMdSettings /> */}
              </List.Indicator>
              Choose a topic from the ones offered, or create your own
              {/* AI generates questions based on chosen category */}
            </List.Item>
            <List.Item
              flexDir="column"
              alignItems="center"
              // alignItems={{ base: "start", lg: "center" }}
              maxW={300}
            >
              <List.Indicator
                asChild
                color="white"
                fontSize={{ base: "inherit", lg: 100 }}
              >
                <Image
                  src="/robot/robot1.png"
                  w="100%"
                  objectFit="contain"
                  maxH={200}
                  h="auto"
                />
                {/* <IoMdCheckmarkCircleOutline /> */}
              </List.Indicator>
              {/* Try to answer all the questions correctly! */}
              AI generates questions based on chosen category
            </List.Item>
            <List.Item flexDir="column" alignItems="center" maxW={300}>
              <List.Indicator
                asChild
                color="white"
                fontSize={{ base: "inherit", lg: 100 }}
              >
                {/* <IoIosText /> */}
                <Image
                  src="/robot/robot2.png"
                  w="100%"
                  objectFit="contain"
                  maxH={200}
                  h="auto"
                />
              </List.Indicator>
              Get the result of your passage
              {/* Get immediate feedback on your answers */}
            </List.Item>
          </List.Root>
        </Container>
        <Container
          px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
          py={5}
          textAlign="center"
        >
          <Text textStyle="4xl" fontWeight={600}>
            Choose a Category
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(2, auto)",
              sm: "repeat(2, auto)",
              md: "repeat(3, auto)",
              xl: "repeat(4, auto)",
            }}
            mt={5}
            gap={5}
          >
            <For each={categories}>
              {(category, index) => (
                <Card.Root
                  key={index}
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                  color="white"
                  textStyle="3xl"
                  fontWeight={500}
                  transition="0.2s"
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  <Card.Body>
                    <Image
                      src={category.icon}
                      w="100%"
                      h="auto"
                      maxW={200}
                      m="auto"
                    />
                    <Card.Title textAlign="center">{category.name}</Card.Title>
                  </Card.Body>
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
};

export default HomePage;
