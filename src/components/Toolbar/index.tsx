import { Box, Progress, Text } from "@chakra-ui/react";

type ToolbarProps = {
  currentQuizId: number;
};

const Toolbar: React.FC<ToolbarProps> = ({ currentQuizId }) => {
  return (
    <Box textAlign="center">
      <Text fontWeight="bold">
        <Text color="bg.thirty" display="inline">
          {currentQuizId}
        </Text>{" "}
        / 10
      </Text>
      <Progress.Root
        min={1}
        max={10}
        value={currentQuizId}
        mt={3}
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
