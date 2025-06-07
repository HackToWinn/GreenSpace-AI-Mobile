import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DashboardCardProps } from '@/lib/types';

export default function DashboardCard({ title, value, iconName }: DashboardCardProps) {
  return (
    <View 
      className="p-4 bg-white rounded-2xl shadow-md shadow-neutral-400 flex flex-col justify-between mb-4"
      style={{ 
        flexBasis: '48%',
        height: 140,
        flexGrow: 0,
        flexShrink: 0
      }}>
      <Ionicons name={iconName} size={32} color="black" />
      <View>
        <Text className="text-xl font-Bold">{title}</Text>
        <Text className="text-md text-primary-700/80 font-Medium">{value}</Text>
      </View>
    </View>
  );
}
