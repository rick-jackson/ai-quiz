import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Form from "../components/Form";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <Box
        bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)"
        flex={1}
      >
        <HowItWorks />
        <Categories />
        <Form />
      </Box>
    </Layout>
  );
};

export default HomePage;
