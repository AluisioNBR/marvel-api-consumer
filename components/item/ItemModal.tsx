import { Image, Modal, Anchor } from '@mantine/core';
import Link from 'next/link'
import { useStyles } from '../../styles/useStyles'

import type { Dispatch, SetStateAction } from 'react';
import type { CharacterComicsOrSeriesOrEvents } from '../../pages/api/typeDefs'

interface ItemModalInterface{
  opened: boolean,
  setOpened: Dispatch<SetStateAction<boolean>>,

  children: string,
  thumbnail: string,
  description: string,
  modified: string,
  comics: CharacterComicsOrSeriesOrEvents,
}

export function ItemModal({
  opened,
  setOpened,

  children,
  thumbnail,
  description,
  modified,
  comics,
}: ItemModalInterface){
  const { classes } = useStyles();
  const fullDateModified = new Date(modified).toUTCString().split(' ')
  const dateModified = `${fullDateModified[1]} ${fullDateModified[2]} ${fullDateModified[3]}`

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
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
            alt={children} caption={`Modificado em ${dateModified}`}
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
            color: '#fdfdfd', fontWeight: 'bold', textAlign: 'center'
          }}
          target="__blank"
        >
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </Anchor>
    </Modal>
  )
}