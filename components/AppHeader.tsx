import { Title, TextInput, Button, Group, } from '@mantine/core';
import { useStyles } from '../styles/useStyles'
import type { Dispatch, SetStateAction } from 'react';

export function AppHeader({ searchValue, setSearchValue }: SearchBarProps){
  const { classes } = useStyles();

  return (
    <header>
      <Group className={classes.header}>
        <Title order={1}>Marvel Api Consumer</Title>

        <FormToSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Group>
    </header>
  )
}

interface SearchBarProps{
  searchValue: string,
  setSearchValue: Dispatch<SetStateAction<string>>
}

function FormToSearch({ searchValue, setSearchValue }: SearchBarProps){
  const { classes } = useStyles();
  
  return (
    <form onSubmit={() => { console.log("Funcionou!") }}>
      <Group className={classes.searchForm}>
        <TextInput
          label='Search Bar'
          className={classes.searchBar}
          sx={(theme) => ({
          	label: {
					    color: '#fdfdfd',
					    fontWeight: 'bold'
					  },
				    input: {
				    	backgroundColor: '#efefef',
					    color: '#000'
						},
				  })}

          type='search'
          value={searchValue}
          onChange={(newValue) => setSearchValue(newValue.target.value)}
          placeholder="What do you want to search ?"
          required
          
          radius='xl'
          color='dark'
          size="md"
        />

        <Button
          variant="default"

          radius='xl'
          color='dark'
          size="md"
          style={{ backgroundColor: '#efefef' }}
        >
          Search
        </Button>
      </Group>
    </form>
  )
}