import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

export type TabBarItemProps = {
	iconName: string;
	IconComponent?: React.ComponentType<any>;
	size?: number;
	color?: string;
	focused?: boolean;
	label?: string;
};

export declare interface ButtonProps extends TouchableOpacityProps {
	title: string;
	bgVariant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'default';
	textVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'default';
	IconLeft?: React.ComponentType<any>;
	IconRight?: React.ComponentType<any>;
	className?: string;
}

export interface DashboardCardProps {
	onPress?: () => void;
	title: string;
	value: string | number;
	iconName: keyof typeof Ionicons.glyphMap;
	CTAIcon?: boolean;
	isLoading?: boolean;
}

export interface LocationState {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface CameraModalProps {
  visible: boolean;
  onClose: () => void;
}

export interface TooltipProps {
	title: string;
	description: string;
	buttonText: string;
	onButtonPress: () => void;
}

export interface ReportCardProps {
	id: string;
	onPress?: () => void;
	imageCid: ImageSourcePropType;
	userProfile: ImageSourcePropType;
	username: string;
	timestamp: string;
	title: string;
	category?: string;
	description?: string;
	location?: string;
	comments?: ReportComments[];
	confidence?: string;
	presentage_confidence?: string;
	status?: string;
	rewardGiven?: number;
}

export interface ReportComments {
  id: string;
	userId: string;
  userProfile: ImageSourcePropType;
  username: string;
  message: string;
	rating?: number;
	date: Date;
	comment: string;
}
export interface UserData{
  pictureCid: string | null;
  username: string;
  email: string;
}
export interface ProfileContextProps{
  profile: UserData | null;
  setProfile: (data: UserData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
export type SettingRowProps = {
  icon: 'search' | 'repeat' | 'anchor' | 'bold' | 'link' | 'at' | 'sort' | 'map' | 'filter' | 'user-o' | 'bell-o' | 'shield' | 'language' | 'image' | 'header' | 'forward' | 'retweet' | 'minus' | undefined;
  name: string;
  children?: ReactNode;
  onPress: () => void;
};
export type ProfileMenuItemProps = {
  onPress: () => void;
  icon: ReactNode;
  label: string;
  labelClassName?: string;
  rightIconColor?: string;
};
