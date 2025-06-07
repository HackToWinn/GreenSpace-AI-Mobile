import { DashboardCardProps } from '@/lib/types';
import { router } from 'expo-router';

export const dashboardCards: DashboardCardProps[] = [
  {
    onPress: () => router.push('/(tabs)/report'),
    title: 'Total Reports',
    value: 150,
    iconName: 'newspaper-outline',
    CTAIcon: true,
  },
  {
    onPress: () => router.push('/(tabs)/report'),
    title: 'Reports This Week',
    value: 10,
    iconName: 'calendar-outline',
    CTAIcon: true,
  },
  {
    title: 'Most Reported Category',
    value: 'Air Pollution',
    iconName: 'people-outline',
  },
  {
    title: 'Unique Locations',
    value: 45,
    iconName: 'navigate-outline',
  },
];

