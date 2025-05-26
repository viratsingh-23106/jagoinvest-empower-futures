
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Globe, 
  MessageCircle, 
  Heart,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    availability: "",
    experience: "",
    motivation: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you within 48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      skills: "",
      availability: "",
      experience: "",
      motivation: ""
    });
  };

  const volunteerRoles = [
    {
      icon: Users,
      title: "Conduct Local Awareness Drives",
      description: "Lead community workshops and educational sessions in your area",
      commitment: "2-4 hours per month"
    },
    {
      icon: Calendar,
      title: "Assist in Organizing Events",
      description: "Help plan and execute workshops, seminars, and awareness campaigns",
      commitment: "4-6 hours per month"
    },
    {
      icon: Globe,
      title: "Translate Educational Material",
      description: "Help us create content in regional languages for better reach",
      commitment: "2-3 hours per week"
    },
    {
      icon: MessageCircle,
      title: "Provide Grassroots Feedback",
      description: "Share insights from communities to strengthen our programs",
      commitment: "1-2 hours per month"
    }
  ];

  const benefits = [
    "Gain valuable experience in financial education and community development",
    "Network with like-minded individuals and industry professionals",
    "Receive official certification for your volunteer work",
    "Access to exclusive training programs and workshops",
    "Opportunity to make a real difference in people's financial lives",
    "Flexible commitment based on your availability"
  ];

  const requirements = [
    "Passion for financial literacy and community service",
    "Basic understanding of financial concepts (training provided)",
    "Good communication skills in local language",
    "Commitment to our values of transparency and integrity",
    "Minimum 18 years of age",
    "Available for at least 2 hours per month"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Become a Volunteer
              </h1>
              <p className="text-xl text-blue-100">
                Be the Voice of Financial Awareness
              </p>
              <p className="text-lg text-blue-50 leading-relaxed">
                Do you want to make a difference in people's financial lives? Join us as a volunteer 
                and become a part of our mission to promote ethical investing and financial education.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Volunteers working together" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">As a Volunteer, You Can:</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various volunteer opportunities that match your skills, interests, and availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{role.title}</CardTitle>
                        <p className="text-sm text-blue-600 font-medium">Time: {role.commitment}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{role.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Volunteer */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who Can Volunteer?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a student, professional, or retired individual, your time and skills 
              can help create financially empowered communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We're Looking For</h3>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Gain</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to start your volunteer journey with us.
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Volunteer Application Form</CardTitle>
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
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="City, State"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills & Expertise</Label>
                  <Input
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g., Public speaking, Translation, Finance background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    placeholder="e.g., Weekends, 2 hours per week"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any previous volunteer or community work experience"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    placeholder="Share your motivation and how you'd like to contribute"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your time and skills can transform lives. Join thousands of volunteers who are 
              already making a positive impact in their communities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
