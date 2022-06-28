import { useState, useEffect, Dispatch, SetStateAction} from 'react';
import type { MarvelApiCharacterResponse, Character } from '../pages/api/typeDefs'
import { AppHeader } from './AppHeader'
import { AppMain } from './AppMain'

export function AppBody({
  marvelApiKeyPublic,
  marvelApiKeyPrivate
}: {
  marvelApiKeyPublic: string,
  marvelApiKeyPrivate: string
}){
  const [searchBar, setSearchBar] = useState('')
  const [response, setResponse]: [
    MarvelApiCharacterResponse | null,
    Dispatch<SetStateAction<MarvelApiCharacterResponse>> | Dispatch<SetStateAction<null>>
  ] = useState(null)
  const [results, setResults]: [
    Character[] | [],
    Dispatch<SetStateAction<Character[]>> | Dispatch<SetStateAction<[]>>
  ] = useState([])

  useEffect(() => {
    if(response != null){
      const content = response as MarvelApiCharacterResponse
      
      const charactersResults = setResults as Dispatch<SetStateAction<Character[]>>
      charactersResults(content.data.results)
    }
  }, [response, setResults])
  
  return (
    <div>
      <AppHeader
        marvelApiKeyPublic={marvelApiKeyPublic}
        marvelApiKeyPrivate={marvelApiKeyPrivate}

        searchValue={searchBar}
        setSearchValue={setSearchBar}
        setResponse={setResponse}
      />
      
      <AppMain results={results} />
    </div>
  )
}