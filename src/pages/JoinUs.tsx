
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Handshake,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    organizationType: "",
    location: "",
    website: "",
    description: "",
    partnershipType: "",
    previousWork: "",
    expectations: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Submitted!",
      description: "Thank you for your interest. Our team will review your application and get back to you soon.",
    });
    setFormData({
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      organizationType: "",
      location: "",
      website: "",
      description: "",
      partnershipType: "",
      previousWork: "",
      expectations: ""
    });
  };

  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Collaborating Partner",
      subtitle: "NGOs and Educational Institutions",
      description: "Work together on joint programs, share resources, and expand our collective impact in communities.",
      benefits: [
        "Joint program development and execution",
        "Resource sharing and knowledge exchange",
        "Expanded reach and community impact",
        "Collaborative funding opportunities"
      ]
    },
    {
      icon: Building,
      title: "Corporate Supporter",
      subtitle: "Through CSR Initiatives",
      description: "Partner with us through Corporate Social Responsibility programs to promote financial literacy.",
      benefits: [
        "Fulfill CSR obligations meaningfully",
        "Employee engagement opportunities",
        "Brand visibility in social impact",
        "Tax benefits and recognition"
      ]
    },
    {
      icon: BookOpen,
      title: "Resource Person/Trainer",
      subtitle: "Subject-matter Experts and Educators",
      description: "Share your expertise by conducting workshops and developing educational content.",
      benefits: [
        "Platform to share expertise",
        "Networking with industry professionals",
        "Contribution to meaningful cause",
        "Recognition as subject expert"
      ]
    },
    {
      icon: Users,
      title: "Knowledge Contributor",
      subtitle: "Researchers and Authors",
      description: "Contribute to our research initiatives and help develop comprehensive educational materials.",
      benefits: [
        "Research collaboration opportunities",
        "Publication and citation opportunities",
        "Access to diverse data and insights",
        "Academic and professional recognition"
      ]
    }
  ];

  const collaborationAreas = [
    "Financial Literacy Workshops",
    "Investor Awareness Campaigns",
    "Research and Publications",
    "Technology and Digital Platforms",
    "Community Outreach Programs",
    "Policy Advocacy and Reform",
    "Training and Capacity Building",
    "Fraud Prevention Initiatives"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Join the Movement</h1>
            <p className="text-xl text-blue-100">Partner with Jago Invester Jago Forum</p>
            <p className="text-lg text-blue-50 max-w-4xl mx-auto leading-relaxed">
              Are you an NGO, institution, corporate house, or individual passionate about financial education 
              and welfare? Partner with us to extend our impact and reach new frontiers in investor empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">You Can Join Us As:</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple partnership opportunities designed to leverage your unique strengths and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                        <p className="text-sm text-blue-600 font-medium">{type.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{type.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Benefits:</h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Areas of Collaboration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple domains where we can work together to create meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Partnership Application</h2>
            <p className="text-xl text-gray-600">
              Tell us about your organization and how we can work together.
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Let's Build Something Together</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name *</Label>
                    <Input
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter organization name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter contact person name"
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
                      placeholder="Enter email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organizationType">Organization Type *</Label>
                    <Select value={formData.organizationType} onValueChange={(value) => handleSelectChange("organizationType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                        <SelectItem value="educational">Educational Institution</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="government">Government Body</SelectItem>
                        <SelectItem value="individual">Individual Expert</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Organization Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your organization and its mission"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Preferred Partnership Type *</Label>
                  <Select value={formData.partnershipType} onValueChange={(value) => handleSelectChange("partnershipType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaborating">Collaborating Partner</SelectItem>
                      <SelectItem value="corporate">Corporate Supporter</SelectItem>
                      <SelectItem value="trainer">Resource Person/Trainer</SelectItem>
                      <SelectItem value="knowledge">Knowledge Contributor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="previousWork">Previous Work in Financial Literacy</Label>
                  <Textarea
                    id="previousWork"
                    name="previousWork"
                    value={formData.previousWork}
                    onChange={handleInputChange}
                    placeholder="Describe any previous work or experience in financial education or related fields"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="expectations">Partnership Expectations *</Label>
                  <Textarea
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleInputChange}
                    required
                    placeholder="What do you hope to achieve through this partnership? How can we work together?"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Submit Partnership Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Together, We Can Build an Ecosystem</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Together, we can build an ecosystem of financially aware and empowered citizens. 
              Join us in creating a future where everyone has access to reliable financial education 
              and protection.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
