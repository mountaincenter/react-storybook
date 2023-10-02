import { Typography } from '@mui/material';

interface CountTextProps {
  count: number;
  text: string;
  hoverColor: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const CountText = ({
  count,
  text,
  hoverColor,
  showCountType,
}: CountTextProps): JSX.Element | null => {
  if (count <= 0 || showCountType === 'onlyIcon') return null;

  let content;
  let colorStyle = 'text.secondary';

  if (showCountType === 'onlyCount') {
    content = (
      <>
        <strong>{count}</strong> 件の{text}
      </>
    );
  } else {
    content = count;
    colorStyle = hoverColor;
  }

  return (
    <Typography
      variant="body2"
      component="span"
      sx={{
        color: 'text.secondary',
        '&:hover': {
          color: colorStyle,
        },
      }}
    >
      {content}
    </Typography>
  );
};

export default CountText;
