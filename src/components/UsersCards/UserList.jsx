import { useState, useEffect } from 'react';
import { mockedUsersList } from '../../constants/mockers';

import UserCard from './UserCard';
import { Box, Stack } from '@chakra-ui/react';

export default function UsersList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(mockedUsersList);
  }, [list]);

  return (
    <Box d="flex">
      <Stack>
        {list.map((card, index) => (
          <UserCard key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
}
