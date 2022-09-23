import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import ProjectDescription from "../components/ProjectLayout/ProjectDescription";
import PaymentSideBar from "../components/ProjectLayout/PaymentSideBar";

import { useSelector } from "react-redux";
import { selectSideBarDesktopOpen } from "../redux/uiSlice";

export const EvaluationSolution = () => {
  const sideBarDesktopOpen = useSelector(selectSideBarDesktopOpen);

  return (
    <Box py={24}>
      <Header />
      {sideBarDesktopOpen && <PaymentSideBar />}

      <ProjectDescription />
    </Box>
  );
};
