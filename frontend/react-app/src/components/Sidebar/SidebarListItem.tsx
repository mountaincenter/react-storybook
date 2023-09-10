import SidebarOption from './SidebarOption';
import { SidebarIconCombinations } from '../Icon/IconData';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

const SidebarListItem = () => {
  const { currentUser } = useCurrentUser();

  return (
    <>
      {Object.entries(SidebarIconCombinations).map(([key, icons]) => {
        if (icons.isCurrentUser && !currentUser) {
          return null;
        }

        return (
          <SidebarOption
            key={key}
            link={
              key === 'Profile' && currentUser
                ? `/${currentUser.username}`
                : `/${key.toLowerCase()}`
            }
            text={icons.label}
            {...icons}
          />
        );
      })}
    </>
  );
};

export default SidebarListItem;
