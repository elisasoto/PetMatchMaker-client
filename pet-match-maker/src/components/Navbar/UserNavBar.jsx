import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

import { UserContext } from '../../context/User';
import Logo from './Logo';
import LogoImg from '../../assets/petmatchmaker.png';

export default function UserNavBar() {
  const { logout, user } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = useHistory();
  console.log('i am the user', user);
  const handleClickLogout = async () => {
    await logout();
    await history.push('/');
  };

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
                    <Avatar size={'sm'} src={''} />
                  </MenuButton>
                  <MenuList>
                    <Link to="/user/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
          <Link to="/user/home">
            <Box p="6">
              <Logo picture={LogoImg} alt={LogoImg} />
            </Box>
          </Link>
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
