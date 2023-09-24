import MessageProfile from './MessageProfile';
import MessageFeed from './MessageFeed';
import MessageForm from './MessageForm';
import { useParams } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import { useMessages } from '../../hooks/message/useMessages';

const MessageDetails = () => {
  const { publicId } = useParams<{ publicId: string }>();
  const { messages } = useMessages(publicId ? publicId : '');
  const { currentUser } = useCurrentUser();
  return (
    <>
      {currentUser && messages && publicId && (
        <>
          <MessageProfile currentUser={currentUser} messages={messages} />
          <MessageFeed messages={messages} publicId={publicId} />
          <MessageForm publicId={publicId} />
        </>
      )}
    </>
  );
};

export default MessageDetails;
