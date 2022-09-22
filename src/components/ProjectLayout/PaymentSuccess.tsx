import { Text, Flex, Button, HStack, Image } from "@chakra-ui/react";
import Animation from "../Icons/animation";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { setIsFunded, setIsPaid } from "../../redux/paymentSlice";
import { selectComment, selectSatValue } from "../../redux/fundingSlice";
import { SatoshiV2Icon } from "@bitcoin-design/bitcoin-icons-react/outline";

function PaymentSuccess() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const comment = useSelector(selectComment);
  const satValue = useSelector(selectSatValue);

  const resetClickHandler = () => {
    dispatch(setIsFunded());
    dispatch(setIsPaid());
  };

  return (
    <>
      <Text as='h2'>Thanks {user.name}!</Text>
      <Animation />
      <Text as='h5'>
        Enjoy your rewards. Your contribution will go a long way help Bitcoiners
        in need!
      </Text>
      <Flex p={4} mt={6} rounded='4px' flexDirection='column' bgColor='#F8F9FA'>
        <Flex flexDirection='row' justifyContent='space-between'>
          <HStack alignItems='center' mt='6px'>
            <Image src={user.image} alt='' h='17px' w='17px' />
            <Text as='h5' fontFamily='Courier'>
              {user.name}
            </Text>
          </HStack>
          <HStack spacing='2px'>
            <SatoshiV2Icon
              style={{
                height: "20px",
                width: "20px",
                transform: "rotate(15deg)",
                color: "#000",
              }}
            />
            <Text as='h5' fontFamily='Courier'>
              {satValue.toLocaleString("en-US")}
            </Text>
          </HStack>
        </Flex>
        {comment && (
          <Text as='h5' align='left' mt='6px'>
            {comment}
          </Text>
        )}
      </Flex>
      <Button
        mt={4}
        h={8}
        w='100%'
        borderRadius='4px'
        bgColor='#20ECC7'
        onClick={resetClickHandler}
      >
        <Text as='h5'>Ok!</Text>
      </Button>
    </>
  );
}

export default PaymentSuccess;
