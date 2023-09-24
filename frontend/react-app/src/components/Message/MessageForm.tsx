import { useState } from 'react';
import { Grid, TextField, Box } from '@mui/material';
import MessageSendButton from '../Button/MessageSendButton';

import { useMessage } from '../../hooks/message/useMessage';

interface MessageFormProps {
  publicId: string;
}

const MessageForm: React.FC<MessageFormProps> = ({ publicId }) => {
  const { messageMutation } = useMessage(publicId);
  const [body, setBody] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    messageMutation.mutate(body);
    setBody('');
  };

  return (
    <>
      <Grid container justifyContent="center" sx={{ mt: '2rem' }}>
        <Box
          component="form"
          display="flex"
          alignItems="center"
          sx={{ padding: '2px 4px' }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            multiline
            sx={{ width: '100%' }}
            value={body}
            onChange={handleInputChange}
          />
          <MessageSendButton />
        </Box>
      </Grid>
    </>
  );
};

export default MessageForm;
