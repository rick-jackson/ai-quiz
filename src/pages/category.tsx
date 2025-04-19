import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../common/configs/categories";
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
import { splitArray } from "../common/configs/utils/splitArray";
import { useEffect } from "react";
import Layout from "../components/Layout";

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
    <Layout>
      <Box
        {...(!isMobile && { bgImage: `url(${category.img})` })}
        h="100%"
        bgRepeat="no-repeat"
        bgSize={{ base: "contain", md: "cover" }}
        backgroundPositionY="top"
        backgroundPositionX="center"
        backgroundAttachment="fixed"
        px={{ base: 0, md: 4 }}
      >
        {isMobile && (
          <Box
            position="sticky"
            top={0}
            bgImage={`url(${category.img})`}
            h="35vh"
            bgSize="cover"
          >
            {/* <Image src={category.img} objectFit="cover" /> */}
          </Box>
        )}
        <Container
          pt={{ base: 0, md: 8 }}
          pb={{ base: 4, md: 8 }}
          mt={{ base: 0, md: 20 }}
          mb={{ base: 0, md: 4 }}
          boxShadow={{ mdDown: "0px -3px 20px 24px rgba(88, 77, 185, 1)" }}
          bg={{ base: "#584db9", md: "#584db9ba" }}
          borderRadius={{ base: 0, md: 20 }}
        >
          <Text
            textStyle="5xl"
            lineHeight={1}
            fontWeight={500}
            position={{ base: "sticky", md: "static" }}
            top={0}
            bg={{ base: "#584db9", md: "none" }}
            zIndex={1}
            pb={{ base: 4, md: 8 }}
          >
            {category.title}
          </Text>
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
                          textStyle="xl"
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
    </Layout>
  );
};

export default Category;
