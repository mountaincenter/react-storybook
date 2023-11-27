import { Typography } from '@mui/material';

interface CountTextProps {
  count: number;
  text: string;
  isActive: boolean;
  color: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const CountText = ({
  count,
  text,
  isActive,
  color,
  showCountType,
}: CountTextProps): JSX.Element | null => {
  if (count <= 0 || showCountType === 'onlyIcon') return null;

  let content;
  let textStyle; // スタイルオブジェクトを定義する

  if (showCountType === 'onlyCount') {
    content = (
      <>
        <strong>{count}</strong> 件の{text}
      </>
    );
    // isActive にかかわらず text.secondary を使用
    textStyle = {
      color: 'text.secondary',
      '&:hover': {
        color: 'text.secondary',
      },
    };
  } else {
    content = count;
    // isActive が true の場合は color を使用し、そうでない場合は text.secondary
    textStyle = {
      color: isActive ? color : 'text.secondary',
      '&:hover': {
        color: color,
      },
    };
  }

  return (
    <Typography
      variant="body2"
      component="span"
      sx={textStyle} // ここで textStyle を適用
    >
      {content}
    </Typography>
  );
};

export default CountText;
