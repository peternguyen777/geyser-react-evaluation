import { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";

import { SatoshiV2Icon } from "@bitcoin-design/bitcoin-icons-react/outline";
import BitcoinIcon from "../Icons/bitcoin";
import CrossIcon from "../Icons/cross";
import CopyIcon from "../Icons/copy";
import TelegramIcon from "../Icons/telegram";

function PaymentSideBar() {
  const [isCopied, setIsCopied] = useState(false);

  const copyQrHandler = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

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
      <Flex p='6px' flexDirection='column' alignItems='center'>
        <Flex justifyContent='space-between' width='100%' alignItems='center'>
          <Text
            fontWeight='semibold'
            fontFamily='Inter'
            fontSize='18px'
            lineHeight='140%'
            color='#212529'
          >
            Confirm & fund
          </Text>
          <CrossIcon />
        </Flex>
        <Flex
          mt={3}
          flexDirection='column'
          py='18px'
          px='27px'
          alignItems='center'
        >
          <HStack spacing='14px' alignItems='center'>
            <BitcoinIcon />
            <Text
              fontWeight='normal'
              fontFamily='Inter'
              fontSize='10px'
              lineHeight='14px'
              letterSpacing='0.4px'
              color='#212529'
            >
              Scan this QR code to fund with Bitcoin on either Lightning or
              on-chain.
            </Text>
          </HStack>

          {/* Dynamically generated QR codes from back-end */}
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
              <Text
                fontWeight='normal'
                fontFamily='Inter'
                fontSize='10px'
                lineHeight='24px'
                letterSpacing='0.4px'
                color='#10CAA8'
              >
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

              <Text
                fontWeight='normal'
                fontFamily='Inter'
                fontSize='10px'
                lineHeight='14px'
                letterSpacing='0.4px'
                color='#212529'
              >
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
            <Text
              fontWeight='medium'
              fontFamily='Inter'
              fontSize='14px'
              lineHeight='140%'
              letterSpacing='0.4px'
              color='#212529'
            >
              Total
            </Text>
            <HStack spacing='2px'>
              <SatoshiV2Icon
                style={{
                  height: "20px",
                  width: "20px",
                  transform: "rotate(15deg)",
                  color: "#000",
                }}
              />
              <Text fontFamily='Courier' color='#212529'>
                121,000 ($60)
              </Text>
            </HStack>
          </Flex>
          <hr />
          <VStack spacing='6px' my='6px' alignItems='start'>
            <HStack spacing='7px'>
              <Text fontSize='14px'>🎁</Text>
              <Text
                fontWeight='medium'
                fontFamily='Inter'
                fontSize='10px'
                lineHeight='140%'
                letterSpacing='0.4px'
                color='#212529'
              >
                Reward: The Bitcoin Game
              </Text>
            </HStack>
            <HStack spacing='7px'>
              <Text fontSize='14px'>🏆</Text>
              <Text
                fontWeight='medium'
                fontFamily='Inter'
                fontSize='10px'
                lineHeight='140%'
                letterSpacing='0.4px'
                color='#212529'
              >
                Reward: The Bitcoin Game
              </Text>
            </HStack>
          </VStack>
          <hr />
          <Text
            fontWeight='medium'
            fontFamily='Inter'
            fontSize='10px'
            lineHeight='140%'
            letterSpacing='0.4px'
            color='#212529'
            mt='6px'
          >
            Email: mick@gmail.com
          </Text>
          <HStack alignItems='center' mt='6px'>
            <Image src='/assets/metamick.png' alt='' h='17px' w='17px' />
            <Text
              fontWeight='medium'
              fontFamily='Courier'
              fontSize='14px'
              lineHeight='140%'
              letterSpacing='0.4px'
              color='#212529'
            >
              Metamick14
            </Text>
          </HStack>
        </Flex>
        <Button
          leftIcon={<CopyIcon />}
          mt={3}
          w='100%'
          h={8}
          borderRadius='4px'
          bgColor='#20ECC7'
          onClick={copyQrHandler}
        >
          <Text
            fontWeight='medium'
            fontFamily='Inter'
            fontSize='14px'
            lineHeight='140%'
            color='#212529'
          >
            {isCopied ? `Copied!` : `Copy Address`}
          </Text>
        </Button>
        <HStack spacing={4} alignItems='center' mt={3} mr='6px'>
          <Text
            fontWeight='normal'
            fontFamily='Inter'
            fontSize='10px'
            lineHeight='14px'
            letterSpacing='0.4px'
            color='#212529'
          >
            If you're experiencing any issues with this payment please reach out
            to us on Telegram.
          </Text>
          <TelegramIcon />
        </HStack>
        <Text
          fontWeight='normal'
          fontFamily='Inter'
          fontSize='10px'
          lineHeight='14px'
          letterSpacing='0.4px'
          color='#ADB5BD'
          mt={3}
        >
          Your pledge will support an ambitious project that may yet to be
          developed. There’s a risk that, despite a creator’s best efforts, your
          reward will not be fulfilled, and we urge you to consider this risk
          prior to pledging. Geyser is not responsible for project claims or
          reward fulfillment.
        </Text>
      </Flex>
    </Box>
  );
}

export default PaymentSideBar;
