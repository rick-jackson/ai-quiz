import { Box, Flex, Progress, Text } from "@chakra-ui/react";
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
    <Box>
      <Flex alignItems="center" h="36px">
        <Flex alignItems="center" gap={2}>
          <LuTimer size={24} />
          <Text fontWeight="bold">{formatTime(timer)}</Text>
        </Flex>
        <Text fontWeight="bold" flex={1} textAlign="center">
          <Text as="span" color="bg.thirty" display="inline">
            {currentQuestionId}
          </Text>{" "}
          / {totalQuestions}
        </Text>
        <Link to="/" color="white" style={{ fontWeight: 500 }}>
          Go Home
        </Link>
      </Flex>
      <Progress.Root
        min={1}
        max={totalQuestions}
        value={currentQuestionId}
        mt={2}
        colorPalette="pink"
      >
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Box>
  );
};

export default Toolbar;
