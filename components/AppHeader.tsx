import { Title, Group, } from '@mantine/core';
import { useStyles } from '../styles/useStyles'

import type { Dispatch, SetStateAction } from 'react';
import type { MarvelApiCharacterResponse } from '../pages/api/typeDefs'
import type { StaticProps } from '../pages/index'

import { FormToSearch } from './FormToSearch'

interface SearchBarProps{
  staticProps: StaticProps,
  searchValue: string,
  setSearchValue: Dispatch<SetStateAction<string>>,
  setResponse: Dispatch<SetStateAction<MarvelApiCharacterResponse>> | Dispatch<SetStateAction<null>>
}

export type { SearchBarProps }

export function AppHeader({
  staticProps,
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
          staticProps={staticProps}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setResponse={setResponse}
        />
      </Group>
    </header>
  )
}