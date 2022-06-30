import React from "react"
import {
   Stack,
   Button,
   Box,
   useDisclosure
} from "@chakra-ui/react"

import DashboardTop from './DashboardTop/DashboardTop';
import DashboardMid from './DashboardMid/DashboardMid';
import DashboardBot from './DashboardBot/DashboardBot';
import DashboardEditModal from "./DashboardEditModal/DashboardEditModal";

const Dashboard = ({
   loggedInUser,
   profileWalletAddress,
}) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <>
         <Box
            marginTop={'30px'}
            height={'container'}
            bg={'rgba(255, 255, 255, 0.4)'}
            borderRadius={'6px'}
            display={'flex'}
            px={'18px'}
            py={'15px'}>
            <Stack gap={'4px'} width={'100%'}>
               <DashboardTop></DashboardTop>
               <DashboardMid></DashboardMid>
               {loggedInUser.wallet_address === profileWalletAddress ?
                  <>
                     <DashboardBot onOpen={onOpen}/>
                     <DashboardEditModal isOpen={isOpen} onClose={onClose}/>
                  </> : null
               }
            </Stack>
         </Box>
      </>
   );
}

export default Dashboard;