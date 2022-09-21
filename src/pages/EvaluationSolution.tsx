import Header from "../components/JSX/Header";
import { Box } from "@chakra-ui/react";
import ProjectDescription from "../components/JSX/ProjectDescription";
import PaymentSideBar from "../components/JSX/PaymentSideBar";

export const EvaluationSolution = () => {
  return (
    <Box bgColor='#FCFCFC' py={24}>
      <Header />
      <PaymentSideBar />
      <ProjectDescription />
    </Box>
  );
};
