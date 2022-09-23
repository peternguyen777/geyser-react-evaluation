import { Box, Image, HStack, Button, Text, Link, Hide } from "@chakra-ui/react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

function Header() {
  const user = useSelector(selectUser);

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
      <Link href='/'>
        <Image src='/assets/logo-black.svg' width='28px' height='28px' />
      </Link>
      <Text as='h2'>Annonymal</Text>

      <HStack spacing={3}>
        <Hide below='md'>
          <Button height={9} boxShadow='lg'>
            <Image
              src={user.image}
              alt=''
              w={5}
              h={5}
              rounded='full'
              mr='10px'
            />
            <Text fontFamily='Inter' fontSize='14px' fontWeight='medium'>
              {user.name}
            </Text>
          </Button>
        </Hide>
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
