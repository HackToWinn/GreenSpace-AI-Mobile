import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useSegments } from "expo-router";
import { useEffect, useRef } from "react";
import loadIdentity from "./loadIdentity";

export default function CheckProfileSetupDone() {
  const segments = useSegments();
  const hasNavigated = useRef(false);

  useEffect(() => {
    const check = async () => {
    if (hasNavigated.current) return; 
      const identity = await loadIdentity();
      const profileData = await AsyncStorage.getItem("profile-data");
        // console.log("CheckAuth identity:", identity);
      if (identity && !profileData) {
        hasNavigated.current = true;
        router.push("/(auth)/profile-setup");
      } else if (identity && profileData && segments[0] === "(auth)") {
        hasNavigated.current = true;
        router.replace("/(tabs)/home");
      }
    };

    check();
  }, [segments]);

  return null;
}
