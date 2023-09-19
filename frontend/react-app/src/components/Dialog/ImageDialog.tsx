import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/user/useUser';

const ImageDialog = () => {
  const { username, type } = useParams();
  const { user } = useUser(username ? username : '');

  const imageUrl = (() => {
    if (type === 'avatar') {
      return user?.avatar?.url || '';
    } else if (type === 'header_photo') {
      return user?.image?.url || '';
    }
    return '';
  })();

  return (
    <div>
      <img
        src={imageUrl}
        alt="UserContent"
        style={{
          maxWidth: type === 'avatar' ? '370px' : '100%',
          maxHeight: type === 'avatar' ? '370px' : 'auto',
          width: type === 'header_photo' ? '100%' : 'auto',
          height: type === 'header_photo' ? 'auto' : 'auto',
        }}
      />
    </div>
  );
};

export default ImageDialog;
