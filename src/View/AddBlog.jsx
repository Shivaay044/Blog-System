'use client'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Textarea,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { apiUrl } from '../utils/apiUrl'
import { toast } from 'react-toastify'
import { Form } from 'react-bootstrap'

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
]


export default function AddBlog() {
    
    const [BlogData, setBlogData] = useState({title:"",username:"",description:"",date:"",image:""})
    const {title,username,description,date,image} = BlogData;


    const handleInput = (e) =>{ 
        const { name , value} = e.target
        setBlogData({...BlogData,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(title==""||username==""||description==""||date==""||image==""){
           return toast.info("all field are required")
        };

        axios.post(`${apiUrl}/blogs`, BlogData)
        .then(()=>{ toast.success("Blog added successfully"); 
        setBlogData({title:"",username:"",description:"",date:"",image:""}) })
        .catch(()=>{ toast.success("error occured try again")})
    }



  return (
    <Box  position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            📝 Blog Bliss {' '}
            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              &
            </Text>{' '}
            Begins Here: Create with WeBlog!
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '34px', md: '50px' })}
              minHeight={useBreakpointValue({ base: '34px', md: '50px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={2}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
               Add a Blog
              <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            Craft and share captivating blog posts effortlessly with our user-friendly editor. Connect with a vibrant community, personalize your blog, and control your privacy. Start writing your story today with WeBlog!
            </Text>
          </Stack>
          <Box as={'form'} mt={3}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Input
                name='title'
                placeholder="Title"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInput}
                value={title}
              />
              <Input
               name='username'
                placeholder="Username"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInput}
                value={username}
              />
              <Input
                name='date'
                type="date"
                placeholder="Date"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInput}
                value={date}
              />
              <Textarea
               name='description'
                placeholder="Description"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInput}
                value={description}
              />
              <Input
               name='image'
                type="url"
                placeholder="Image url"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInput}
                value={image}
              />
            </Stack>
            <Input
            type="submit"
              onClick={handleSubmit}
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}/>
            </form>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  )
}