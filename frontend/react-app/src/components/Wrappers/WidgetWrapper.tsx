import { Grid } from '@mui/material';
import Widget from '../Widget/Widget';

interface WidgetWrapperProps {
  isTablet: boolean;
}

const WidgetWrapper = ({ isTablet }: WidgetWrapperProps) => {
  return (
    !isTablet && (
      <Grid
        item
        sx={{
          overflowY: 'auto',
          maxHeight: '100dvh',
          width: {
            xl: 259,
            lg: 72,
            md: 'none',
          },
        }}
      >
        <Widget />
      </Grid>
    )
  );
};

export default WidgetWrapper;
