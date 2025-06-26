import { Ed25519KeyIdentity } from "@dfinity/identity";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";
import { Linking } from "react-native";
import CustomButton from "./CustomButton";

export async function goToLogin() {
  const sessionIdentity = Ed25519KeyIdentity.generate();
  await AsyncStorage.setItem(
    "identity-key",
    JSON.stringify(sessionIdentity.toJSON()),
  );
  const publicKeyDer = sessionIdentity.getPublicKey().toDer();
  const publicKeyHex = Buffer.from(publicKeyDer).toString("hex");
  const scheme =
    process.env.EXPO_PUBLIC_SCHEME_URL || "greenspace://(auth)/profile-setup";
  const url =
    process.env.EXPO_PUBLIC_LOGIN_URL ||
    "https://greenspace.hacktowin.systems/login";

  return Linking.openURL(`${url}?sessionKey=${publicKeyHex}&scheme=${scheme}`);
}

export default function LoginButton() {
  return (
    <CustomButton
      onPress={goToLogin}
      title={"Sign in with Internet Identity"}
      bgVariant={"primary"}
      textVariant={"secondary"}
      IconLeft={() => (
        <Ionicons name="log-in" size={22} color={"white"} className="mr-2" />
      )}
      className="mb-4"
    />
  );
}
