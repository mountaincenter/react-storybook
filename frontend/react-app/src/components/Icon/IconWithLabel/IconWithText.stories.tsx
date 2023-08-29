import { useState } from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import IconWithText from './IconWithText';
import { SidebarIconCombinations } from '../IconData';
import { Switch, Box, Typography, useMediaQuery } from '@mui/material';
import { customTheme } from '../../../Theme';

export default {
  component: IconWithText,
  tags: ['autodocs'],
  decorators: [withRouter],
};

export const AllIconsWithText = () => {
  const [isActive, setIsActive] = useState(false); // isActiveのstateを管理
  const isTablet = useMediaQuery(
    customTheme.breakpoints.between('tablet', 'desktop')
  );
  return (
    <Box>
      {/* Switchの切り替えでisActiveを更新 */}
      <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
        <Typography mr={1}>Active Icon:</Typography>
        <Switch
          checked={isActive}
          onChange={(event) => setIsActive(event.target.checked)}
          name="isActive"
          inputProps={{ 'aria-label': 'isActive switch' }}
        />
      </Box>

      {/* IconWithTextにisActiveを渡す */}
      <Box display="flex" flexWrap="wrap">
        {Object.entries(SidebarIconCombinations).map(([text, data]) => (
          <Box flexDirection={isTablet ? 'column' : 'row'} display="flex">
            {isTablet && (
              <Typography variant="body1" mr={1}>
                {text}
              </Typography>
            )}
            <IconWithText
              key={text}
              link="/"
              text={text}
              Icon={data.Icon}
              OutlinedIcon={data.OutlinedIcon}
              badgeContent={data.badgeContent}
              isActive={isActive} // Switchの状態を反映
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
