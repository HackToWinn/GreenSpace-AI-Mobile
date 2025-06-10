import { DashboardCardProps } from '@/lib/types';
import { router } from 'expo-router';

export const onboarding = [
  {
    id: 1,
    title: 'Welcome to GreenSpace',
    description: 'Explore smarter ways to care for the environment with the power of AI and technology.',
    image: null
  },
  {
    id: 2,
    title: 'Analyze Your Environment',
    description: 'Use your camera to capture and analyze aspects of your surroundings — air, waste, greenery, and more.',
    image: null
  },
  {
    id: 3,
    title: 'Store & Share with the World',
    description: 'Save environmental data securely to IPFS and contribute to global awareness.',
    image: null
  },
  {
    id: 4,
    title: 'Be Part of the Change',
    description: 'Join a growing community that takes action for a cleaner, greener planet.',
    image: null
  },
];

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

