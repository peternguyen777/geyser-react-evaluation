import { Icon } from "@chakra-ui/react";
import { HiXCircle } from "react-icons/hi";

interface ClickProps {
  onClick: (params: any) => void;
}
function CrossIcon({ onClick }: ClickProps) {
  return (
    <div onClick={onClick}>
      <Icon as={HiXCircle} w={5} h={5} color='#495057' cursor='pointer' />
    </div>
  );
}

export default CrossIcon;
