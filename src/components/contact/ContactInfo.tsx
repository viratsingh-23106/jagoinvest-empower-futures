
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "Financial District, Connaught Place\nNew Delhi - 110001, India",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 11 4567 8900\n+91 98765 43210",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@jagoinvesterjagoforum.org\nsupport@jagoinvesterjagoforum.org",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday to Saturday\n10:00 AM – 6:00 PM",
      color: "text-orange-600"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the one that works best for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md`}>
                    <Icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">{info.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
