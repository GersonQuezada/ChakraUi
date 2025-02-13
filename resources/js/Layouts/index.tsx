import { useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { ChakraProvider, Drawer, DrawerContent, Grid, GridItem, useDisclosure,  BoxProps,  Flex, Box } from "@chakra-ui/react";
import MobileNav from "../Components/Navegation/components/MobileNav";
import SidebarContent from "../Components/Navegation/components/SidebarContent";
import { User } from "@/types";

interface DashboardProps extends BoxProps{
    user: User;
    children: React.ReactNode;
}

export default function DashboardLayouts ({ user, children }: DashboardProps) {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure({ defaultIsOpen:true});
    
    const [isMobile] = useMediaQuery("(max-width: 768px)");     
    return (
        <ChakraProvider>
            <Grid
                templateAreas={{
                    base: `"header header"
                        "main main"
                        "footer footer"`,
                    md: `"header header"
                        "nav main"
                        "nav footer"`
                }}
                gridTemplateRows={'max-content 1fr max-content'}
                gridTemplateColumns={{ base: '1fr', md: isOpen ? 'max-content 1fr' : 'max-content 1fr' }}
                height={"100vh"}
                gap='0'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='0' bgGradient="linear(to-t, #685aaa , #564997 )" h={"max-content"} area={'header'}>
                    <MobileNav onOpen={onOpen} isOpen={isOpen} onToggle={onToggle} user={user} color={"#eceef1"} /> 
                </GridItem>
                <GridItem  
                    bgGradient= "linear(to-b, #685aaa , #564997 )"  
                    minHeight={'max-content'}  overflow={'auto'} width={isOpen ? 250 : 'max-content'} area={'nav'} display={{ base: 'none', md: 'block' }}>
                    <SidebarContent  color="#FFFF" onClose={onClose} isOpen={isOpen} />
                </GridItem>
                <GridItem pl='2' bg="#eceef1" h="calc(100vh - max-content - max-content)"  overflow={"auto"}  width='100%' area={'main'}>
                    {children}
                </GridItem>
                <GridItem pl='2' bg='#black'  justifyContent={'center'}  display="flex" area={'footer'}>
                    ©Todos los derechos reservados - Credimujer(MMR)
                </GridItem>
            </Grid>
            {isMobile &&
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerContent overflow={'auto'}>
                    <SidebarContent isOpen={isOpen} color='#111827' onClose={onClose} />
                </DrawerContent>
                </Drawer>
            }

        
        </ChakraProvider>
    );
}