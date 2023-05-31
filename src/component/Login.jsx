import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
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
          <Button variant={'link'} alignSelf={'end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
