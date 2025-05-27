
import { Globe, Clock, MessageCircle } from "lucide-react";

const ContactAdditionalInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <Globe className="h-12 w-12 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-bold">Website</h3>
            <p className="text-blue-100">www.jagoinvesterjagoforum.org</p>
          </div>
          
          <div className="space-y-4">
            <Clock className="h-12 w-12 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-bold">Response Time</h3>
            <p className="text-blue-100">We respond within 24 hours</p>
          </div>
          
          <div className="space-y-4">
            <MessageCircle className="h-12 w-12 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-bold">Support</h3>
            <p className="text-blue-100">Multi-language support available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAdditionalInfo;
