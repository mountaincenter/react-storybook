import ExploreHeader from '../components/Header/ExploreHeader';
import { Grid, Divider } from '@mui/material';

const Explore = () => {
  return (
    <>
      <ExploreHeader />
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
