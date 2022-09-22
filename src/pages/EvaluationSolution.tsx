import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import ProjectDescription from "../components/ProjectLayout/ProjectDescription";
import PaymentSideBar from "../components/ProjectLayout/PaymentSideBar";

export const EvaluationSolution = () => {
  return (
    <Box py={24}>
      <Header />
      <PaymentSideBar />
      <ProjectDescription />
    </Box>
  );
};
