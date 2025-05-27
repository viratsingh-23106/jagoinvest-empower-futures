
import { MapPin } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-xl text-gray-600">
            Located in the heart of New Delhi, we're easily accessible by public transport.
          </p>
        </div>
        
        <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="h-12 w-12 text-gray-500 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Interactive Map</h3>
              <p className="text-gray-600">Map integration coming soon</p>
              <p className="text-sm text-gray-500 mt-2">
                Financial District, Connaught Place, New Delhi - 110001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
