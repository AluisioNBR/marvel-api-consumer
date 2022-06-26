import { useState, useEffect, Dispatch, SetStateAction} from 'react';
import type { MarvelApiCharacterResponse } from '../pages/api/typeDefs'

import { useStyles } from '../styles/useStyles'
import { AppHeader } from './AppHeader'
import { AppMain } from './AppMain'

export function AppBody(){
  const [searchBar, setSearchBar] = useState('')
  const [response, setResponse]: [MarvelApiCharacterResponse | null, Dispatch<SetStateAction<MarvelApiCharacterResponse>> | Dispatch<SetStateAction<null>>] = useState(null)

  useEffect(() => {
    console.log(response)
  }, [response])
  
  return (
    <div>
      <AppHeader searchValue={searchBar} setSearchValue={setSearchBar} />
      
      <AppMain />
    </div>
  )
}