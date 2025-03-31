import { Box, Flex, IconButton, Progress, Text } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";

type ToolbarProps = {
  currentQuestionId: number;
  onPrevQuestion: () => void;
  isFirstQuestion: boolean;
};

const Toolbar: React.FC<ToolbarProps> = ({
  currentQuestionId,
  onPrevQuestion,
  isFirstQuestion,
}) => {
  return (
    <Box>
      <Flex alignItems="center" h="36px">
        {!isFirstQuestion && (
          <IconButton
            variant="ghost"
            size="sm"
            color="white"
            _hover={{ bg: "bg.secondary" }}
            onClick={onPrevQuestion}
          >
            <LuArrowLeft />
          </IconButton>
        )}
        <Text fontWeight="bold" flex={1} textAlign="center">
          <Text as="span" color="bg.thirty" display="inline">
            {currentQuestionId}
          </Text>{" "}
          / 10
        </Text>
        {!isFirstQuestion && <Box w="36px" />}
      </Flex>
      <Progress.Root
        min={1}
        max={10}
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
