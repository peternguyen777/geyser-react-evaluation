import { useEffect } from "react";
import {
  Text,
  Textarea,
  Button,
  HStack,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  setSatValue,
  setUsdValue,
  setBtcPrice,
  setComment,
  selectSatValue,
  selectBtcPrice,
  selectUsdValue,
  selectComment,
} from "../../redux/fundingSlice";
import { setIsFunded } from "../../redux/paymentSlice";
//icons
import { SatoshiV2Icon } from "@bitcoin-design/bitcoin-icons-react/outline";

//STEP 1. FUND PROJECT. ENTER SATS VALUE AND COMMENT.
function PaymentFund() {
  const dispatch = useDispatch();
  const satValue = useSelector(selectSatValue);
  const usdValue = useSelector(selectUsdValue) || 0;
  const btcPrice = useSelector(selectBtcPrice);
  const comment = useSelector(selectComment);

  const handleSatsChange = (e: any) => {
    const sats = parseInt(e.target.value);
    dispatch(setSatValue(sats));
  };

  const handleCommentChange = (e: any) => {
    dispatch(setComment(e.target.value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setIsFunded());
  };

  //error state for sats input
  const isError = (satValue || 0) < 50 || (satValue || 0) > 1000000000;

  //fetch BTC price data and store in redux
  useEffect(() => {
    const fetchBtcPrice = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
      );
      const data = await response.json();

      const btcPrice = data.market_data.current_price.usd;
      dispatch(setBtcPrice(btcPrice));
    };

    fetchBtcPrice();
  });

  //update usd price every time sat value changes.
  useEffect(() => {
    const usdValue = (satValue / 100000000) * btcPrice;
    dispatch(setUsdValue(usdValue));
  }, [dispatch, satValue, btcPrice]);

  return (
    <>
      <Text as='h2'>Fund this Project</Text>
      <form onSubmit={handleSubmit}>
        <FormControl w='100%' mt={4} isInvalid={isError}>
          <FormLabel as='h5'>Pledge:</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              children={
                <SatoshiV2Icon
                  style={{
                    height: "20px",
                    width: "20px",
                    transform: "rotate(15deg)",
                    color: "#000",
                  }}
                />
              }
            />
            <Input
              placeholder='Enter amount'
              isRequired
              type='number'
              focusBorderColor='#20ECC7'
              value={satValue}
              onChange={handleSatsChange}
            />
            <InputRightElement />
          </InputGroup>
          {!isError ? (
            <FormHelperText>
              <Text as='h6'>Enter amount in Satoshis</Text>
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              <Text as='h6' color='red.500'>
                Donate between 50 to 1,000,000,000 sats
              </Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormLabel as='h5' mt={4}>
          Comment:
        </FormLabel>

        <Textarea
          value={comment}
          rounded='4px'
          onChange={handleCommentChange}
          focusBorderColor='#20ECC7'
          placeholder='Optional...'
          rows={6}
        />
        <Flex
          p={4}
          mt={6}
          rounded='4px'
          flexDirection='column'
          bgColor='#F8F9FA'
        >
          <HStack justifyContent='right' spacing={0}>
            <SatoshiV2Icon
              style={{
                height: "40px",
                width: "40px",
                transform: "rotate(15deg)",
                color: "#000",
              }}
            />
            <Text as='h1' fontFamily='Courier' opacity='100%'>
              {(satValue || 0).toLocaleString("en-US")}
            </Text>
          </HStack>
          <Text as='h5' align='right'>
            TOTAL
          </Text>
          <HStack my={4} justifyContent='space-between'>
            <Text as='h5'>${usdValue.toFixed(2)} USD </Text>
            <Text as='h5'>{(satValue || 0) / 100000000} BTC </Text>
          </HStack>
          <hr />
          <Text as='h6' mt={4}>
            Current Price ${btcPrice.toFixed(2)} USD/BTC
          </Text>
        </Flex>
        <Button
          isDisabled={isError}
          type='submit'
          mt={4}
          h={8}
          w='100%'
          borderRadius='4px'
          bgColor='#20ECC7'
        >
          <Text as='h5'>Fund Project</Text>
        </Button>
      </form>
    </>
  );
}

export default PaymentFund;
