import { useLocation } from "react-router-dom";
import { pages } from "../common/data/categories";
import PageNotFound from "../components/404";
import {
  Box,
  Card,
  Collapsible,
  Container,
  Flex,
  List,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { splitArray } from "../common/data/utils/splitArray";

const Category: React.FC = () => {
  const location = useLocation();
  const category = pages[location.pathname.split("/")[1] as keyof typeof pages];
  const currentSize = useBreakpointValue({
    md: "md",
  });

  if (!category) return <PageNotFound />;

  return (
    <Box bg="#584db9" h="100%">
      <Box
        bgImage={`url(${category.img})`}
        bgSize="cover"
        maxH="50vh"
        backgroundPosition="center"
        display="flex"
        backgroundRepeat="no-repeat"
        minH="30vh"
        alignItems="flex-end"
      >
        <Box
          boxShadow="inset 0px -47px 48px 13px rgba(88, 77, 185, 1)"
          w="100%"
        >
          <Container>
            <Text textStyle="5xl" fontWeight={500}>
              {category.title}
            </Text>
          </Container>
        </Box>
      </Box>
      <Container py={5}>
        <Flex justify="space-between" gap={10}>
          {splitArray(currentSize === "md" ? 2 : 1, category.topics).map(
            (column, index) => (
              <List.Root key={index} variant="plain" gap={5} w="100%">
                {column.map((topic) => (
                  <Card.Root
                    as="li"
                    key={topic.title}
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.300"
                    textStyle="2xl"
                    fontWeight={500}
                    cursor="pointer"
                    color="white"
                  >
                    <Collapsible.Root
                      unmountOnExit
                      key={topic.title}
                      className="custom-collapsible"
                      h="fit-content"
                    >
                      <Collapsible.Trigger
                        w="100%"
                        p={3}
                        py={6}
                        textAlign="left"
                        cursor="pointer"
                      >
                        {topic.title}
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <Box padding="4">
                          If you inspect the DOM, you'll notice that the content
                          is unmounted when collapsed. This is useful for
                          performance reasons when you have a lot of collapsible
                          content.
                        </Box>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </Card.Root>
                ))}
              </List.Root>
            )
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Category;
