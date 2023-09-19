import { Tab, Tabs } from '@mui/material';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import { useNavigate, useParams } from 'react-router-dom';
import { useFollowers } from '../../hooks/follow/useFollowers';

interface TabBarProps {
  type: 'followers' | 'following' | 'followers_your_follow' | undefined;
}

const TabBar = ({ type }: TabBarProps) => {
  const { currentUser } = useCurrentUser();
  const { username } = useParams();
  const { followers } = useFollowers(username ? username : '');
  const navigate = useNavigate();

  const hasFollowersYourFollow = Boolean(
    followers?.some((follower) => follower.followed)
  );

  if (username) {
    const activeTab = `/${username}/${type}/`;
    return (
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
        variant="fullWidth"
      >
        {currentUser?.username !== username && hasFollowersYourFollow && (
          <Tab
            label="知り合いのフォロワー"
            value={`/${username}/followers_your_follow/`}
          />
        )}

        <Tab label="フォロワー" value={`/${username}/followers/`} />
        <Tab label="フォロー中" value={`/${username}/following/`} />
      </Tabs>
    );
  }
};

export default TabBar;
