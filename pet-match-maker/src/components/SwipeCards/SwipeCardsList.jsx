import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import SwipeCard from '../SwipeCards/SwipeCard';

import './cards.scss';

export default function UsersList({ petList }) {
  const [rerender, setRerender] = useState(false);
  const activeIndexRef = useRef();

  useEffect(() => {
    activeIndexRef.current = petList.length - 1;
    setRerender(!rerender);
  }, [petList]);
  console.log('asdadasdd', activeIndexRef);
  return (
    <Box d="flex">
      {petList.map((card, index) => (
        <SwipeCard
          key={index}
          isActive={activeIndexRef.current === index}
          onLeftScreen={() => {
            activeIndexRef.current = index - 1;
            setRerender(activeIndexRef.current % 2 === 0);
          }}
          {...card}
        />
      ))}
    </Box>
  );
}
