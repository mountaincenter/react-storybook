import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ReplyToProps {
  parent: string | null;
}

const ReplyTo = ({ parent }: ReplyToProps) => {
  const navigate = useNavigate();
  return (
    <>
      {parent && (
        <Typography variant="body2" color="textSecondary" component="span">
          返信先
          <span onClick={() => navigate(`/${parent}`)}>@{parent}</span>
          さん
        </Typography>
      )}
    </>
  );
};
export default ReplyTo;
