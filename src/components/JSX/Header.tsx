import { Box, Image, HStack, Button, Text, Circle } from "@chakra-ui/react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

function Header() {
  return (
    <Box
      display='flex'
      alignItems='center'
      height='60px'
      px='13px'
      justifyContent='space-between'
      position='fixed'
      top='0'
      width='100%'
      bgColor='#FCFCFC'
      zIndex='999'
    >
      <Image src='/assets/logo-black.svg' width='28px' height='28px' />
      <Text fontFamily='Inter' fontSize='18px' fontWeight='semibold'>
        Annonymal
      </Text>

      <HStack spacing={3}>
        <Button height={9} boxShadow='lg'>
          <Circle size='20px' bg='#DEE2E6' color='white' mr='10px' />
          <Text fontFamily='Inter' fontSize='14px' fontWeight='medium'>
            Username
          </Text>
        </Button>
        <HiOutlineDotsCircleHorizontal
          style={{
            height: "32px",
            width: "32px",
            stroke: "#DEE2E6",
            cursor: "pointer",
          }}
        />
      </HStack>
    </Box>
  );
}

export default Header;
