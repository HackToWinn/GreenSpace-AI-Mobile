import AsyncStorage from "@react-native-async-storage/async-storage";
import loadIdentity from "./loadIdentity";

export default async function checkAuth() {
    const {pubKey, delegation} = await loadIdentity();
    const profileData = await AsyncStorage.getItem("profile-data");
    if (pubKey && delegation && profileData) {
        return true;
    }
    return false;
}
