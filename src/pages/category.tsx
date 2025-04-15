import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../common/data/categories";
import PageNotFound from "../components/404";
import {
  Box,
  Button,
  Card,
  Collapsible,
  Container,
  Flex,
  List,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { splitArray } from "../common/data/utils/splitArray";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSelect from "../components/LanguageSelect";

const Category: React.FC = () => {
  const location = useLocation();
  const category = pages[location.pathname.split("/")[1] as keyof typeof pages];
  const currentSize = useBreakpointValue({
    md: "md",
  });

  const isMobile = currentSize !== "md";
  const navigateTo = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!category) return <PageNotFound />;

  return (
    <>
      <Container
        as="header"
        position="absolute"
        width="100%"
        py={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="ghost" size="2xl" p={0} h={5} minW={5}>
          <GiHamburgerMenu />
        </Button>
        <LanguageSelect />
      </Container>
      <Box bg="#584db9" h="100%">
        <Box
          bgImage={`url(${category.img})`}
          bgSize="cover"
          maxH="50vh"
          backgroundPosition="center"
          display="flex"
          backgroundRepeat="no-repeat"
          minH="35vh"
          alignItems="flex-end"
          boxShadow="inset 0px -150px 57px -85px rgba(88, 77, 185, 1)"
          backgroundPositionY="top"
        >
          <Container>
            <Text textStyle="5xl" fontWeight={500}>
              {category.title}
            </Text>
          </Container>
        </Box>
        <Container py={5}>
          <Flex justify="space-between" gap={10}>
            {splitArray(!isMobile ? 2 : 1, category.topics).map(
              (column, index) => (
                <List.Root key={index} variant="plain" gap={5} w="100%">
                  {column.map((topic) => (
                    <Card.Root
                      as="li"
                      key={topic.title}
                      bg="whiteAlpha.100"
                      borderColor="whiteAlpha.300"
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
                          textStyle="2xl"
                          fontWeight={500}
                        >
                          {topic.title}
                        </Collapsible.Trigger>
                        <Collapsible.Content p={5}>
                          <List.Root variant="plain" gap={3}>
                            {topic.subtopics.map((subtopic) => (
                              <List.Item
                                key={subtopic}
                                textStyle="xl"
                                cursor="pointer"
                                _hover={{
                                  textDecoration: "underline",
                                }}
                                onClick={() => {
                                  navigateTo("/quiz");
                                  localStorage.setItem(
                                    "category",
                                    `${category.title}: ${subtopic}`
                                  );
                                }}
                              >
                                {subtopic}
                              </List.Item>
                            ))}
                          </List.Root>
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
    </>
  );
};

export default Category;
