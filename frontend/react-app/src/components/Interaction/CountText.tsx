import { Typography, useTheme } from '@mui/material';
import { type CustomColor, type ShowCountType } from '../../interfaces';

interface CountTextProps {
  count: number;
  text: string;
  isActive: boolean;
  interactionColorType?: CustomColor;
  showCountType?: ShowCountType;
}

const CountText = ({
  count,
  text,
  isActive,
  interactionColorType = 'default',
  showCountType,
}: CountTextProps): JSX.Element | null => {
  const theme = useTheme();
  const color = theme.palette[interactionColorType]?.main || 'text.secondary';

  if (count <= 0 || showCountType === 'onlyIcon') return null;

  let content;
  let textStyle; // スタイルオブジェクトを定義する

  if (showCountType === 'onlyCount') {
    content = (
      <>
        <strong>{count}</strong> 件の{text}
      </>
    );
    textStyle = {
      color: 'text.secondary',
      '&:hover': {
        color: 'text.secondary',
      },
    };
  } else {
    content = count;
    textStyle = {
      color: isActive ? color : 'text.secondary',
      '&:hover': {
        color: color,
      },
    };
  }

  return (
    <Typography variant="body2" component="span" sx={textStyle}>
      {content}
    </Typography>
  );
};

export default CountText;
