import { Button, CloseButton, Drawer, List, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Menu: React.FC = () => {
  const [isOpen, setOPen] = useState(false);

  const onClose = () => {
    setOPen(false);
  };

  const onOpen = () => {
    setOPen(true);
  };

  return (
    <>
      <Drawer.Root open={isOpen}>
        <Button
          variant="ghost"
          size="2xl"
          p={0}
          minW={0}
          height="28px"
          width="28px"
          bg="white"
          onClick={onOpen}
        >
          <FiMenu color="#584db9" />
        </Button>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="bg.primary">
              <Drawer.Header></Drawer.Header>
              <Drawer.Body>
                <List.Root
                  fontSize="2xl"
                  gap={4}
                  variant="plain"
                  onClick={onClose}
                >
                  <HashLink to="/">
                    <List.Item>Home</List.Item>
                  </HashLink>
                  <List.Item>Payments</List.Item>
                  <HashLink to="/#categories">
                    <List.Item>Categories</List.Item>
                  </HashLink>
                  <HashLink to="/#generation">
                    <List.Item>Generation</List.Item>
                  </HashLink>
                </List.Root>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild onClick={onClose}>
                <CloseButton color="white" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default Menu;
