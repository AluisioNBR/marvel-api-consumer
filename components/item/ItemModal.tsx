import { Image, Modal, } from '@mantine/core';
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
            backgroundColor: '#202020',
            width: '90vw',
          },
        }}
      >
        <div className={classes.searchItemModal}>
          <Image
            src={thumbnail}
            alt={children} caption={children}
            width={200} height={200} radius="md"
            styles={{
              caption: { color: '#fdfdfd', fontWeight: 'bold', fontSize: '1.8rem' },
            }}
          />

          <p style={{ fontSize: '1.1rem' }}>
            {description}
          </p>
        </div>
      </Modal>
  )
}