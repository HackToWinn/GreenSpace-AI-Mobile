import { colors } from '@/lib/colors';
import { TabBarItemProps } from '@/lib/types';
import { FontAwesome6, Ionicons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

const listTabs: TabBarItemProps[] = [
  {
    iconName: 'home',
    label: 'Home',
    size: 26,
    IconComponent: Ionicons
  },
  {
    iconName: 'chart',
    label: 'Statistic',
    size: 26,
    IconComponent: SimpleLineIcons
  },
  {
    iconName: 'camera',
    label: 'Camera',
    size: 26,
    IconComponent: SimpleLineIcons
  },
  {
    iconName: 'history',
    label: 'Report',
    size: 26,
    IconComponent: Octicons
  },
  {
    iconName: 'user',
    label: 'Profile',
    size: 26,
    IconComponent: FontAwesome6
  }
];

const TabBarItem = ({ iconName, IconComponent = Ionicons, size = 26, color, focused, label }: TabBarItemProps) => (
  <SafeAreaView className="items-center justify-center pt-1 w-20">
    <IconComponent name={iconName} size={size} color={color} />
    <Text numberOfLines={2}>{label}</Text>
  </SafeAreaView>
);

export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[600],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 100, borderTopWidth: 0.5, paddingTop: 10, paddingHorizontal: 16 }
      }}>
      {listTabs.map((item: TabBarItemProps, index: number) => (
        <Tabs.Screen
          key={index}
          name={item.label?.toLocaleLowerCase()}
          options={{
            tabBarIcon: ({ color, focused }) => <TabBarItem iconName={item.iconName} IconComponent={item.IconComponent} color={color} focused={focused} size={item.size} label={item.label} />
          }}
        />
      ))}
      <Tabs.Screen
        name="setting"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
