import "react-native-get-random-values";
import checkAuth from "@/lib/checkAuth";
import { router, Stack } from "expo-router";

const Layout = () => {
  checkAuth().then((isAuthenticated) => {
    if (!isAuthenticated) {
      router.push("/(auth)/onboarding");
    } else {
      router.push("/(tabs)/home");
    }
  });
  return (
    <Stack>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="profile-setup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
