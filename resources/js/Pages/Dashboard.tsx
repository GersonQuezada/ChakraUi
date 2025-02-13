 
import { PageProps } from '@/types';
 
import DashboardLayouts from '@/Layouts';
import {  Flex, Grid, GridItem, Spacer, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }: PageProps) {
    return (
        <DashboardLayouts  user={auth.user}>       
            <Head title='Dashboard'/>
            <Grid templateColumns='repeat(2, 2fr)' p={10} gap={6}>
                <GridItem w='100%' bg='transparent'>
                <Stat>
                    <StatLabel>Elementos de Baja</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    23.36%
                    </StatHelpText>
                </Stat>
                </GridItem>
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' /><GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
            
        </DashboardLayouts>
      

    );
}

 