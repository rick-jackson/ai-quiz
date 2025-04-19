import { Flex, Text } from "@chakra-ui/react";
import { routes } from "../../common/configs/routes";
import React from "react";
import { HashLink } from "react-router-hash-link";

const Navigation: React.FC = () => {
  return (
    <Flex fontSize="2xl" gap={10}>
      {routes.map((route) => (
        <HashLink key={route.link} to={route.link}>
          <Text
            color="white"
            textShadow="0 0 3px #584db9"
            fontWeight={700}
            transition="0.3s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            {route.label}
          </Text>
        </HashLink>
      ))}
    </Flex>
  );
};

export default Navigation;
