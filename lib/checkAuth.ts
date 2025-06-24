import { useProfile } from "@/context/ProfileContext";
import loadIdentity from "./loadIdentity";

export default async function checkAuth() {

    const {profile} =useProfile();
    const {pubKey, delegation} = await loadIdentity();
    const profileData = profile ;

    if (pubKey && delegation && profileData) {
        return true;
    }
    return false;
}
