import { Box } from "@chakra-ui/react";
import Error from "../Error";

const PageNotFound: React.FC = () => {
  return (
    <Box display="flex" h="100%" w="100%" bg="#584db9">
      <Error status={404} error="Ooops... page not found" />
    </Box>
  );
};

export default PageNotFound;
