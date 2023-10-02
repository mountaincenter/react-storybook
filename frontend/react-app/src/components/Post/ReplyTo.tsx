import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // <- Corrected this import

interface ReplyToProps {
  parent: string;
}

const ReplyTo = ({ parent }: ReplyToProps) => {
  return (
    <>
      {parent && (
        <Typography variant="body2" color="textSecondary" component="span">
          返信先
          <Link to={`/${parent}`}>@{parent}</Link>
          さん
        </Typography>
      )}
    </>
  );
};
export default ReplyTo;
