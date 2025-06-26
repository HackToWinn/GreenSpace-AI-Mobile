import Layout from "@/components/Layout";
import { ProfileMenuItem } from "@/components/ProfileMenuItem";
import ProfilePicture from "@/components/ProfilePicture";
import TooltipContent from "@/components/TooltipContent";
import WalletCardComponent from "@/components/WalletCardComponent";
import { useProfile } from "@/context/ProfileContext";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";

export default function Profile() {
  const router = useRouter();
  const [tooltipStep, setTooltipStep] = useState(1);
  const { profile, setProfile } = useProfile();
  // Handle logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem("profile-data");
    await AsyncStorage.removeItem("delegation");
    await AsyncStorage.removeItem("identity-key");

    setProfile(null);
    router.push("/(auth)/sign-in");
  };

  // Tooltip logic
  const tooltipVisible = tooltipStep === 1;

  return (
    <Layout>
      <Tooltip
        isVisible={tooltipVisible}
        placement="center"
        useReactNativeModal
        contentStyle={{ height: 184 }}
        content={
          tooltipVisible ? (
            <TooltipContent
              title="Welcome to the Profile Page"
              description="This is the profile page, where you can view your profile information and manage your ICP wallet & settings."
              buttonText="Got it"
              onButtonPress={() => setTooltipStep(0)}
            />
          ) : undefined // penting untuk TS/prop type!
        }
        onClose={() => setTooltipStep(0)}
      >
        <View />
      </Tooltip>

      <View className="flex-1 items-center mt-4">
        <ProfilePicture
          source={profile?.pictureCid ? profile.pictureCid : ""}
        />
        <Text className="text-2xl font-Bold text-gray-800 mb-2">
          {profile?.username || "Guest User"}
        </Text>
        <View className="flex flex-row justify-center items-center gap-x-1 mb-6">
          <Text className="text-sm font-SemiBold text-black">
            Email: {profile?.email || "Unknown"}
          </Text>
        </View>
        <WalletCardComponent />
        <View className="w-full">
          <ProfileMenuItem
            onPress={() => router.push("/setting")}
            icon={<SimpleLineIcons name="settings" size={24} color="gray" />}
            label="Settings"
          />
          <ProfileMenuItem
            onPress={() => router.push("/(tabs)/feedback")}
            icon={<MaterialIcons name="feedback" size={24} color="gray" />}
            label="FeedBack"
          />
          <ProfileMenuItem
            onPress={() => router.push("/(tabs)/faq")}
            icon={<SimpleLineIcons name="question" size={24} color="gray" />}
            label="Help & Support"
          />
          <ProfileMenuItem
            onPress={handleLogout}
            icon={<SimpleLineIcons name="logout" size={24} color="red" />}
            label="Logout"
            labelClassName="text-red-700"
            rightIconColor="red"
          />
        </View>
      </View>
    </Layout>
  );
}
