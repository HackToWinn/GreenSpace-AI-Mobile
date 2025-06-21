import AsyncStorage from "@react-native-async-storage/async-storage";
import loadIdentity from "./loadIdentity";

export default function checkAuth() {
    const identity = loadIdentity();
    const profileData = AsyncStorage.getItem("profile-data");
    if (!identity && !profileData) {
        return false;
    }
    return true;

}
