import { TouchableOpacityProps } from "react-native";

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
    bgVariant?: "primary" | "secondary" | "outline" | "success" | "danger";
    textVariant?: "primary" | "secondary" | "success" | "danger" | "default";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
}