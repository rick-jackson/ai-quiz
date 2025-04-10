import { EmptyState, VStack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
            src={`/robot/${status === 404 ? "404" : "broken"}.png`}
            w="100%"
            objectFit="contain"
            maxH={550}
            h="auto"
          />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title textStyle="5xl"> {status}</EmptyState.Title>
          <EmptyState.Description color="white" textStyle="4xl">
            {error}
          </EmptyState.Description>
          <Link to="/" style={{ width: "100%", marginTop: "12px" }}>
            <Button
              size="2xl"
              width="100%"
              maxW={400}
              variant="surface"
              color="bg.primary"
            >
              Go Home
            </Button>
          </Link>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default Error;
