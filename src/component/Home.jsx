import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../asset/1.jpg';
import img2 from '../asset/bg.jpg';
import img3 from '../asset/bg2.jpg';
import img4 from '../asset/c1.jpg';
import img5 from '../asset/ab.png';

const headingoption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

function Home() {
  return (
    <Box>
      {/* <MyCarousel /> */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w="full" h={'100vh'}>
          <Image src={img1} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingoption}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src={img2} />
          <Heading
            bgColor={'whiteAlpha.700'}
            color={'black'}
            {...headingoption}
          >
            Future is Gaming
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src={img3} />
          <Heading
            bgColor={'whiteAlpha.700'}
            color={'black'}
            {...headingoption}
          >
            Gaming on Console
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src={img4} />
          <Heading
            bgColor={'whiteAlpha.700'}
            color={'black'}
            {...headingoption}
          >
            Future is Gaming
          </Heading>
        </Box>
      </Carousel>

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
            blanditiis sunt illum dignissimos incidunt ducimus voluptatibus
            consequatur possimus, omnis fugiat vel molestiae ad expedita saepe
            harum temporibus numquam necessitatibus reprehenderit iste magni
            veniam veritatis error. Adipisci laudantium nam error.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

// const MyCarousel = () => {

// };

export default Home;
