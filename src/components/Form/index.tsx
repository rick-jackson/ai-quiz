import {
  Button,
  Field,
  Flex,
  Grid,
  Input,
  InputProps,
  RadioGroup,
} from "@chakra-ui/react";
import Container from "../Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "./Select";
import { promptLanguages } from "../../common/data/promptLanguages";

const inputStyles: InputProps = {
  borderRadius: 15,
  size: "2xl",
  bg: "whiteAlpha.100",
  borderColor: "whiteAlpha.300",
  color: "white",
  _focus: {
    outlineColor: "whiteAlpha.300",
    outlineWidth: 2,
  },
  _placeholder: {
    color: "whiteAlpha.600",
  },
};

const Form: React.FC = () => {
  const [category, setCategory] = useState(
    localStorage.getItem("category") || ""
  );
  const [answerCount, setAnswerCount] = useState(
    localStorage.getItem("answerCount") || "4"
  );
  const [questionCount, setQuestionCount] = useState(
    localStorage.getItem("questionCount") || "10"
  );
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem("difficulty") || "Easy"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const [formErrors, setFormErrors] = useState<{
    category?: string;
    answerCount?: string;
    questionCount?: string;
  }>({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors: typeof formErrors = {};

    if (!category.trim()) {
      errors.category = "Category is required!";
    }

    const answers = +answerCount;
    if (!answerCount || answers < 2 || answers > 6) {
      errors.answerCount = "Answers count must be between 2 and 6";
    }

    const questions = +questionCount;
    if (!questionCount || questions < 5 || questions > 20) {
      errors.questionCount = "Questions count must be between 5 and 20";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    localStorage.setItem("category", category.trim());
    localStorage.setItem("answerCount", answerCount);
    localStorage.setItem("questionCount", questionCount);
    localStorage.setItem("difficulty", difficulty);
    localStorage.setItem("language", language);

    navigate("/quiz");
  };

  return (
    <Container title="Or Enter Your Own Category" id="generation">
      <Flex
        as="form"
        direction="column"
        gap={4}
        maxW={600}
        mx="auto"
        onSubmit={handleSubmit}
      >
        <CustomSelect
          options={promptLanguages}
          value={language}
          onChange={(value: string) => setLanguage(value)}
        />
        <Field.Root invalid>
          <Field.Label>Category</Field.Label>
          <Input
            value={category}
            onChange={(e) => {
              const value = e.target.value;
              setCategory(value);
              setFormErrors((prev) => ({
                ...prev,
                category: value.trim() ? "" : "Category is required!",
              }));
            }}
            placeholder="Enter category"
            {...inputStyles}
          />
          <Field.ErrorText color="red">{formErrors.category}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid>
          <Field.Label>Number of answers</Field.Label>
          <Input
            value={answerCount}
            onChange={(e) => {
              const value = e.target.value;
              setAnswerCount(value);
              setFormErrors((prev) => ({
                ...prev,
                answerCount: value ? "" : "Number of answers is required!",
              }));
            }}
            placeholder="Enter a number"
            type="number"
            min={2}
            max={6}
            {...inputStyles}
          />
          <Field.ErrorText color="red">
            {formErrors.answerCount}
          </Field.ErrorText>
        </Field.Root>
        <Field.Root invalid>
          <Field.Label>Number of questions</Field.Label>
          <Input
            value={questionCount}
            onChange={(e) => {
              const value = e.target.value;
              setQuestionCount(value);
              setFormErrors((prev) => ({
                ...prev,
                questionCount: value ? "" : "Number of questions is required!",
              }));
            }}
            placeholder="Enter questions number"
            type="number"
            min={5}
            max={20}
            {...inputStyles}
          />
          <Field.ErrorText color="red">
            {formErrors.questionCount}
          </Field.ErrorText>
        </Field.Root>
        <RadioGroup.Root
          variant="subtle"
          value={difficulty}
          colorPalette="whiteAlpha"
          onValueChange={(e) => setDifficulty(e.value!)}
        >
          <RadioGroup.Label
            display="block"
            textAlign="left"
            fontWeight={600}
            mb={2}
          >
            Difficulty level
          </RadioGroup.Label>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, auto)" }}
            gap={5}
          >
            {["Easy", "Medium", "Hard", "Very Hard"].map((difficulty) => (
              <RadioGroup.Item key={difficulty} value={difficulty}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{difficulty}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </Grid>
        </RadioGroup.Root>
        <Button size="2xl" borderRadius={15} bg="blue.900" type="submit">
          Generate
        </Button>
      </Flex>
    </Container>
  );
};

export default Form;
