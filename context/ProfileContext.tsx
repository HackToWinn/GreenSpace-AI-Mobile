import { ProfileContextProps, UserData } from "@/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [profile, setProfile] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadProfile = async () => {
            setIsLoading(true);
            try {
                const storedProfile = await AsyncStorage.getItem("profile-data");
                if (storedProfile) {
                    setProfile(JSON.parse(storedProfile));
                } else {
                    setProfile({ pictureCid: null, username: "", email: "" });
                }           
            } catch (error) {
                console.error("Failed to load profile data:", error);
                setProfile({ pictureCid: null, username: "", email: "" });
            } finally {
                setIsLoading(false);
            }
        };
        loadProfile();
    }, []);

    return (
        <ProfileContext.Provider  value={{profile, setProfile, isLoading, setIsLoading} as ProfileContextProps}>
            {children}
        </ProfileContext.Provider>
    );
}
export function useProfile() {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
}