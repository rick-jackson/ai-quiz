import { Spinner } from "@chakra-ui/react";

const Loader: React.FC = () => {
  return (
    <Spinner w={200} h={200} m="auto" color="bg.thirty" borderWidth={10} />
  );
};

export default Loader;
