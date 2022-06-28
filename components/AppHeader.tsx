import { Title, TextInput, Button, Group, } from '@mantine/core';
import { useStyles } from '../styles/useStyles'
import md5 from 'js-md5'
import axios from 'axios'

import type { Dispatch, SetStateAction, FormEvent } from 'react';
import type { MarvelApiCharacterResponse } from '../pages/api/typeDefs'

export function AppHeader({
  marvelApiKeyPublic,
  marvelApiKeyPrivate,
  
  searchValue,
  setSearchValue,
  setResponse
}: SearchBarProps){
  const { classes } = useStyles();

  return (
    <header>
      <Group className={classes.header}>
        <Title order={1}>Marvel Api Consumer</Title>

        <FormToSearch
          marvelApiKeyPublic={marvelApiKeyPublic}
          marvelApiKeyPrivate={marvelApiKeyPrivate}

          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setResponse={setResponse}
        />
      </Group>
    </header>
  )
}

interface SearchBarProps{
  marvelApiKeyPublic: string,
  marvelApiKeyPrivate: string,
  
  searchValue: string,
  setSearchValue: Dispatch<SetStateAction<string>>,
  setResponse: Dispatch<SetStateAction<MarvelApiCharacterResponse>> | Dispatch<SetStateAction<null>>
}

function FormToSearch({
  marvelApiKeyPublic,
  marvelApiKeyPrivate,

  searchValue,
  setSearchValue,
  setResponse
}: SearchBarProps){
  const { classes } = useStyles();

  async function submitContent(){
  	const timestamp = Number(new Date()), hash = md5.create()
    hash.update(timestamp + marvelApiKeyPrivate + marvelApiKeyPublic)
    let data: unknown

    try {
      const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          nameStartsWith: searchValue,
          ts: timestamp,
          hash: hash.hex(),
          orderBy: 'name',
          limit: 20,
          apikey: marvelApiKeyPublic
        }
      })

      data = await response.data
    } catch(e){ console.log(e) }
    
    const updateResponse = setResponse as Dispatch<SetStateAction<MarvelApiCharacterResponse>>
    updateResponse(data as MarvelApiCharacterResponse)
  }
  
  return (
    <form>
      <Group className={classes.searchForm}>
        <TextInput
          onChange={(newValue) => setSearchValue(newValue.target.value)}
          className={classes.searchBar}
          
          type='search'
          label='Search Bar'
          placeholder="What do you want to search ?"
          required
          value={searchValue}
          
          radius='xl' color='dark' size="md"
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