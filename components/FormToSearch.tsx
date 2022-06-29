import { TextInput, Button, Group, } from '@mantine/core';
import md5 from 'js-md5'
import axios from 'axios'

import { useStyles } from '../styles/useStyles'

import type { Dispatch, SetStateAction } from 'react';
import type { MarvelApiCharacterResponse } from '../pages/api/typeDefs'
import type { StaticProps } from '../pages/index'
import type { SearchBarProps } from './AppHeader'

export function FormToSearch({ staticProps, searchValue, setSearchValue, setResponse }: SearchBarProps){
  const { classes } = useStyles();

  async function submitContent(){
  	const [timestamp, hash] = initializateRequestTsAndHash(staticProps)

    try {
      const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          nameStartsWith: searchValue,
          ts: timestamp,
          hash: hash.hex(),
          orderBy: 'name',
          limit: 20,
          apikey: staticProps.marvelApiKeyPublic
        }
      })

      const data: unknown = await response.data
      setResponseContent({
        data: data as MarvelApiCharacterResponse,
        setResponse: setResponse as Dispatch<SetStateAction<MarvelApiCharacterResponse>>
      })
    } catch(e){ console.log(e) }
  }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      submitContent()
    }}>
      <Group className={classes.searchForm}>
        <TextInput
          onChange={(newValue) => setSearchValue(newValue.target.value)}
          className={classes.searchBar}
          type='search' label='Search Bar' required
          placeholder="What do you want to search ?"
          value={searchValue}
          radius='xl' size="md"
        />

        <Button
          onClick={() => submitContent()}
          variant="default" radius='xl' color='dark' size="md"
          style={{ backgroundColor: '#efefef' }}
        >
          Search
        </Button>
      </Group>
    </form>
  )
}

function initializateRequestTsAndHash(staticProps: StaticProps): [number, md5.Md5]{
  const timestamp = Number(new Date())
  const hash = md5.create()

  hash.update(timestamp + staticProps.marvelApiKeyPrivate + staticProps.marvelApiKeyPublic)
  return [timestamp, hash]
}

interface SetResponseContentProperties{
  data:  MarvelApiCharacterResponse,
  setResponse: Dispatch<SetStateAction<MarvelApiCharacterResponse>>
}

function setResponseContent({ data, setResponse }: SetResponseContentProperties){
  setResponse(data)
}