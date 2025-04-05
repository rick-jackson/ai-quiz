import {
  Image,
  Card,
  Grid,
  Collapsible,
  useBreakpointValue,
} from "@chakra-ui/react";
import Container from "../Container";
import { categories } from "../../common/data/categories";
import { useNavigate } from "react-router-dom";

const CategoryGrid: React.FC<{
  items: typeof categories;
  onStartQuiz: (name: string) => void;
}> = ({ items, onStartQuiz }) => (
  <Grid
    templateColumns={{
      base: "repeat(2, auto)",
      md: "repeat(3, auto)",
      lg: "repeat(4, auto)",
    }}
    gap={5}
  >
    {items.map((category, index) => (
      <Card.Root
        key={index}
        bg="whiteAlpha.100"
        borderColor="whiteAlpha.300"
        color="white"
        textStyle="3xl"
        fontWeight={500}
        transition="0.2s"
        cursor="pointer"
        onClick={() => onStartQuiz(category.name)}
        _hover={{ transform: "scale(1.05)" }}
      >
        <Card.Body>
          <Image src={category.icon} w="100%" h="auto" maxW={200} m="auto" />
          <Card.Title textAlign="center">{category.name}</Card.Title>
        </Card.Body>
      </Card.Root>
    ))}
  </Grid>
);

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const visibleCount = ["base", "sm"].includes(breakpoint!)
    ? 4
    : ["md"].includes(breakpoint!)
    ? 6
    : 8;

  const visibleCategories = categories.slice(0, visibleCount);
  const hiddenCategories = categories.slice(visibleCount);

  const handleStartQuiz = (name: string) => {
    localStorage.setItem("category", name);
    navigate("/quiz");
  };

  return (
    <Container title="Choose a Category">
      <Collapsible.Root m="auto">
        <CategoryGrid items={visibleCategories} onStartQuiz={handleStartQuiz} />
        <Collapsible.Content mt={5}>
          <CategoryGrid
            items={hiddenCategories}
            onStartQuiz={handleStartQuiz}
          />
        </Collapsible.Content>
        <Collapsible.Trigger
          borderRadius={15}
          fontSize={18}
          bg="blue.900"
          paddingY="3"
          width="100%"
          mt={5}
          maxW={500}
          cursor="pointer"
        >
          Show more
        </Collapsible.Trigger>
      </Collapsible.Root>
    </Container>
  );
};

export default Categories;
