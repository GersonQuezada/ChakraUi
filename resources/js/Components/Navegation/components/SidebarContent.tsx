import { Box, BoxProps, CloseButton, Flex, FlexProps, Icon, Spacer, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from "react-icons/fi";
import NavItem from "./NavItem";
import { dashboardRoutes } from "@/routes/dashboard";
 

interface SidebarProps extends BoxProps {
    onClose: () => void
    color : string
    isOpen: boolean;
}


const routes = dashboardRoutes();

const SidebarContent = ({ onClose,color,isOpen, ...rest }:SidebarProps ) => {   
    
    return (
        <Box >
        <Flex h="10" display={{ base: 'flex', md: 'none' }} align="end" justifyContent="flex-end" color={color} mx="8"  > 
            <Text>
                Sistema de Activos
            </Text>
            <Spacer/>
            <CloseButton onClick={onClose}/>
        </Flex>
        {routes.map((link: Router) => (        
            
            <NavItem
                key={link.name}
                icon={link.icon}
                url={link.url} 
                isOpen={isOpen}
                fontSize={14}
                _hover={{ bg: "#b34de6" }}
                color={color}   
                
            >
                {isOpen && (
                    <Box alignItems="center">                        
                        <Text  ml="1" >{link.name}</Text> 
                    </Box>
                )
                }
            </NavItem>

 
        ))}
        </Box>
    )
}
export default SidebarContent;
