import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

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