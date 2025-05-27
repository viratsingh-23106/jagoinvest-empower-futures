import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe,
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendContactMessage, ContactFormData } from "@/utils/emailService";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactMessage(formData);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: ""
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const departments = [
    "General Inquiry",
    "Volunteer Registration",
    "Partnership Request",
    "Grievance Support",
    "Media & Press",
    "Training & Workshops",
    "Research & Publications",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Let's Connect</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions or want to work with us? We're here to assist you in your journey 
              towards financial empowerment and investor education.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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

          {/* Quick Contact Options */}
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

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center space-x-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <span>Contact Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Department</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => handleSelectChange("category", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept, index) => (
                          <SelectItem key={index} value={dept.toLowerCase().replace(/ /g, "-")}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief subject of your message"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
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

      {/* Additional Info */}
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

      <Footer />
    </div>
  );
};

export default Contact;
