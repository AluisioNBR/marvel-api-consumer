import { Image, Modal, Anchor, Button } from '@mantine/core';
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
          width: '98vw',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <div className={classes.searchItemModal}>
        <CharacterImage
          thumbnail={thumbnail}
          dateModified={dateModified}
        >
          {children}
        </CharacterImage>

        <div>
          <p style={{ fontSize: '1.1rem' }}>{description}</p>

          <CharacterComics>
            {comics}
          </CharacterComics>
        </div>
      </div>

      <Anchor component={Link} href="http://marvel.com">
        <a
          style={{
            color: '#fdfdfd',
            fontWeight: 'bold',
            textAlign: 'center',
            textDecoration: 'none'
          }}
          target="__blank"
        >
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </Anchor>
    </Modal>
  )
}

function CharacterImage({
  children,
  thumbnail,
  dateModified
}: {
  children: string,
  thumbnail: string,
  dateModified: string
}){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Image
        src={thumbnail}
        alt={children} caption={`Modified in ${dateModified}`}
        width={200} height={200} radius="md"
      />

      <h2 style={{
        color: '#fdfdfd',
        textAlign: 'center'
      }}>
        {children}
      </h2>
    </div>
  )
}

function CharacterComics({ children }: {
  children: CharacterComicsOrSeriesOrEvents
}){
  const { classes } = useStyles();
  const comicsContent = children.items.map((comic) => {
    return (
      <Button
        key={comic.name}
        variant="default" radius='xs' size="md"
        style={{ backgroundColor: '#efefef' }}
      >
       {comic.name} 
      </Button>
    )
  })

  return (
    <div>
      <h2 style={{
        color: '#fdfdfd',
        textAlign: 'center'
      }}>
        Comics available: {children.available}
      </h2>

      <div className={classes.comicsContent}>
        {comicsContent}
      </div>
    </div>
  )
}