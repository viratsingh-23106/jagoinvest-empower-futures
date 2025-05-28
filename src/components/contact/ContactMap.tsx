
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { officeLocation, getFullAddress } from "@/config/officeLocation";
import AddressDisplay from "@/components/common/AddressDisplay";

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map using configuration
    const map = L.map(mapRef.current).setView([
      officeLocation.coordinates.lat, 
      officeLocation.coordinates.lng
    ], officeLocation.mapSettings.zoom);

    // Add tiles using configuration
    L.tileLayer(officeLocation.mapSettings.tileLayer, {
      attribution: officeLocation.mapSettings.attribution
    }).addTo(map);

    // Add marker for the office location
    const marker = L.marker([
      officeLocation.coordinates.lat, 
      officeLocation.coordinates.lng
    ]).addTo(map);
    
    marker.bindPopup(`
      <div class="text-center">
        <strong>${officeLocation.organizationName}</strong><br>
        ${getFullAddress(officeLocation)}
      </div>
    `);

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-xl text-gray-600">
            Located along Raibareli Road in the Telibagh area of Lucknow, we're easily accessible by public transport.
          </p>
        </div>
        
        <div className="bg-gray-200 rounded-xl h-96 overflow-hidden shadow-lg">
          <div ref={mapRef} className="w-full h-full" />
        </div>
        
        <div className="mt-6 text-center">
          <AddressDisplay variant="full" className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
