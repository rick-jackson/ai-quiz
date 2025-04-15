import { useLocation } from "react-router-dom";
import { pages } from "../common/data/categories";
import PageNotFound from "../components/404";
import { Box, Container, Text } from "@chakra-ui/react";

const Category: React.FC = () => {
  const location = useLocation();
  const category = pages[location.pathname.split("/")[1] as keyof typeof pages];

  if (!category) return <PageNotFound />;

  return (
    <Box
      bgImage={`url(${category.img})`}
      h="100%"
      bgSize="cover"
      maxH="50vh"
      backgroundPosition="center"
      display="flex"
      alignItems="flex-end"
      backgroundRepeat="no-repeat"
    >
      <Container py={5}>
        <Text textStyle="7xl">{category.title}</Text>
      </Container>
    </Box>
  );
};

export default Category;
