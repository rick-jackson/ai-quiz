import { Button, CloseButton, Drawer, Flex, Portal } from "@chakra-ui/react";
import { GrAppsRounded } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";

const Menu: React.FC = () => {
  return (
    <>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button
            variant="ghost"
            size="2xl"
            p={0}
            minW={0}
            height="28px"
            width="28px"
          >
            <GrAppsRounded style={{ stroke: "#7159e4", fill: "white" }} />
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="bg.primary">
              <Drawer.Header></Drawer.Header>
              <Drawer.Body>
                <Flex direction="column" fontSize="4xl" gap={10}>
                  {/*@ts-ignore*/}
                  <Drawer.Trigger as={HashLink} to="/">
                    Home
                  </Drawer.Trigger>
                  {/*@ts-ignore*/}

                  <Drawer.Trigger as={HashLink} to="/#payments">
                    Payments
                  </Drawer.Trigger>
                  {/*@ts-ignore*/}

                  <Drawer.Trigger as={HashLink} to="/#categories">
                    Categories
                  </Drawer.Trigger>
                  {/*@ts-ignore*/}

                  <Drawer.Trigger as={HashLink} to="/#generation">
                    Generation
                  </Drawer.Trigger>
                </Flex>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
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
