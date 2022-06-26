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
    width: '16rem'
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
    flexWrap: 'no-wrap',
    gap: '1rem',

    color: '#fdfdfd',
    fontWeight: 'bold',

    [`@media (max-width: 720px)`]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

}));

export { useStyles }