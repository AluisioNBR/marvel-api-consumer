import { useState } from 'react';

import { ItemHandler } from './ItemHandler'
import { ItemModal } from './ItemModal'

interface ItemResultInterface{
  children: string,
  thumbnail: string,
  description: string
}

export function ItemResult({ children, thumbnail, description }: ItemResultInterface){
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
      >
        {children}
      </ItemModal>
    </div>
  )
}