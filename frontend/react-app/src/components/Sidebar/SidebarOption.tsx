import React from 'react';
import { useLocation } from 'react-router-dom';
import IconWithText from '../Icon/IconWithLabel/IconWithText'; // IconWithTextをインポート

interface SidebarOptionProps {
  link: string;
  text: string;
  Icon?: React.ElementType;
  OutlinedIcon: React.ElementType;
  onClick?: () => void;
  badgeContent?: number;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  link,
  text,
  Icon,
  OutlinedIcon,
  onClick,
  badgeContent,
}) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  // console.log('badgeContent', badgeContent);

  return (
    <IconWithText
      link={link}
      text={text}
      Icon={Icon}
      OutlinedIcon={OutlinedIcon}
      onClick={onClick}
      badgeContent={badgeContent}
      isActive={isActive}
    />
  );
};

export default SidebarOption;
