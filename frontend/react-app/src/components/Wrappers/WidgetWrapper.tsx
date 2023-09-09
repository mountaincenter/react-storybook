import { Grid } from '@mui/material';
import Widget from '../Widget/Widget';

interface WidgetWrapperProps {
  isTablet: boolean;
}

const WidgetWrapper = ({ isTablet }: WidgetWrapperProps) => {
  return (
    !isTablet && (
      <Grid item sx={{ overflowY: 'auto', maxHeight: '100dvh' }}>
        <Widget />
      </Grid>
    )
  );
};

export default WidgetWrapper;
