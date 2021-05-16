import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Box,
  Menu,
  Avatar,
  MenuItem,
  MenuDivider,
  MenuButton,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Logo from './Logo';
import LogoImg from '../../assets/petmatchmaker.png';

export default function UserNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} pos="relative">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    isActive={isOpen}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                  >
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <Link to="/user/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem
                      onClick={() =>
                        alert('call function logout and redirect to /')
                      }
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
          <Box p="6">
            <Logo picture={LogoImg} alt={LogoImg} />
          </Box>
          <Box p="2">
            <IconButton
              aria-label="Call Segun"
              size="md"
              icon={<FontAwesomeIcon icon={faHeart} color="#0bc5ea" />}
              isRound="true"
              onClick={() =>
                alert(
                  'neet to call the function that brings likes and redirect to /user/likes!'
                )
              } /**{ @TODO: aqui se hace otra llamada a axios para los likes y al finalizar cierra la ventana para seguir eligiendo }*/
            />
            <Text fontSize="12px">MyLikes</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
