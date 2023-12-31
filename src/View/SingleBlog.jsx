
"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../utils/apiUrl";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';


const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date}</Text>
    </HStack>
  );
};

const AllBlogs = () => {
  const [Blogs, setBlogs] = useState([]);

  const {id} = useParams()

  useEffect(()=>{
    console.log(id)
     axios.get(`${apiUrl}/blogs/${id}`)
     .then((res)=>setBlogs(res.data))
  },[])


  return (
    <Container maxW={"7xl"} p="12">
      <Box>
          <Box >
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Box
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                   <Heading as="h1">Stories by {Blogs?.username}</Heading>
                    <Image
                      borderRadius="lg"
                      src={
                        Blogs?.image
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Text
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    {Blogs?.title}
                  </Text>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                 { Blogs?.description }
                </Text>
                <BlogAuthor
                  name={Blogs?.username}
                  date={Blogs?.date}
                />
              </Box>
            </Box>
          </Box>
      </Box>
    </Container>
  );
};

export default AllBlogs;
