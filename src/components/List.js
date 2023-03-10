import {
  IconButton,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const MyList = (props) => {
  const returnList = () => {
    return props.children.map((item, index) => {
      return (
        <Grid
          item
          key={index}
        >
          <ListItem sx={{ width: '100%' }}>
            <ListItemText
              primary={item}
              sx={{ overflow: 'hidden' }}
            ></ListItemText>
            <IconButton
              variant='contained'
              color='error'
              size='small'
            >
              <Delete />
            </IconButton>
          </ListItem>
          <Divider />
        </Grid>
      );
    });
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='space-evenly'
      alignItems='stretch'
    >
      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <List>{returnList()}</List>
      </Box>
    </Grid>
  );
};

export default MyList;
