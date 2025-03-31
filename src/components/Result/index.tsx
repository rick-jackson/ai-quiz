import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Flex,
  ProgressCircle,
  Text,
} from "@chakra-ui/react";

const Result: React.FC = () => {
  return (
    <Container
      m="auto"
      textAlign="center"
      display="flex"
      flexDir="column"
      gap={6}
      maxW={500}
    >
      <Text textStyle="5xl">Result</Text>

      <Box
        w={266}
        h={266}
        display="flex"
        justifyContent="center"
        alignItems="center"
        m="auto"
      >
        <ProgressCircle.Root
          value={88}
          colorPalette="pink"
          transform="scale(7)"
        >
          <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
            <ProgressCircle.Track />
            <ProgressCircle.Range strokeLinecap="unset" />
          </ProgressCircle.Circle>
          <AbsoluteCenter>
            <Text as="span" fontSize={10}>
              5/10
            </Text>
          </AbsoluteCenter>
        </ProgressCircle.Root>
      </Box>

      <Text>You got 80% of the answers correct. Congratulations</Text>

      <Flex flexDir="column" gap={2}>
        {["Пройти знову", "Оновити запитання", "Змінити тему"].map((label) => (
          <Button key={label} size="xl" variant="surface">
            {label}
          </Button>
        ))}
      </Flex>
    </Container>
  );
};

export default Result;
