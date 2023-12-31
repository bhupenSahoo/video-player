import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineSend,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={40} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get update
          </Heading>
          <HStack borderBottom={'2px solid white'} py={2}>
            <Input
              placeholder={'Enter your email...'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              padding={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>All right reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://www.youtube.com/" target="blank">
              <AiOutlineYoutube size={'40'} />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram size={'40'} />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://www.facebook.com/" target="blank">
              <AiOutlineFacebook size={'40'} />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
