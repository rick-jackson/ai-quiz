import { Container, Image, Box, Button, Flex, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useMemo } from "react";
import { FaRepeat } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type ResultProps = {
  allQuestionsCount: number;
  correctUserAnswers: number;
  onResetQuiz: () => void;
  getQuizData: () => Promise<void>;
};

const getChartOptions = (percent: number) => ({
  series: [percent],
  options: {
    chart: {
      height: "250px",
      minHeight: 0,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          dropShadow: {
            enabled: true,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0,
          dropShadow: {
            enabled: true,
          },
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            formatter: function (val: any) {
              return `${parseInt(val)}%`;
            },
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#584db9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
  },
});

const getResultMessage = (correct: number, total: number, percent: number) => {
  const formattedPercent = percent.toFixed(0);
  if (percent >= 75) {
    return (
      <>
        You answered all <strong>{correct}</strong> out of{" "}
        <strong>{total}</strong> questions correctly, which makes{" "}
        <strong>{formattedPercent}%</strong>. Keep it up!
      </>
    );
  } else if (percent >= 50) {
    return (
      <>
        You got <strong>{correct}</strong> out of <strong>{total}</strong>{" "}
        questions right — that's <strong>{formattedPercent}%</strong>. Just a
        little more and you'll ace it next time!
      </>
    );
  } else {
    return (
      <>
        You answered <strong>{correct}</strong> out of <strong>{total}</strong>{" "}
        questions correctly — that’s <strong>{formattedPercent}%</strong>.
        Review the material and give it another shot!
      </>
    );
  }
};

const Result: React.FC<ResultProps> = ({
  allQuestionsCount,
  correctUserAnswers,
  onResetQuiz,
  getQuizData,
}) => {
  const resultPercent = (correctUserAnswers / allQuestionsCount) * 100;
  const chartData = useMemo(
    () => getChartOptions(resultPercent),
    [resultPercent]
  );

  return (
    <Box
      bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)"
      w="100%"
      h="100%"
    >
      <Container display="flex" pt={60} alignItems="flex-end" h="100%">
        <Box position="relative" w="100%" maxW={800} m="auto" h="100%" pb={5}>
          <Image
            src={`/robot/result-cool.png`}
            position="absolute"
            top="-210px"
            left="calc(50% - 150px)"
            maxW={300}
          />
          <Box
            color="#000"
            p={5}
            borderRadius={5}
            bg="white"
            display="flex"
            flexDir="column"
          >
            <Chart
              //@ts-ignore
              options={chartData.options}
              series={chartData.series}
              type="radialBar"
              height={300}
            />
            <Box maxW={400} m="auto" textAlign="center" mb={5}>
              <Text fontWeight={400} textStyle="xl">
                {getResultMessage(
                  correctUserAnswers,
                  allQuestionsCount,
                  resultPercent
                )}
              </Text>
            </Box>
            <Flex mt="auto" direction="column" gap={3} textAlign="left">
              <Button bg="blue.700" size="lg" onClick={onResetQuiz}>
                <FaRepeat />
                Пройти ще раз
              </Button>
              <Button bg="blue.700" size="lg" onClick={getQuizData}>
                <TbReload />
                Оновити запитання
              </Button>
              <Link to="/#categories" style={{ width: "100%" }}>
                <Button bg="blue.700" size="lg" w="100%">
                  <FaExchangeAlt />
                  Змінити тему
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Result;
