import { ProfileContextProps, UserData } from "@/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [profile, setProfile] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


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