import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Form from "../components/Form";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Banner />
      <Box bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)">
        <HowItWorks />
        <Categories />
        <Form />
      </Box>
    </Box>
  );
};

export default HomePage;
