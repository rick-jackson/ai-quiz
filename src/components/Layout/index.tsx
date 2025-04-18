import { Box, BoxProps, Container } from "@chakra-ui/react";
import LanguageSelect from "../LanguageSelect";
import Menu from "../Menu";

type LayoutProps = {
  children: React.ReactNode;
} & BoxProps;

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      w="100%"
      mx="auto"
      h="100%"
      position="relative"
      {...props}
    >
      <Box as="header" w="100%" position="absolute" zIndex={2}>
        <Container
          justifyContent="space-between"
          display="flex"
          py={3}
          alignItems="center"
        >
          <Menu />
          <LanguageSelect />
        </Container>
      </Box>
      <Box mx="auto" w="100%" h="100%">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
