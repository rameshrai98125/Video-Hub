import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneSchedule } from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full">
          <Heading
            size={'md'}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          >
            Subscribe to get update
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder={'Enter email here...'}
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius="0 20px 20px 0"
            >
              <AiTwotoneSchedule />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform="uppercase">
            VIDEO HUB
            <Text size={'md'} fontSize={'10px'}>
              All rights reserved
            </Text>
          </Heading>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform="uppercase">
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="/">Youtune</a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="/">Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="/">facebook</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
