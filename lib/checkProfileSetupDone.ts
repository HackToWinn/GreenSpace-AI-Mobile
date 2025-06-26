import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useSegments } from "expo-router";
import { useEffect, useRef } from "react";
import loadIdentity from "./loadIdentity";

export default function CheckProfileSetupDone() {
  const segments = useSegments();
  const hasNavigated = useRef(false);

  useEffect(() => {
    const check = async () => {
      const { pubKey, delegation } = await loadIdentity();
      if (hasNavigated.current) return;
      
      const profileData = await AsyncStorage.getItem("profile-data");
      if (pubKey && delegation && !profileData) {
        hasNavigated.current = true;
        router.push("/(auth)/profile-setup");
      } else if (pubKey && delegation && profileData && segments[0] === "(auth)") {
        hasNavigated.current = true;
        router.replace("/(tabs)/home");
      }
    };
    check();
  }, [segments]);

  return null;
}
