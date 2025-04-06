import { Box, Text, Image, Grid, For } from "@chakra-ui/react";
import Container from "../Container";

const howItWorks = [
  {
    image: "1.png",
    text: "Choose a topic from the ones offered, or create your own",
  },
  {
    image: "2.png",
    text: "AI generates questions based on chosen category",
  },
  {
    image: "3.png",
    text: "Get the result of your passage",
  },
];

const HowItWorks: React.FC = () => {
  const GridItem = ({ image, text }: { image: string; text: string }) => (
    <Box maxW={320}>
      <Image
        src={`/robot/${image}`}
        w="100%"
        objectFit="contain"
        maxH={200}
        h="auto"
      />
      <Text textStyle="2xl">{text}</Text>
    </Box>
  );
  return (
    <Container title="How It Works">
      <Grid
        textAlign="center"
        templateColumns={{
          base: "auto",
          md: "repeat(3, auto)",
        }}
        justifyContent="center"
        gap={{ base: 5, lg: 20 }}
      >
        <For each={howItWorks}>
          {(item) => (
            <GridItem key={item.text} text={item.text} image={item.image} />
          )}
        </For>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
