import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayouts from '@/Layouts';
import { PageProps } from '@/types';

function FileUpload({ auth }: PageProps) {
  const [file, setFile] = useState<File | null>(null);
  const toast = useToast();
//   const { post } = useForm();

  const { data, setData, post, processing, errors } = useForm({
    archivo: null as File | null,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      toast({
        title: "Por favor selecciona un archivo.",
        status: "warning",
        position: "bottom-right",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('archivo', file);
    
    post(route('procesarArchivo'), {
        onSuccess: () => {
          toast({
            title: "Archivo procesado con éxito",
            status: "success",
            position: "bottom-right",
            duration: 2000,
            isClosable: true,
          });
        },
        onError: () => {
          toast({
            title: "Error al procesar el archivo",
            description: errors.archivo,
            status: "error",
            position: "bottom-right",
            duration: 2000,
            isClosable: true,
          });
        },
        preserveState: true,
        preserveScroll: true,
      });
  };

  return (
    <DashboardLayouts user={auth.user}>       
      <Head title='GenerarArchivo'/>
      <Box m={5}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Text>Generar Archivo:</Text>
          <Input type="file" name='archivo' accept=".ing" onChange={handleFileChange} />
          <Button mt={4} type="submit" colorScheme="blue">
            Subir y Procesar
          </Button>
        </form>
      </Box>
    </DashboardLayouts>
  );
}

export default FileUpload;