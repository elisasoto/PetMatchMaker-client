import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Flex,
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
import Logo from './Logo';
import LogoImg from '../../assets/petmatchmaker.png';
import './styles.scss';

export default function UserNavBar() {
  const { logout, user } = useContext(UserContext);

  const history = useHistory();

  const handleClickLogout = async () => {
    await logout();
    await handleRedirect('/');
  };

  const handleRedirect = (path) => {
    history.push(path);
  };

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
                    <Avatar size="sm" name="" src={user?.img} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleRedirect('/user/profile')}>
                      Profile
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
          <Box p="6" onClick={() => handleRedirect('/user/home')}>
            <Logo picture={LogoImg} alt={LogoImg} />
          </Box>
          <Box p="2" align="center">
            <IconButton
              aria-label="Call Segun"
              size="md"
              icon={<FontAwesomeIcon icon={faHeart} color="#0bc5ea" />}
              isRound="true"
              onClick={() => handleRedirect('/user/likes')}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
