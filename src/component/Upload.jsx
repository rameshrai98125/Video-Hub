import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Upload() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p="16">
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vMax'} />
        <form>
          <HStack marginLeft={['none', '3rem']}>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: '120%',
                  border: 'none',
                  height: '100%',
                  marginLeft: '-20px',
                  color: 'purple',
                  background: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
}

export default Upload;
