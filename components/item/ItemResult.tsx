import { useState } from 'react';

import { ItemHandler } from './ItemHandler'
import { ItemModal } from './ItemModal'

import type { CharacterComicsOrSeriesOrEvents } from '../../pages/api/typeDefs'

interface ItemResultInterface{
  children: string,
  thumbnail: string,
  description: string,
  modified: string,
  comics: CharacterComicsOrSeriesOrEvents
}

export function ItemResult({
  children,
  thumbnail,
  description,
  modified,
  comics
}: ItemResultInterface){
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <ItemHandler
        setOpened={setOpened}
        thumbnail={thumbnail}
      >
        {children}
      </ItemHandler>

      <ItemModal
        opened={opened}
        setOpened={setOpened}
        description={description}
        thumbnail={thumbnail}
        modified={modified}
        comics={comics}
      >
        {children}
      </ItemModal>
    </div>
  )
}