import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Menu,
  Box,
  MenuButton,
  MenuList,
  Flex,
  Button,
  MenuGroup,
  MenuItem,
  MenuDivider,
  useColorModeValue
} from '@chakra-ui/react';

import { UserContext } from '../../context/User';
import Logo from '../Navbar/Logo';
import LogoImg from '../../assets/petmatchmaker.png';

export default function ShelterNavBar() {
  const { logout } = useContext(UserContext);

  const history = useHistory();

  const handleClickLogout = async () => {
    await logout();
    await history.push('/');
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} pos="relative">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton as={Button} colorScheme="cyan" size="sm">
                Profile
              </MenuButton>
              <MenuList>
                <MenuGroup title="Your Account">
                  <Link to="/shelter/profile">
                    <MenuItem>Profile</MenuItem>
                  </Link>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Close Session">
                  <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </>
          )}
        </Menu>
        <Link to="/shelter/home">
          <Box p="6">
            <Logo picture={LogoImg} alt={LogoImg} />
          </Box>
        </Link>
      </Flex>
    </Box>
  );
}
