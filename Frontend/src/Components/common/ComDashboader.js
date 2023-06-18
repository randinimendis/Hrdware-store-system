import React from 'react';
import { SimpleGrid, Box, Heading, Text, Button,Card,CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

export default function ComDashboard() {
  return (
    <div className='contentWrapper'>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <div>
        
        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box >
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Customer Manegement</Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box></div>
        
        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Employee Manegment</Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box>
        
        
        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Transport Manegment</Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box>
         
        
        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Warranty Manegment</Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Link to="/">
              <Button colorScheme='blue'>View here</Button></Link>
            </Box>
          </Box>
        </Box>
    

     
        
         
         <br/>
        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Finance Manegment</Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box>


        
        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Supply Manegement </Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box>



        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Inventrary  Manegement </Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box>


        <Box bg='#34495E' w='100%' p={4} color='white' borderWidth='1px' borderRadius='lg' 
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Heading size='md'>Maintenance Manegment</Heading>
            </Box>
            
            <Box d='flex' mt='2' alignItems='center'>
              <Button colorScheme='blue'>View here</Button>
            </Box>
          </Box>
        </Box>
        
      </SimpleGrid>


      

       

        



        
    </div>
  );
}
