import AfterLogin from "@/components/AfterLogin";
import Layout from "@/components/Layout";
import ProfilePicture from "@/components/ProfilePicture";
import { useProfile } from "@/context/ProfileContext";
import { getUserInfo, registerUser } from "@/lib/api";
import loadIdentity from "@/lib/loadIdentity";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { JSX, useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ValidationErrors {
  name?: string;
  email?: string;
}

export default function profileSetup(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [imageUri, setImageUri] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<ValidationErrors>({});
  const { setProfile } = useProfile();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const { pubKey, delegation } = await loadIdentity();
        if (!pubKey || !delegation) {
          console.error("Identity not loaded properly");
          return;
        }
            const formData = new FormData();
            formData.append("delegation", JSON.stringify(delegation));
            formData.append("identity", JSON.stringify(pubKey));
            const profileData = await getUserInfo({ body: formData });
            console.log("Profile data loaded:", profileData); 

        if (profileData.length > 0) {
          const { pictureCid, username, email } = profileData[0] || {};
          setProfile({ pictureCid, username, email });
          router.push("/(tabs)/home");
          return;
        }
      } catch (error) {
        console.error("Failed to load profile data:", error);
      }
    };

    loadProfileData();
  }, []);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    setIsLoading(true);
    const { pubKey, delegation } = await loadIdentity();
    if (validateForm()) {
      await AsyncStorage.setItem(
        "profile-data",
        JSON.stringify({ pictureCid: imageUri, username: name, email })
      );
      const formData = new FormData();
      let fileExtension: string;
      let mimeType: string;
      let picture: any;

      if (imageUri) {
        fileExtension = imageUri.split(".").pop()?.toLowerCase() || "jpg";
        mimeType =
          fileExtension === "png"
            ? "image/png"
            : fileExtension === "gif"
            ? "image/gif"
            : fileExtension === "webp"
            ? "image/webp"
            : "image/jpeg";

        picture = {
          uri: imageUri,
          type: mimeType,
          name: `profile.${fileExtension}`,
        } as unknown as Blob;
      } else {
        picture = require("@/assets/images/profile/profil_gg.jpg");
      }

      formData.append("picture", picture);
      formData.append("username", name);
      formData.append("email", email);
      formData.append("delegation", JSON.stringify(delegation));
      formData.append("identity", JSON.stringify(pubKey));

      try {
        const response = await registerUser({ body: formData });
        console.log("Registration successful:", response);
        setProfile({ pictureCid: imageUri, username: name, email });

        Alert.alert("Success", "Profile setup completed successfully!", [
        { text: "OK" },
      ]);
      router.push("/(tabs)/home");
      } catch (error) {
        console.error("Registration failed:", error);
        Alert.alert("Error", "Failed to register user. Please try again.");
        return;
      }finally {
        setIsLoading(false);
      }
    }
  };

  const handleNameChange = (text: string): void => {
    setName(text);
    // Clear name error when user starts typing
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (text: string): void => {
    setEmail(text);
    // Clear email error when user starts typing
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  return (
    <Layout disableHeader={true}>
      <AfterLogin />
      <SafeAreaView className="px-4">
        <Text className="font-bold text-4xl mb-2">Profile Setup</Text>
        <View className="items-center mt-10 mb-6">
          <ProfilePicture source={imageUri} externalSetUri={setImageUri} />
        </View>

        <View className="space-y-4">
          <View className="mb-5">
            <Text className="text-base font-medium mb-1">
              Name<Text className="text-red-500">*</Text>
            </Text>
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              placeholder="Enter your name"
              className={`border rounded-xl px-4 py-3 text-base bg-white ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <Text className="text-red-500 text-sm mt-1">{errors.name}</Text>
            )}
          </View>

          <View>
            <Text className="text-base font-medium mb-1">
              Email <Text className="text-red-500">*</Text>
            </Text>
            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              className={`border rounded-xl px-4 py-3 text-base bg-white ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
            )}
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-green-400 mt-8 rounded-xl py-3 items-center"
        >
          <Text className={`text-white font-semibold text-base`}>
            {isLoading ? "Loading..." : "Submit"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Layout>
  );
}
