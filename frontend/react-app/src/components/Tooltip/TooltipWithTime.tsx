import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
// import { Tooltip } from '@mui/material';
import Tooltip from './Tooltip';
import { Typography } from '@mui/material';

interface TooltipTimeProps {
  createdAt: Date;
}

const TooltipTime = ({ createdAt }: TooltipTimeProps) => {
  const time = format(new Date(createdAt), 'a H:mm・yyyy年MM月dd日', {
    locale: ja,
  });
  console.log(typeof time);
  return (
    <Tooltip title={time}>
      <Typography
        color="textSecondary"
        variant="body2"
        component="span"
        sx={{ pl: 1 }}
      >
        {time}
      </Typography>
    </Tooltip>
  );
};

export default TooltipTime;
