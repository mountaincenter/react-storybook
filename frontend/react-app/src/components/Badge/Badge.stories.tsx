import Badge from '.';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BadgeComponent from '.';
import { Typography, Box } from '@mui/material';

type BadgeComponentProps = React.ComponentProps<typeof BadgeComponent>;

const RenderWithIconButton = (args: BadgeComponentProps) => {
  return (
    <BadgeComponent {...args}>
      <NotificationsIcon />
    </BadgeComponent>
  );
};

export default {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const badgeVariants = [
  { label: 'Default Badge', badgeContent: 5 },
  { label: 'Badge With Max', badgeContent: 100 },
  { label: 'Badge With Zero', badgeContent: 0 },
];

export const AllBadges = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap"
  >
    {badgeVariants.map((variant, index) => (
      <Box display="flex" alignItems="center" m={2} key={index}>
        <Typography variant="body1" mr={1}>
          {variant.label}
        </Typography>
        {RenderWithIconButton({ badgeContent: variant.badgeContent })}
      </Box>
    ))}
  </Box>
);

export const Default = {
  render: RenderWithIconButton,
  args: {
    badgeContent: 5,
  },
};

export const WithMax = {
  render: RenderWithIconButton,
  args: {
    badgeContent: 100,
  },
};

export const WithZero = {
  render: RenderWithIconButton,
  args: {
    badgeContent: 0,
  },
};
