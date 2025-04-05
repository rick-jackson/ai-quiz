import { EmptyState, VStack, Image } from "@chakra-ui/react";

type ErrorProps = {
  status: number;
  error: string;
};

const Error: React.FC<ErrorProps> = ({ status = 500, error }) => {
  return (
    <EmptyState.Root m="auto" size="lg">
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Image
            src="/robot/robot6.png"
            w="100%"
            objectFit="contain"
            maxH={550}
            h="auto"
          />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title fontSize="42px">ERROR: {status}</EmptyState.Title>
          <EmptyState.Description>{error}</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default Error;
