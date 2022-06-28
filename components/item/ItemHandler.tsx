import { Image } from '@mantine/core';
import type { Dispatch, SetStateAction } from 'react';

interface ItemHandlerInterface{
  setOpened: Dispatch<SetStateAction<boolean>>,
  thumbnail: string,
  children: string
}

export function ItemHandler({ setOpened, thumbnail, children }: ItemHandlerInterface){
  return (
    <button
      onClick={() => setOpened(true)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        width: '10rem',
        height: '15rem',
        overflow: 'hidden',

        padding: '1rem',
        backgroundColor: '#202020'
      }}
    >
      <Image
        src={thumbnail}
        alt={children}
        width={125} height={125} radius="md"
      />

      <p style={{
        color: '#fdfdfd',
        fontFamily: 'Open Sans, sanserif',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        {children}
      </p>
    </button>
  )
}