import { useEffect } from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Circle,
  AvatarGroup,
  Avatar,
  Image,
  UnorderedList,
  ListItem,
  Link,
  Button,
  useDisclosure,
  Hide,
} from "@chakra-ui/react";
//icons
import { ArrowBackIcon } from "@chakra-ui/icons";
import { BsBoxArrowUp } from "react-icons/bs";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectSideBarDesktopOpen,
  toggleSideBarDesktop,
  toggleSideBarDesktopClose,
  toggleSideBarDesktopOpen,
} from "../../redux/uiSlice";
//tsx
import PaymentMenuMobile from "./PaymentMenuMobile";

// static placeholder information
function ProjectDescription() {
  const dispatch = useDispatch();
  const sideBarDesktopOpen = useSelector(selectSideBarDesktopOpen);

  //hook to trigger mobile drawer menu.
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeMenuHandler = () => {
    onClose();
  };

  //functions/use-effect hooks to open/close desktop or mobile menu depending on screen size.
  const openMenuHandler = () => {
    if (window.innerWidth >= 1024) {
      dispatch(toggleSideBarDesktop());
    } else if (window.innerWidth < 1024) {
      onOpen();
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        dispatch(toggleSideBarDesktopClose());
      } else if (window.innerWidth >= 1024) {
        dispatch(toggleSideBarDesktopOpen());
        onClose();
      }
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      dispatch(toggleSideBarDesktopOpen());
      onClose();
    }
  }, [dispatch, onClose]);

  return (
    <>
      <Flex
        w={sideBarDesktopOpen ? "calc(100% - 423px)" : "100%"}
        justify='center'
      >
        <Flex
          display='flex'
          flexDirection='column'
          px={[4, 4, 10]}
          maxW='840px'
        >
          <Link href='/'>
            <Flex alignItems='center' cursor='pointer'>
              <ArrowBackIcon color='#6C757D' mr='7px' w={4} h={4} />
              <Text as='h4'>Back</Text>
            </Flex>
          </Link>
          <HStack mt={4} justifyContent='space-between'>
            <Text as='h1'>Why I love Bitcoin Racing</Text>
            <Button
              h={8}
              borderRadius='4px'
              bgColor='#20ECC7'
              onClick={openMenuHandler}
            >
              <Text as='h5'>Fund</Text>
            </Button>
          </HStack>
          <Flex mt={4} justifyContent='space-between'>
            <HStack spacing='18px'>
              <HStack spacing={1}>
                <Circle size='30px' bg='tomato' />
                <Text as='h2'>Steliosats</Text>
              </HStack>
              <Text
                fontFamily='Inter'
                fontSize='16px'
                fontWeight='normal'
                lineHeight='140%'
                color='#212529'
                opacity='80%'
              >
                12 July 2022
              </Text>
              <Hide below='md'>
                <Text
                  fontFamily='Inter'
                  fontSize='16px'
                  fontWeight='normal'
                  lineHeight='140%'
                  color='#212529'
                  opacity='80%'
                >
                  FW to Bitcoin Racing
                </Text>
              </Hide>
              <BsBoxArrowUp cursor='pointer' color='#212529' />
            </HStack>
            <Hide below='md'>
              <AvatarGroup size='sm'>
                <Avatar
                  name='Ryan Florence'
                  src='https://bit.ly/ryan-florence'
                />
                <Avatar
                  name='Segun Adebayo'
                  src='https://bit.ly/sage-adebayo'
                />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
              </AvatarGroup>
            </Hide>
          </Flex>
          <Image src='/assets/image 420.png' alt='' mt={4} />
          <Box py={4} px='10px' mt={4} bgColor='#E9FFFB' rounded='4px'>
            <Text as='h3'>
              Bitcoin was designed to fix money itself, but the way to do it
              faster might include impacting the culture in broader terms, and
              heavy metal can play its part on this.
            </Text>
          </Box>
          <Text mt={4} as='p'>
            Bitcoin was designed to fix money itself, but the way to do it
            faster might include impacting the culture in broader terms, and
            heavy metal can play its part on this.
            <br />
            <br /> The Beatles were the highest pinnacle of pop culture and
            started a complete social revolution in the music industry that
            affected the whole world.{" "}
          </Text>
          <Image src='/assets/Frame 10152.png' alt='' mt={4} />
          <Text mt={4} as='h3'>
            About the Album
          </Text>
          <Text mt={2} as='p'>
            The name of the songs will be as follows:
          </Text>
          <UnorderedList pl={2}>
            <ListItem>Horns up for Satoshi</ListItem>
            <ListItem>Orange Pill</ListItem>
            <ListItem>Caesar's Denarius</ListItem>
            <ListItem>Banksters</ListItem>
            <ListItem>Annonymal</ListItem>
            <ListItem>Encrypted Minds</ListItem>
            <ListItem>As Government Dies</ListItem>
            <ListItem>Bitcoin is yours</ListItem>
            <ListItem>The Soul Behind the Mask</ListItem>
            <ListItem>War Strategy</ListItem>
            <ListItem>The Highest Stakes</ListItem>
          </UnorderedList>
          <Text mt={4} as='p'>
            The album will have more or less one hour of musical content of a
            refined and accessible modern heavy metal, suitable to the musical
            taste of millions of people that listen to this kind of music
            worldwide. Heavy Metal fans are addicted to the kind of music and
            lifestyle that they love, and Bitcoin is the ultimate content that
            they need to understand and embrace to fulfil their desire for
            freedom and to express their anger and frustration against
            governments, or "the system", as they call it.
          </Text>
          <Text mt={4} as='p'>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </Text>
        </Flex>
      </Flex>
      <PaymentMenuMobile
        onClose={onClose}
        isOpen={isOpen}
        closeMenuHandler={closeMenuHandler}
      />
    </>
  );
}

export default ProjectDescription;
