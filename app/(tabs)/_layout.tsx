import { colors } from '@/lib/colors';
import { TabBarItemProps } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

const listTabs: TabBarItemProps[] = [
  {
    iconName: 'home-outline',
    label: 'Home',
    size: 26,
    IconComponent: Ionicons
  },
  {
    iconName: 'bar-chart-outline',
    label: 'Statistic',
    size: 26,
    IconComponent: Ionicons
  },
  {
    iconName: 'camera-outline',
    label: 'Camera',
    size: 26,
    IconComponent: Ionicons
  },
  {
    iconName: 'newspaper-outline',
    label: 'Report',
    size: 26,
    IconComponent: Ionicons
  },
  {
    iconName: 'person-outline',
    label: 'Profile',
    size: 26,
    IconComponent: Ionicons
  }
];

const TabBarItem = ({ iconName, IconComponent = Ionicons, size = 26, color, focused, label }: TabBarItemProps) => {
  const isCamera = iconName === 'camera-outline';

  return (
    <SafeAreaView className="items-center justify-center pt-1 w-20">
      {isCamera ? (
        <View className="w-16 h-16 rounded-full bg-primary-500 items-center justify-center -mt-6 shadow-lg shadow-black/20">
          <IconComponent name={iconName} size={28} color="white" />
        </View>
      ) : (
        <IconComponent name={iconName} size={size} color={color} />
      )}
      {!isCamera && (
        <Text
          className={`text-xs mt-1 font-Medium ${focused ? 'text-primary-600' : 'text-neutral-500'
            }`}
        >
          {label}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[600],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 100, borderTopWidth: 0, elevation: 0, paddingTop: 10, paddingHorizontal: 16, backgroundColor: colors.primary[50] },
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
