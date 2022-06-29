import { useState, useEffect, Dispatch, SetStateAction} from 'react';
import type { MarvelApiCharacterResponse, Character } from '../pages/api/typeDefs'
import { AppHeader } from './AppHeader'
import { AppMain } from './AppMain'

import type { StaticProps } from '../pages/index'

type response = [
  MarvelApiCharacterResponse | null,
  Dispatch<SetStateAction<MarvelApiCharacterResponse>> | Dispatch<SetStateAction<null>>
]
type results = [
  Character[] | [],
  Dispatch<SetStateAction<Character[]>> | Dispatch<SetStateAction<[]>>
]

export function AppBody(props: StaticProps){
  const [searchBar, setSearchBar] = useState('')
  const [response, setResponse]: response = useState(null)
  const [results, setResults]: results = useState([])

  useEffect(() => {
    const responseIsNull = response != null

    if(responseIsNull){
      const content = response as MarvelApiCharacterResponse
      
      const charactersResults = setResults as Dispatch<SetStateAction<Character[]>>
      charactersResults(content.data.results)
    }
  }, [response, setResults])
  
  return (
    <div>
      <AppHeader
        staticProps={props}
        searchValue={searchBar}
        setSearchValue={setSearchBar}
        setResponse={setResponse}
      />
      
      <AppMain results={results} />
    </div>
  )
}