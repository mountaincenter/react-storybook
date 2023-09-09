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
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import {
  BaseIconsMappingType,
  SidebarIconsMappingType,
  InteractionIconsMappingType,
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
};

export const SidebarIconCombinations: SidebarIconsMappingType = {
  Home: { Icon: HomeIcon, OutlinedIcon: HomeOutlinedIcon, label: 'ホーム' },
  Explore: { Icon: SearchIcon, OutlinedIcon: SearchIcon, label: '話題を検索' },
  Notifications: {
    Icon: NotificationsIcon,
    OutlinedIcon: NotificationsOutlinedIcon,
    badgeContent: 3,
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

export const InteractionIconCombinations: InteractionIconsMappingType = {
  Like: { Icon: FavoriteIcon, OutlinedIcon: FavoriteBorderIcon, color: 'like' },
  Repost: { Icon: RepeatIcon, OutlinedIcon: RepeatIcon, color: 'repost' },
  Reply: {
    Icon: ModeCommentOutlinedIcon,
    OutlinedIcon: ModeCommentOutlinedIcon,
    color: 'other',
  },
  Bookmark: {
    Icon: BookmarkIcon,
    OutlinedIcon: BookmarkBorderIcon,
    color: 'other',
  },
};
