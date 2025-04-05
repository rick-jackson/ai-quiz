import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import Container from "../Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
  const [category, setCategory] = useState("");
  const [answersCount, setAnswersCount] = useState(2);
  const [level, setLevel] = useState("easy");
  const [errors, setErrors] = useState<{
    category?: string;
    answersCount?: string;
  }>({});

  const navigateTo = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!category.trim()) {
      newErrors.category = "Category is required!";
    }
    if (!answersCount || answersCount < 2 || answersCount > 6) {
      newErrors.answersCount = "Answers count must be between 2 and 6";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    localStorage.setItem("category", category);
    localStorage.setItem("answersCount", String(answersCount));
    localStorage.setItem("level", level);
    navigateTo("/quiz");
  };

  return (
    <Container title="Or Enter Your Own Category">
      <Flex
        as="form"
        flexDir="column"
        gap={4}
        maxW={600}
        m="auto"
        onSubmit={onSubmit}
      >
        <Box>
          <Input
            value={category}
            onChange={(e) => {
              setErrors((prev) => ({
                ...prev,
                category: !e.target.value ? "Category is required!" : "",
              }));
              setCategory(e.target.value);
            }}
            borderRadius={15}
            size="2xl"
            placeholder="Enter category"
            bg="whiteAlpha.100"
            borderColor="whiteAlpha.300"
            color="white"
            _focus={{
              outlineColor: "whiteAlpha.300",
              outlineWidth: 2,
            }}
            _placeholder={{
              color: "whiteAlpha.600",
            }}
          />
          {errors.category && (
            <Text color="red" fontSize="sm" ml={2} textAlign="left">
              {errors.category}
            </Text>
          )}
        </Box>
        <Box>
          <Input
            value={answersCount}
            onChange={(e) => setAnswersCount(+e.target.value)}
            borderRadius={15}
            size="2xl"
            placeholder="Enter a number"
            bg="whiteAlpha.100"
            borderColor="whiteAlpha.300"
            color="white"
            type="number"
            min={2}
            max={6}
            _focus={{
              outlineColor: "whiteAlpha.300",
              outlineWidth: 2,
            }}
            _placeholder={{
              color: "whiteAlpha.600",
            }}
          />
          {errors.answersCount && (
            <Text color="red" fontSize="sm" ml={2} textAlign="left">
              {errors.answersCount}
            </Text>
          )}
        </Box>

        <RadioGroup.Root
          variant="subtle"
          defaultValue="react"
          colorPalette="whiteAlpha"
          value={level}
          onValueChange={(e) => setLevel(e.value!)}
        >
          <HStack gap={20}>
            <RadioGroup.Item value="easy">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Easy</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="medium">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Medium</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="hard">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Hard</RadioGroup.ItemText>
            </RadioGroup.Item>
          </HStack>
        </RadioGroup.Root>

        <Button size="2xl" borderRadius={15} bg="blue.900" type="submit">
          Generate
        </Button>
      </Flex>
    </Container>
  );
};

export default Form;
