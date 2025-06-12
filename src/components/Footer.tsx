
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Jago Investor Jago Forum Logo" 
                className="h-10 w-10 object-contain bg-white rounded p-1"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Jago Investor Jago Forum</span>
                <span className="text-sm text-gray-400">Empowering Investors</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A dedicated forum for investor education, awareness, and welfare. 
              Building an informed investment culture that empowers citizens and safeguards their financial interests.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/works" className="text-gray-400 hover:text-white transition-colors">Our Workshops</Link></li>
              <li><Link to="/rep-eoi" className="text-gray-400 hover:text-white transition-colors">REP/EOI</Link></li>
              <li><Link to="/join-us" className="text-gray-400 hover:text-white transition-colors">Join Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">TF, 3rd Floor, Pearl Omaxe Tower, Netaji Subhash Place, New Delhi - 110034</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+91 8090193598</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">info@jagoinvestorjagoforum.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Jago Investor Jago Forum. All rights reserved. | Registered Investment Forum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
