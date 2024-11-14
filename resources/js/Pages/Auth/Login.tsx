import { useEffect, FormEventHandler, useState } from 'react'; 
import { Head, Link, useForm } from '@inertiajs/react';
import { Avatar, Box, Button, CardHeader, chakra, ChakraProvider, Flex, FormControl, FormErrorMessage, FormHelperText, Heading, Input, InputGroup, InputLeftElement, InputRightElement, PopoverHeader, Stack, Text } from '@chakra-ui/react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { PiEyeBold, PiEyeClosedDuotone } from 'react-icons/pi';


export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    
   

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);
    const handleChange = (e : any) => {
        setData(e.target.name, e.target.value);
    };
    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);

    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };
    // console.log(errors);
 
    return(
      
        <ChakraProvider>
          <Head title="Inicio de Sesion" />
          <Box bgImage={"../images/wallpaper.jpg"} bgSize="cover" bgPosition="center" h={"100%"}>           
            <Flex direction="row" gap={1}>
              <Box flex="2.5" bg="transparent" display={{ base: 'none', md: 'flex' }} h="100%" textAlign="center">
                
              </Box>
              <Box flex="1.3" textAlign="center" h="100vh">
                <Flex
                  flexDirection="column"
                  bg="transparent"
                  justifyContent="center"
                  alignItems="center"
                  h="100%"
                >
                  <Box
                    as="section"
                    bg="rgba(255, 255, 255, 0.5)"
                    alignContent="center"
                    p={4}
                    borderRadius={10}
                    // mt={150}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Stack
                      flexDir="column"
                      mb="2"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Avatar bg="rgb(53, 49, 50)" />
                      <Heading color="rgb(53, 49, 50)">Inicio de Sesion</Heading>
                      <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={submit}>
                          <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="rgba(255, 255, 255, 0.5)"
                            boxShadow="md"
                          >
                            <FormControl>
                              <InputGroup borderColor="rgb(6, 15, 7)">
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<CFaUserAlt color="rgb(6, 15, 7)" />}
                                />
                                <Input type="email" name="email" value={data.email} placeholder="Correo" onChange={handleChange} />
                                                      
                              </InputGroup>
                              {errors.email ? 
                              ( <span color='red'> Email requerido</span> ) : <></>}
                            </FormControl>
                            <FormControl>
                              <InputGroup borderColor="rgb(6, 15, 7)">
                                <InputLeftElement
                                  pointerEvents="none"
                                  color="gray.300"
                                  children={<CFaLock color="rgb(6, 15, 7)" />}
                                />
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  value={data.password}
                                  placeholder="Contraseña"
                                  onChange={handleChange} 
                                />
                                <InputRightElement width="4.5rem">
                                  <Button h="1.75rem" size="md" bg={"gray.300"} borderRadius={5} mr="2" onClick={handleShowClick}>
                                    {showPassword ? <PiEyeClosedDuotone /> : <PiEyeBold />}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                              <FormHelperText textAlign="right">
                              </FormHelperText>
                            </FormControl>
                            <Button
                              borderRadius={0}
                              type="submit"
                              variant="solid"
                              colorScheme="blue"
                              width="full"
                            >
                              Ingresar
                            </Button>
                          </Stack>
                        </form>
                      </Box>
                    </Stack>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>         
        </ChakraProvider>
    )
}
