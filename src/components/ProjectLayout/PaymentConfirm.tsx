import { useState } from "react";
import {
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Spinner,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectInvoiceQr,
  selectReward,
  selectSatValue,
  selectUsdValue,
} from "../../redux/fundingSlice";
import { selectUser } from "../../redux/userSlice";
import { setIsFunded, setIsPaid } from "../../redux/paymentSlice";
//icons
import { SatoshiV2Icon } from "@bitcoin-design/bitcoin-icons-react/outline";
import BitcoinCircleIcon from "../Icons/bitcoin-circle";
import CopyIcon from "../Icons/copy";
import TelegramIcon from "../Icons/telegram";
import { ArrowBackIcon } from "@chakra-ui/icons";
//utils
import { truncateString } from "../../lib/truncateString";

//STEP 2. CONFIRM TRANSACTION, DISPLAY QR CODE.
function PaymentConfirm() {
  const dispatch = useDispatch();
  //get the logged-in user's information (name, email, image)
  const user = useSelector(selectUser);
  const satValue = useSelector(selectSatValue);
  const usdValue = useSelector(selectUsdValue);
  const invoiceQr = useSelector(selectInvoiceQr);
  const reward = useSelector(selectReward);

  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();
  const copyQrHandler = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 500);

    //mock payment success, in reality isPaid will be triggered by back-end
    setTimeout(() => {
      dispatch(setIsPaid());
    }, 5000);

    //input LN QR to copy.
    navigator.clipboard.writeText(invoiceQr);

    toast({
      title: "LN Invoice copied",
      description: `${truncateString(invoiceQr, 24)}`,
      variant: "solid",
      status: "success",
      duration: 2000,
      position: "bottom-right",
      isClosable: true,
    });
  };

  return (
    <>
      <Flex justifyContent='start' width='100%' alignItems='center'>
        <ArrowBackIcon
          onClick={() => dispatch(setIsFunded())}
          w={5}
          h={5}
          cursor='pointer'
        />
        <Text as='h2' ml={2}>
          Confirm & fund
        </Text>

        {/* <CrossIcon onClick={() => dispatch(setIsFunded())} /> */}
      </Flex>
      <Flex
        mt={3}
        flexDirection='column'
        py='18px'
        px='27px'
        alignItems='center'
      >
        <HStack spacing='14px' alignItems='center'>
          <BitcoinCircleIcon />
          <Text as='h6' align='left'>
            Scan this QR code to fund with Bitcoin on either Lightning or
            on-chain.
          </Text>
        </HStack>

        {isCopied ? (
          <Image
            src='/assets/qrcode-copied.png'
            alt=''
            height='175px'
            width='175px'
            mt='18px'
            cursor='pointer'
          />
        ) : (
          <Image
            src='/assets/qrcode.png'
            alt=''
            height='175px'
            width='175px'
            mt='18px'
            cursor='pointer'
            onClick={copyQrHandler}
          />
        )}

        {/* Text & Spinner */}
        {isCopied ? (
          <HStack mt='18px'>
            <Text as='h6' lineHeight='24px' color='#10CAA8'>
              Copied!
            </Text>
          </HStack>
        ) : (
          <HStack spacing='22px' mt='18px'>
            <Spinner
              thickness='6px'
              speed='1s'
              emptyColor='gray.200'
              color='#20ECC7'
              size='md'
            />

            <Text as='h6' color='#212529'>
              Waiting for payment...
            </Text>
          </HStack>
        )}
      </Flex>
      <Flex
        bgColor='#F8F9FA'
        borderRadius='4px'
        w='100%'
        flexDirection='column'
        p={4}
      >
        <Flex
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          mb='6px'
        >
          <Text as='h5'>Total:</Text>
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
              {satValue.toLocaleString("en-US")}($
              {usdValue.toFixed(2)})
            </Text>
          </HStack>
        </Flex>
        <hr />
        <VStack spacing='6px' my='6px' alignItems='start'>
          {reward.map((item: any, i: number) => (
            <HStack spacing='7px' key={i}>
              <Text fontSize='14px'>{item.icon}</Text>
              <Text as='h6'>{item.title}</Text>
            </HStack>
          ))}
        </VStack>
        <hr />
        <Text as='h6' align='left' mt='6px'>
          Email: {user.email}
        </Text>
        <HStack alignItems='center' mt='6px'>
          <Image src={user.image} alt='' h='17px' w='17px' />
          <Text as='h5' fontFamily='Courier'>
            {user.name}
          </Text>
        </HStack>
      </Flex>
      <Button
        mt={3}
        w='100%'
        h={8}
        borderRadius='4px'
        bgColor='#20ECC7'
        onClick={copyQrHandler}
      >
        {isCopied ? (
          <Text
            as='h5'
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {truncateString(invoiceQr, 24)}
          </Text>
        ) : (
          <HStack spacing={1}>
            <CopyIcon />
            <Text as='h5'>Copy Address</Text>
          </HStack>
        )}
      </Button>
      <HStack spacing={4} alignItems='center' mt={3} mr='6px'>
        <Text as='h6' align='left'>
          If you're experiencing any issues with this payment please reach out
          to us on Telegram.
        </Text>
        <Link href='https://t.me/+EZ5otIPhVcxhMmFk' isExternal>
          <TelegramIcon />
        </Link>
      </HStack>
      <Text as='h6' color='#ADB5BD' align='left' mt={3}>
        Your pledge will support an ambitious project that may yet to be
        developed. There's a risk that, despite a creator's best efforts, your
        reward will not be fulfilled, and we urge you to consider this risk
        prior to pledging. Geyser is not responsible for project claims or
        reward fulfillment.
      </Text>
    </>
  );
}

export default PaymentConfirm;
