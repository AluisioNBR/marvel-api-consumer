import { ItemResult } from './item/ItemResult';
import { useStyles } from '../styles/useStyles'
import type { Character } from '../pages/api/typeDefs'

import { useEffect, useRef } from 'react';
import { showNotification } from '@mantine/notifications';
import { Error404 } from 'tabler-icons-react';

interface MainContentInterface{ results: Character[] }

export function AppMain({ results }: MainContentInterface){
  const { classes } = useStyles();

  let counter = useRef(0)
  const content = results.map((character: Character) => {
    console.log(character.description)
    
    return (
      <ItemResult
        key={character.id}
        thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        description={character.description}
      >
        {character.name}
      </ItemResult>
    )})

    useEffect(() => {
      const isTheFirstTime = counter.current == 0
      const searchReturnIsEmpty = results.length == 0
      
      if(isTheFirstTime)
        counter.current += 1
      else if(searchReturnIsEmpty)
        showNotification({
          autoClose: 5000,
          title: "Character not found!",
          message: 'No characters were found in this quest',
          color: 'red',
          icon: <Error404 size={32} strokeWidth={2.5} color={'#fdfdfd'}/>,
          styles: {
            root: { backgroundColor: '#202020' },
            icon: { padding: '.2rem' },
            title: { color: '#ff5555' },
            description: { color: '#fdfdfd' },
          }
        });
    }, [results, counter])

  return (
    <main className={classes.main}>
      <div className={classes.results}>
        {content}
      </div>
    </main>
  )
}
