import SidebarOption from './SidebarOption';
import { SidebarIconCombinations } from '../Icon/IconData';

const SidebarListItem = () => {
  return (
    <>
      {Object.entries(SidebarIconCombinations).map(([key, icons]) => (
        <SidebarOption
          key={key}
          link={`/${key.toLowerCase()}`}
          text={key}
          {...icons}
        />
      ))}
    </>
  );
};

export default SidebarListItem;
