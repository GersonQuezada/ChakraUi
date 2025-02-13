import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IconType } from "react-icons"
 


interface NavItemProps extends FlexProps {
    icon: IconType
    url: string
    children: React.ReactNode
    color:string
    isOpen: boolean;
}

const NavItem = ({ icon,url,children,isOpen,color, ...rest }: NavItemProps) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // Verificar si la URL actual coincide con el enlace
    setIsActive(window.location.pathname === url);
  }, [url]);
    return (
      <Box
        as="a"
        href={url}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex 
          align="center"
          p="4"
          mx="4"
          justify={isOpen ? "flex-start" : "center"}
          borderRadius="lg"
          role="group"
          height="48px"
          cursor="pointer"
          bg={isActive ? "#b34de6" : "transparent"} // Fondo diferente si es activo
          color={isActive ? "white" : color || "inherit"} // Color de texto diferente si es activo

          {...rest}>
          {icon && (
            <Icon
              mr={isOpen ? "4" : "0"}
              fontSize="16"                           
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    )
  }

  export default NavItem