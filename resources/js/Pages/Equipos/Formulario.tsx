import React, { useState } from 'react';
import { Box, Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Divider, FormControl, FormLabel, Grid, HStack, Input, Radio, RadioGroup, Select,  Stack,   Tab,   TabList,   TabPanel,   TabPanels,   Tabs,   Text } from '@chakra-ui/react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayouts from '@/Layouts';
import { PageProps } from '@/types';

function Index({ auth }: PageProps) {
  const [selectedValue, setSelectedValue] = useState("");

  const ListaImpresoras = [
    { id: 1, name: "HP", },
    { id: 2, name: "Canon" },
    { id: 3, name: "Epson" },
  ];

  const ListaLapstos = [
    { id: 1, name: "HP", },
    { id: 2, name: "LENOVO" },
    { id: 3, name: "DELL" },
    { id: 4, name: "TOSHIBA" },
    
    
  ];
 
  return (
    <DashboardLayouts user={auth.user}>       
      <Head title='GenerarArchivo'/>
      <Box m={5}>
      <Card>
        <CardHeader>
          <Text fontSize={'2xl'} >Registro de Equipos</Text>
        </CardHeader> 
        <CardBody  >    
          <form>
            <HStack align={'center'} spacing={6} my={3}>
              <Text fontSize={16}>Seleccionar Categoria</Text>              
              <Select value={selectedValue} onChange={(e) => { setSelectedValue(e.target.value); }} fontSize={16} placeholder='Seleccionar opcion' w={250}>    
                <option value="Impresoras">Impresoras</option>
                <option value="Laptops">Laptops</option>
                <option value="Monitores">Monitores</option>
                <option value="TLM">Teclados / Mouse</option>
                <option value="CPU">CPU</option>            
              </Select>
            </HStack> 
            <Divider my={3} borderColor={'black'} variant={'dashed'} />
            <Text my={3} fontSize={18} >
                Detalles del Equipo
              </Text>
              {selectedValue == "Impresoras" && (
              <Box>
                <Grid templateColumns={{ base: 'repeat(1 , 2fr)', md: 'repeat(2 , 2fr)' }}   p={5} gap={3} > 
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16} >Marca </FormLabel>              
                      <Select placeholder='Seleccionar opcion' fontSize={16} w={250}>
                        {ListaImpresoras.map((impresora) => (
                          <option key={impresora.id} value={impresora.name}>
                            {impresora.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16} >Modelo</FormLabel>              
                      <Input type='text'></Input>
                    </FormControl>
                    <FormControl w='100%' isRequired>
                      <FormLabel  fontSize={16}>Tipo de Impresora</FormLabel>              
                      <Input type='text'></Input>
                    </FormControl>
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16} >Resolucion de Impresion</FormLabel>              
                      <Input type='text'></Input>
                    </FormControl>
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16} >Velocidad de Impresion</FormLabel>              
                      <Input type='text'></Input>
                    </FormControl>
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16} >Funciones</FormLabel>      
                      <CheckboxGroup colorScheme='purple' defaultValue={['Impresion', 'Copiado']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                          <Checkbox value='Impresion'>Impresion</Checkbox>
                          <Checkbox value='Escaneo'>Escaneo</Checkbox>
                          <Checkbox value='Copiado'>Copiado</Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    </FormControl>
                    <FormControl w='100%' isRequired>                     
                      <FormLabel fontSize={16} >Conectividad</FormLabel>              
                      <Box color={'black'}  fontSize={15} ml={5}>
                        <HStack py={2} spacing='24px'>
                          <Text>Wifi:</Text>
                          <RadioGroup>
                            <Radio px={2} value='si'>SI</Radio>
                            <Radio px={2} value='no'>NO</Radio> 
                          </RadioGroup>
                        </HStack>
                        <HStack py={2} spacing='24px'>
                          <Text>Puertos Usb:</Text>
                          <Input type='number' w={150}></Input>
                        </HStack>
                        <HStack py={2} spacing='24px'>
                          <Text>Ethernet :</Text>
                          <RadioGroup>
                            <Radio px={2} value='si'>SI</Radio>
                            <Radio px={2} value='no'>NO</Radio> 
                          </RadioGroup>
                        </HStack>
                        <HStack py={2} spacing='24px'>
                          <Text>Bluetooth :</Text>
                          <RadioGroup >
                            <Radio px={2} value='si'>SI</Radio>
                            <Radio px={2} value='no'>NO</Radio> 
                          </RadioGroup>
                        </HStack>
                      </Box>
                    </FormControl> 
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16} >Consumibles</FormLabel>              
                      <Stack alignContent={'center'} direction={['column','row']} >
                        <FormLabel fontSize={14}>Tipo de Tinta/Toner</FormLabel>
                        <Select placeholder='Seleccionar opcion'>
                          <option value='Tinta'>Cartucho Negro</option>
                          <option value='Toner'>Tóner TN-450</option>
                        </Select>
                        <Input type='text' placeholder='Duracion'></Input>
                      </Stack>
                    </FormControl>
                    <FormControl w='100%' isRequired>
                      <FormLabel fontSize={16}>Estado de Garantia</FormLabel>              
                      <Input type='text'></Input>
                    </FormControl>
                  </Grid>  
              </Box>
              )}
              {selectedValue =="Laptops" && (
                <Box>
                  <Grid templateColumns={{ base: 'repeat(1 , 2fr)', md: 'repeat(2 , 2fr)' }}   p={5} gap={3}>
                    <FormControl isRequired>
                      <FormLabel>Marca</FormLabel>
                      <Select placeholder="Seleccionar opcion" fontSize={16}>
                        {ListaLapstos.map((laptop) => (
                          <option  key={laptop.id} value={laptop.id}>{laptop.name}</option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Modelo</FormLabel>
                      <Input type='text'></Input>                      
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Numero de Serie</FormLabel>
                      <Input type='text'></Input>                      
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Procesador</FormLabel>
                      <Stack spacing={[1,2]} direction={['column', 'row']}>
                      <Input type='text' placeholder='Modelo'></Input>                      
                      <Input type='text' placeholder='Velocidad'></Input>                        
                      </Stack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Memoria RAM 1</FormLabel>
                      <Stack spacing={[1,2]} direction={['column', 'row']} >
                      <Input type='text' placeholder='Capacidad'></Input>                      
                      <Input type='text' placeholder='Tipo'></Input>  
                      <Input type='text' placeholder='Velocidad'></Input>  
                      </Stack>                    
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Memoria RAM 2</FormLabel>
                      <Stack spacing={[1,2]} direction={['column', 'row']}>
                      <Input type='text' placeholder='Capacidad'></Input>                      
                      <Input type='text' placeholder='Tipo'></Input>  
                      <Input type='text' placeholder='Velocidad'></Input>  
                      </Stack>                    
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Almacenamiento 1</FormLabel>
                      <Stack spacing={[1,2]} direction={['column', 'row']}>
                      <Input type='text' placeholder='Tipo'></Input>                      
                      <Input type='text' placeholder='Capacidad'></Input>    
                      </Stack>                 
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Almacenamiento 2</FormLabel>
                      <Stack spacing={[1,2]} direction={['column', 'row']}>
                      <Input type='text' placeholder='Tipo'></Input>                      
                      <Input type='text' placeholder='Capacidad'></Input>    
                      </Stack>                 
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Tarjeta Grafica</FormLabel>
                      <Stack spacing={[1,2]} direction={['column', 'row']}>
                      <Input type='text' placeholder='Integrada'></Input>                      
                      <Input type='text' placeholder='Dedicada'></Input>  
                      <Input type='text' placeholder='Capacidad de memoria'></Input>  
                      </Stack>                 
                    </FormControl>
                    <FormControl isRequired _placeholder={'Pantalla'}>
                      <FormLabel>Pantalla</FormLabel>
                      <Grid templateColumns={{ base: 'repeat(1 , 2fr)', md: 'repeat(2 , 2fr)' }} gap={2} >
                        {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                        <Input type='text' placeholder='Tamaño'></Input>                      
                        <Input type='text' placeholder='Resolución'></Input>                        
                        <Input type='text' placeholder='Tipo de Panel'></Input>  
                        <Input type='text' placeholder='Frecuencia de refresco'></Input>  
                        {/* </Stack> */}
                      </Grid>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Sistema Operativo</FormLabel>
                      <Stack>  
                        <Select placeholder='Seleccionar Sistema Operativo'>
                          <option>Windows 11</option>
                          <option>Ubuntu</option>
                          <option>MacOS</option>                        
                        </Select>
                        <FormLabel>Licencia sistema Operativo</FormLabel>
                        <RadioGroup >
                            <Radio px={2} value='si'>SI</Radio>
                            <Radio px={2} value='no'>NO</Radio> 
                        </RadioGroup>
                      </Stack>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Estado</FormLabel>
                      <Input type='text'></Input>                      
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Conectividad</FormLabel>
                    <Tabs>
                      <TabList>
                        <Tab>Puertos</Tab>
                        <Tab>Red</Tab>
                        <Tab>WebCam</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <Stack spacing={[1,2]} direction={['column', 'row']}> 
                            <Input type='text' placeholder='USB'></Input>
                            <Input type='text' placeholder='HDMI'></Input> 
                            <Input type='text' placeholder='Jack de Audio 3.5 mm'></Input>
                          </Stack>
                        </TabPanel>
                        <TabPanel>
                          <Stack spacing={[1,2]} direction={['column', 'row']}> 
                            <Input type='text' placeholder='WI-FI'></Input>
                            <Input type='text' placeholder='Bluetooth '></Input>
                            <Input type='text' placeholder='Ethernet'></Input> 
                          </Stack>
                        </TabPanel>
                        <TabPanel>
                          <Input type='text' placeholder='Resolucion'></Input>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
 
                    </FormControl>
                  </Grid>
                </Box>
              )}

              
            <Button colorScheme='blackAlpha' >Guardar</Button>
          </form>

        </CardBody>
      </Card>
 
      </Box>
    </DashboardLayouts>
  );
}

export default Index;