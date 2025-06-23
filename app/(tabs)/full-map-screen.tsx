import { useCurrentLocation } from "@/hooks/useCurrentLocation";
import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { LeafletView } from "react-native-leaflet-view";

export default function FullMapScreen() {
  const { location, getMapRegion } = useCurrentLocation();
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);

  return (
    <>
      <View style={{ flex: 1 }}>
        {location && (
          <LeafletView
            renderLoading={() => (
              <ActivityIndicator size="large" color="green" />
            )}
            mapCenterPosition={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            zoom={16}
            zoomControl={true}
            attributionControl={false}
            mapMarkers={[
              {
                id: "current-location",
                position: {
                  lat: location.latitude,
                  lng: location.longitude,
                },
                icon: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
                size: [24, 24],
                iconAnchor: [16, 41],
                title: "Your Location",
              },
            ]}
            onMessageReceived={(message) => {
              if (message.event === "onMapMarkerClicked") {
                const markerId = message.payload?.mapMarkerID;
                if (markerId) {
                  setSelectedMarkerId(markerId);
                } else {
                  console.warn("No marker ID found in message payload");
                }
              }
            }}
            doDebug={false}
          />
        )}
      </View>
      {selectedMarkerId === "current-location" && (
        <View className="absolute bottom-6 left-4 right-4 bg-white rounded-xl shadow-md p-4 z-50">
          <Text className="font-Bold text-lg mb-2">You are here</Text>
          <Text className="text-gray-600">
            Latitude: {location?.latitude.toFixed(5)}
          </Text>
          <Text className="text-gray-600">
            Longitude: {location?.longitude.toFixed(5)}
          </Text>
          <TouchableOpacity
            className="mt-3 bg-primary-600 py-2 px-4 rounded-lg self-end"
            onPress={() => setSelectedMarkerId(null)}
          >
            <Text className="text-white">Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
