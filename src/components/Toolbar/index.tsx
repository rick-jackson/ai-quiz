import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuTimer } from "react-icons/lu";
import { Link } from "react-router-dom";

type ToolbarProps = {
  currentQuestionId: number;
  totalQuestions: number;
};

const Toolbar: React.FC<ToolbarProps> = ({
  currentQuestionId,
  totalQuestions,
}) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Box maxW={800} marginX="auto" w="100%">
      <Flex alignItems="center" h="36px" gap={5} justify="space-between">
        <Flex alignItems="center" gap={2}>
          <LuTimer size={24} />
          <Text fontWeight="bold">{formatTime(timer)}</Text>
        </Flex>
        <Box w="100%">
          <Box
            h={1}
            bg="#8b7cd8"
            w={`${(currentQuestionId / totalQuestions) * 100}%`}
            borderRadius={20}
            mr="auto"
            transition="0.3s"
          />
        </Box>
        <Link
          to="/"
          color="white"
          style={{ fontWeight: 500, whiteSpace: "nowrap" }}
        >
          Go Home
        </Link>
      </Flex>
    </Box>
  );
};

export default Toolbar;
