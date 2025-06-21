import Layout from "@/components/Layout";
import ProfilePicture from "@/components/ProfilePicture";
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { JSX, useState } from "react";

interface ValidationErrors {
    name?: string;
    email?: string;
}

export default function profileSetup(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState<ValidationErrors>({});

    // Email validation regex
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

    const handleSubmit = (): void => {
        if (validateForm()) {
            // Form is valid, proceed with submission
            Alert.alert(
                "Success",
                "Profile setup completed successfully!",
                [{ text: "OK" }]
            );
            console.log("Name:", name);
            console.log("Email:", email);
        }
    };

    const handleNameChange = (text: string): void => {
        setName(text);
        // Clear name error when user starts typing
        if (errors.name) {
            setErrors(prev => ({ ...prev, name: undefined }));
        }
    };

    const handleEmailChange = (text: string): void => {
        setEmail(text);
        // Clear email error when user starts typing
        if (errors.email) {
            setErrors(prev => ({ ...prev, email: undefined }));
        }
    };

    return (
        <Layout>
            <SafeAreaView className="px-4">
                <Text className="font-bold text-4xl mb-2">Profile Setup</Text>

                <View className="items-center mt-10 mb-6">
                    <ProfilePicture />
                </View>

                <View className="space-y-4">
                    <View className="mb-5">
                        <Text className="text-base font-medium mb-1">Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={handleNameChange}
                            placeholder="Enter your name"
                            className={`border rounded-xl px-4 py-3 text-base bg-white ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.name && (
                            <Text className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </Text>
                        )}
                    </View>

                    <View>
                        <Text className="text-base font-medium mb-1">Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={handleEmailChange}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            className={`border rounded-xl px-4 py-3 text-base bg-white ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.email && (
                            <Text className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </Text>
                        )}
                    </View>
                </View>

                {/* Submit Button */}
                <TouchableOpacity 
                    onPress={handleSubmit}
                    className="bg-green-400 mt-8 rounded-xl py-3 items-center"
                >
                    <Text className="text-white font-semibold text-base">Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Layout>
    );
}