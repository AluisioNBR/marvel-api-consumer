import { Image, Modal, Anchor } from '@mantine/core';
import Link from 'next/link'
import { useStyles } from '../../styles/useStyles'
import type { Dispatch, SetStateAction } from 'react';

interface ItemModalInterface{
  opened: boolean,
  setOpened: Dispatch<SetStateAction<boolean>>,
  description: string,
  thumbnail: string,
  children: string
}

export function ItemModal({
  opened,
  setOpened,
  description,
  thumbnail,
  children
}: ItemModalInterface){
  const { classes } = useStyles();

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      overflow='inside' centered={true}
      styles={{
        modal: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          backgroundColor: '#202020',
          width: '90vw',
        },
      }}
    >
      <div className={classes.searchItemModal}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Image
            src={thumbnail}
            alt={children}
            width={200} height={200} radius="md"
          />

          <p style={{
            color: '#fdfdfd',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            textAlign: 'center'
          }}>
            {children}
          </p>
        </div>

        <p style={{ fontSize: '1.1rem' }}>{description}</p>
      </div>

      <Anchor component={Link} href="http://marvel.com">
        <a
          style={{
            color: '#fdfdfd', fontWeight: 'bold'
          }}
          target="__blank"
        >
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </Anchor>
    </Modal>
  )
}