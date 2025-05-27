
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

    // Initialize map centered on Connaught Place, New Delhi
    const map = L.map(mapRef.current).setView([28.6315, 77.2167], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for the office location
    const marker = L.marker([28.6315, 77.2167]).addTo(map);
    marker.bindPopup(`
      <div class="text-center">
        <strong>Jago Invester Jago Forum</strong><br>
        Financial District, Connaught Place<br>
        New Delhi - 110001, India
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
            Located in the heart of New Delhi, we're easily accessible by public transport.
          </p>
        </div>
        
        <div className="bg-gray-200 rounded-xl h-96 overflow-hidden shadow-lg">
          <div ref={mapRef} className="w-full h-full" />
        </div>
        
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-sm">
              Financial District, Connaught Place, New Delhi - 110001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
