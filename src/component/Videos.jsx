import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function Videos() {
  const videoArr = [
    'https://www.pexels.com/video/a-sunset-time-lapse-8035714/',
    'https://youtu.be/Ac9LFQ7Yz9I',
  ];

  const [videoSrc, setVideoSrc] = useState('videoArr[0]');
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          style={{ width: '100%' }}
          src="https://tubitv.com/movies/608935/merry-wishmas?start=true"
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>sample Video 1</Heading>
          <Text>This is a sample video lorem100</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        py={'8'}
        spacing="8"
        overflowY={'auto'}
      >
        <Button variant={'ghost'} colorScheme={'purple'}>
          leacture
        </Button>
        {/* videoArr.map((item,index)=>
        {
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            leacture {index + 1}
          </Button>
        }
        ) */}
      </VStack>
    </Stack>
  );
}

export default Videos;
