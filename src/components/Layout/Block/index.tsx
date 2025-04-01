import { Container, ContainerProps, Text } from "@chakra-ui/react";

type LayoutBlockProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
} & ContainerProps;

const LayoutBlock: React.FC<LayoutBlockProps> = ({
  title,
  subtitle,
  children,
  ...props
}) => {
  return (
    <Container
      py={5}
      px={{ base: 5, md: 10, lg: 20 }}
      maxW="container.xl"
      color="gray.900"
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      <Text
        fontWeight={500}
        textStyle={{ base: "4xl", sm: "5xl" }}
        color="gray.900"
      >
        {title}
      </Text>
      {!!subtitle && (
        <Text textStyle="xl" fontWeight={500}>
          {subtitle}
        </Text>
      )}
      {children}
    </Container>
  );
};

export default LayoutBlock;
