import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DashboardCardProps } from '@/lib/types';

export default function DashboardCard({ title, value, iconName, onPress, CTAIcon }: DashboardCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
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
        <View className='w-full flex flex-row justify-between items-center'>
          <Text className="text-md text-primary-700/80 font-Medium">{value}</Text>
          {CTAIcon === true && <Ionicons name="chevron-forward-outline" size={16} color="#4CAF50" />}
        </View>
      </View>
    </TouchableOpacity>
  );
}
