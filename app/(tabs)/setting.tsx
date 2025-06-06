import Layout from '@/components/Layout'; // Sesuaikan path jika perlu
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ReactNode, useState } from 'react';
import { Pressable, Switch, Text, TouchableOpacity, View } from 'react-native';

type SettingRowProps = {
  icon: 'search' | 'repeat' | 'anchor' | 'bold' | 'link' | 'at' | 'sort' | 'map' | 'filter' | 'user-o' | 'bell-o' | 'shield' | 'language' | 'image' | 'header' | 'forward' | 'retweet' | 'minus' | undefined;
  name: string;
  children?: ReactNode;
  onPress: () => void;
};

const SettingRow = ({ icon, name, children, onPress }: SettingRowProps) => (
  <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between p-4 border-b border-gray-300/50">
    <View className="flex-row items-center">
      <FontAwesome name={icon} size={20} color="#333" className="w-8" />
      <Text className="text-base text-gray-800 ml-4">{name}</Text>
    </View>
    {children}
  </TouchableOpacity>
);

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <Layout>
      <View className="mt-10">
        <Pressable className='flex-row gap-2'>
          <Link href={'/(tabs)/profile'}>
            <Ionicons name="arrow-back-outline" size={24} />
          </Link>
          <Text className="text-xl font-normal text-gray-800 mb-6 ">Settings</Text>
        </Pressable>
      </View>

      <View className="bg-white/50  rounded-xl overflow-hidden">
    

        <SettingRow icon="language" name="Language" onPress={() => alert('Navigate to Language')}>
          <FontAwesome name="chevron-right" size={16} color="gray" />
        </SettingRow>

        {/* Contoh dengan Toggle Switch */}
        <View className="flex-row items-center justify-between p-4 border-b-0">
          <View className="flex-row items-center">
            <FontAwesome name="moon-o" size={20} color="#333" className="w-8" />
            <Text className="text-base text-gray-800 ml-4">Dark Mode</Text>
          </View>
          <Switch trackColor={{ false: '#767577', true: '#4caf50' }} thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'} onValueChange={toggleSwitch} value={isDarkMode} />
        </View>
      </View>
    </Layout>
  );
}
