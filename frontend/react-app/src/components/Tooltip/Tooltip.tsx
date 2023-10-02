import { Tooltip as MuiTooltip } from '@mui/material';
import React from 'react';

interface TooltipProps {
  title: string;
  children: React.ReactElement;
  disableHoverListener?: boolean;
}

const Tooltip = ({ title, children, disableHoverListener }: TooltipProps) => {
  return (
    <MuiTooltip title={title} disableHoverListener={disableHoverListener}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
