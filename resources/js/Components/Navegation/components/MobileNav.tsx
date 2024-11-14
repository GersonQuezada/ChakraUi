import { User } from "@/types"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, BoxProps, Flex, FlexProps, HStack, IconButton, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { useForm } from "@inertiajs/react"
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

interface MobileProps extends BoxProps{
    user: User
    onOpen: () => void    
    isOpen: boolean
    onToggle: () => void

}

const MobileNav = ({  user,onOpen,isOpen,onToggle, color, ...rest }: MobileProps) => {

  const {post,get} = useForm();
    return (
      <Flex minWidth='max-content'  alignItems='center' gap='1'  color={color}>
        <Box display={"flex"} p="2"  alignItems="center" gap={5} justifyContent={{ base: 'space-between', md: 'flex-end' }} flexDirection={"row"} >
          <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  onClick={onOpen}
                  variant="outline"
                  aria-label="open menu"
                  icon={<FiMenu />} 
                  color={color}          
                />
                <IconButton
                        display={{ base: 'none', md: 'inline-flex' }}
                        aria-label="Toggle Navigation"
                        icon={isOpen ? <IoMdClose /> : <FiMenu />}
                        onClick={onToggle}   
                        borderRadius={150}
                        color={color}
                        bg={"transparent"}
                        _hover={"transparent"}
                        ml={2}
                    />
            <Image h={10}  src="./images/credi.png"  onClick={() =>{ 
                        get('/dashboard');                   
                        }}></Image>
            <Text
            display={{ base: 'none', md: 'flex' }}
            fontSize="3xl"
            fontFamily={"Georgia"}
            fontWeight="bold"   >
            Sistema de Activos - Credimujer
          </Text>
        </Box>
        <Spacer />
        <Box p='2'  alignItems="center" justifyContent={{ base: 'space-between', md: 'flex-end' }}>
          <HStack spacing={{ base: '0', md: '6' }}>            
                  <Flex alignItems={'center'}>
                    <Menu>
                      <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                        <HStack>
                          <Avatar
                            size={'sm'}
                            src={
                              'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            }
                          />
                          <VStack
                            display={{ base: 'none', md: 'flex' }}
                            alignItems="flex-start"
                            spacing="1px"
                            ml="2">
                            <Text fontSize="sm" >{user.name}</Text>
                            <Text fontSize="xs" >
                              Admin
                            </Text>
                          </VStack>
                          <Box display={{ base: 'none', md: 'flex' }}>
                            <FiChevronDown />
                          </Box>
                        </HStack>
                      </MenuButton>
                      <MenuList
                        bg={useColorModeValue('black', 'gray.900')}
                        borderColor={useColorModeValue('black', 'gray.700')}>
                        <MenuItem bg={"transparent"} onClick={()=>{ get('/profile') }} >Perfil</MenuItem>
                        <MenuItem bg={"transparent"}>Configuracion</MenuItem>                      
                        <MenuDivider bg={"white"} />
                        <MenuItem  bg={"transparent"} _hover={"white"} onClick={() =>{ 
                          post('logout');                   
                          }} >Salir</MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
          </HStack>
        </Box>
      </Flex>
 

 
    )
  }

  export default MobileNav;