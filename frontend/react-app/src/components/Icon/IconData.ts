import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MessageIcon from '@mui/icons-material/Message';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';

import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  BaseIconsMappingType,
  SidebarIconsMappingType,
  NotificationIconsMappingType,
  NotificationIconType,
} from '../../interfaces';

export const BaseIcons: BaseIconsMappingType = {
  HomeIcon,
  HomeOutlinedIcon,
  PersonIcon,
  PersonOutlinedIcon,
  NotificationsIcon,
  NotificationsOutlinedIcon,
  MessageIcon,
  MessageOutlinedIcon,
  BookmarkIcon,
  BookmarkBorderIcon,
  SearchIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  RepeatIcon,
  ModeCommentOutlinedIcon,
  AddIcon,
  CancelIcon,
  InsertPhotoOutlinedIcon,
  ArrowBackIcon,
};

export const SidebarIconCombinations: SidebarIconsMappingType = {
  Home: { Icon: HomeIcon, OutlinedIcon: HomeOutlinedIcon, label: 'ホーム' },
  Explore: { Icon: SearchIcon, OutlinedIcon: SearchIcon, label: '話題を検索' },
  Notifications: {
    Icon: NotificationsIcon,
    OutlinedIcon: NotificationsOutlinedIcon,
    label: '通知',
    isCurrentUser: true,
  },
  Messages: {
    Icon: MessageIcon,
    OutlinedIcon: MessageOutlinedIcon,
    label: 'メッセージ',
    isCurrentUser: true,
  },
  Bookmarks: {
    Icon: BookmarkIcon,
    OutlinedIcon: BookmarkBorderIcon,
    label: 'ブックマーク',
    isCurrentUser: true,
  },
  Profile: {
    Icon: PersonIcon,
    OutlinedIcon: PersonOutlinedIcon,
    label: 'プロフィール',
    isCurrentUser: true,
  },
};

const commonRepostConfig: NotificationIconType = {
  Icon: RepeatIcon,
  color: 'repost',
};

export const NotificationIconCombinations: NotificationIconsMappingType = {
  message: { Icon: MessageIcon, color: 'default' },
  follow: { Icon: PersonIcon, color: 'default' },
  like: { Icon: FavoriteIcon, color: 'like' },
  mention: { Icon: AlternateEmailIcon, color: 'default' },
  reply: { Icon: ReplyIcon, color: 'default' },
  repost: { ...commonRepostConfig },
  quote_repost: { ...commonRepostConfig },
};
