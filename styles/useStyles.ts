import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    justifyContent: 'space-between',

    padding: '1rem',
    backgroundColor: '#202020',
    color: '#fdfdfd',

    [`@media (max-width: 800px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  },

  main: {
    padding: '1rem',
    backgroundColor: '#fdfdfd',
  },

  searchForm: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '.5rem',

    backgroundColor: '#202020',
    color: '#fdfdfd'
  },

  searchBar: {
    width: '16rem',

    label: {
      color: '#fdfdfd',
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#efefef',
      color: '#000'
    },
  },

  results: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    gridGap: '.8rem',

    [`@media (max-width: 800px)`]: {
      gridTemplateColumns: '1fr 1fr',
    }
  },

  searchItem: {
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '#202020',
    padding: '1rem',
    color: '#fdfdfd',
    fontWeight: 'bold'
  },

  searchItemModal: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',

    color: '#fdfdfd',
    fontWeight: 'bold',

    [`@media (max-width: 1200px)`]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  comicsContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '9rem',
    overflow: 'scroll',

    [`@media (max-width: 1200px)`]: {
      gridTemplateColumns: '1fr',
    }
  },

}));

export { useStyles }