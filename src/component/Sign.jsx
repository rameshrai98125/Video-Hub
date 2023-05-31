import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Sign() {
  return (
    <Container maxW={'container.xl'} minh={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={['center', 'none']}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Name"
            type={'text'}
            required
            focusBorderColor="purple.100"
          />
          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="purple.100"
          />
          <Input
            placeholder="password"
            type={'password'}
            required
            focusBorderColor="purple.100"
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Sign Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Sign;
