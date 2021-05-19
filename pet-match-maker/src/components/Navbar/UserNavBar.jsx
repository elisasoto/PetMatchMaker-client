import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Flex,
  Text,
  IconButton,
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
import { getShortProfile } from '../../services/auth';
import Logo from './Logo';
import LogoImg from '../../assets/petmatchmaker.png';
import './styles.scss';

export default function UserNavBar() {
  const { logout, user } = useContext(UserContext);
  // const [profile, setProfile] = useState(null);

  const history = useHistory();
  const handleClickLogout = async () => {
    await logout();
    await history.push('/');
  };

  // useEffect(() => {
  //   if (user) {
  //     getShortProfile().then((res) => {
  //       setProfile(res);
  //     });
  //   }
  // }, []);

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        pos="relative"
        className="nav-container"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    isActive={isOpen}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                  >
                    <Avatar size="sm" name="" /> {/*src={`${user.img}`}*/}
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
            <Link to="/user/likes">
              <IconButton
                aria-label="Call Segun"
                size="md"
                icon={<FontAwesomeIcon icon={faHeart} color="#0bc5ea" />}
                isRound="true"
              />
            </Link>
            <Text fontSize="12px">MyLikes</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
