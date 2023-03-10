import { useState } from 'react';
import List from './List';
import { Button, Grid } from '@mui/material/';

const App = () => {
  const [list, setList] = useState([]);
  const [term, setTerm] = useState('');

  const addToList = (event) => {
    event.preventDefault();
    if (term === '') {
      return;
    }
    setList([...list, term]);
    console.log(list);
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid
        item
        xs={12}
      >
        <h1>Todos</h1>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <form onSubmit={(e) => addToList(e)}>
          <input
            type='text'
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <Button
            variant='contained'
            type='submit'
            size='small'
          >
            Add
          </Button>
        </form>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <List>{list}</List>
      </Grid>
    </Grid>
  );
};

export default App;
