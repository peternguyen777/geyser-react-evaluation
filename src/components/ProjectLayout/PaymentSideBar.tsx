import { Box, Flex } from "@chakra-ui/react";

//jsx
import PaymentConfirm from "./PaymentConfirm";
import PaymentFund from "./PaymentFund";
import PaymentSuccess from "./PaymentSuccess";

//redux
import { useSelector } from "react-redux";
import { selectIsFunded, selectIsPaid } from "../../redux/paymentSlice";

function PaymentSideBar() {
  const isFunded = useSelector(selectIsFunded);
  const isPaid = useSelector(selectIsPaid);

  return (
    <Box
      boxShadow='2xl'
      width='423px'
      height='100vh'
      flexShrink='0'
      bgColor='white'
      position='fixed'
      right='0'
      borderTopLeftRadius='32px'
      pt={6}
      px='30.5px'
    >
      <Flex p='6px' flexDirection='column'>
        {isFunded ? (
          isPaid ? (
            <PaymentSuccess closeMenuHandler={() => {}} />
          ) : (
            <PaymentConfirm />
          )
        ) : (
          <PaymentFund />
        )}
      </Flex>
    </Box>
  );
}

export default PaymentSideBar;
