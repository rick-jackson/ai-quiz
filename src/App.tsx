import { useState } from "react";
import { fetchGeminiResponse } from "./gateways/gemini";
import {
  Box,
  Button,
  Container,
  Flex,
  For,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Prose } from "./components/ui/prose";
// import "./app.css";

const html = String.raw;

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<
    {
      id: number;
      title: string;
      question: string;
      answers: { id: number; text: string }[];
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchGeminiResponse(input);
      setResponse(data);
    } catch (error) {
      setError("Помилка при отриманні відповіді від сервера");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner w={200} h={200} m="auto" />;

  return (
    <Container maxW={500}>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDir="column"
        gap={2}
      >
        <Input
          placeholder="Введіть тему квіза"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" loading={loading} ml="auto">
          Надіслати
        </Button>
      </Box>
      {!!error ? (
        error
      ) : (
        <>
          <Stack mt={2}>
            <For each={response}>
              {(item) => (
                <Box key={item.id}>
                  <Text>
                    <Prose
                      dangerouslySetInnerHTML={{
                        __html: html`${item.title}`,
                      }}
                    />
                  </Text>
                  <Text>
                    <Prose
                      dangerouslySetInnerHTML={{
                        __html: html`${item.question}`,
                      }}
                    />
                  </Text>
                  <Box>
                    <Flex direction="column" gap={2}>
                      <For each={item.answers}>
                        {(item) => (
                          <Button
                            key={item.id}
                            flex="auto"
                            borderRadius={16}
                            size="lg"
                          >
                            <Prose
                              dangerouslySetInnerHTML={{
                                __html: html`${item.text}`,
                              }}
                            />
                          </Button>
                        )}
                      </For>
                    </Flex>
                  </Box>
                </Box>
              )}
            </For>
          </Stack>
        </>
      )}
    </Container>
  );
}

export default App;
