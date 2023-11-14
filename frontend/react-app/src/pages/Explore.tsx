import SearchHeader from '../components/Header/SearchHeader';
import { Grid, Divider } from '@mui/material';

const Explore = () => {
  return (
    <>
      <SearchHeader />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};

export default Explore;
