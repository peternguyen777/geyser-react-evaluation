import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
//redux
import { useSelector } from "react-redux";
import { selectIsFunded, selectIsPaid } from "../../redux/paymentSlice";
//tsx
import PaymentSuccess from "./PaymentSuccess";
import PaymentConfirm from "./PaymentConfirm";
import PaymentFund from "./PaymentFund";

interface DrawerProps {
  isOpen: boolean;
  closeMenuHandler: () => void;
  onClose: () => void;
}

//MOBILE MENU OPENS IF SCREEN SIZE < 1024px.
function PaymentMenuMobile({ closeMenuHandler, isOpen, onClose }: DrawerProps) {
  const isFunded = useSelector(selectIsFunded);
  const isPaid = useSelector(selectIsPaid);

  return (
    <Drawer onClose={closeMenuHandler} isOpen={isOpen} size='full'>
      <DrawerContent mt='60px' bgColor='#FCFCFC'>
        <DrawerCloseButton />

        <DrawerBody>
          {isFunded ? (
            isPaid ? (
              <PaymentSuccess closeMenuHandler={closeMenuHandler} />
            ) : (
              <PaymentConfirm />
            )
          ) : (
            <PaymentFund />
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default PaymentMenuMobile;
