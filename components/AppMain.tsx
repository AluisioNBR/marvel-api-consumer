import { ItemResult } from './item/ItemResult';
import { useStyles } from '../styles/useStyles'
import type { Character } from '../pages/api/typeDefs'

interface MainContentInterface{ results: Character[] }

export function AppMain({ results }: MainContentInterface){
  const { classes } = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.results}>
        {results.map((character: Character) => {
          console.log(character.description)
          
          return (
            <ItemResult
              key={character.id}
              thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              description={character.description}
            >
              {character.name}
            </ItemResult>
          )})}
      </div>
    </main>
  )
}
