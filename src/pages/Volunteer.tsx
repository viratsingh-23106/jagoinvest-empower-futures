import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, BookOpen, Megaphone, HandHeart, CheckCircle, ArrowRight, Clock, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendVolunteerApplication } from "@/utils/emailService";
const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    availability: "",
    motivation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
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
      await sendVolunteerApplication(formData);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering. Our team will contact you soon."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        skills: "",
        experience: "",
        availability: "",
        motivation: ""
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const volunteerRoles = [{
    icon: BookOpen,
    title: "Workshop Facilitator",
    description: "Conduct investor awareness workshops in communities and educational institutions.",
    requirements: ["Good communication skills", "Basic financial knowledge", "Weekend availability"]
  }, {
    icon: Megaphone,
    title: "Awareness Campaign Volunteer",
    description: "Support grassroots campaigns and help spread financial literacy awareness.",
    requirements: ["Social media skills", "Community outreach experience", "Flexible schedule"]
  }, {
    icon: Users,
    title: "Community Coordinator",
    description: "Organize local events and coordinate with community leaders for program implementation.",
    requirements: ["Leadership skills", "Local community connections", "Event management experience"]
  }, {
    icon: HandHeart,
    title: "Content Creator",
    description: "Develop educational materials, translate content, and create awareness resources.",
    requirements: ["Writing skills", "Design capabilities", "Language proficiency"]
  }];
  const impactStats = [{
    number: "10,000+",
    label: "People Educated",
    icon: Users
  }, {
    number: "500+",
    label: "Workshops Conducted",
    icon: BookOpen
  }, {
    number: "50+",
    label: "Communities Reached",
    icon: MapPin
  }, {
    number: "200+",
    label: "Active Volunteers",
    icon: Heart
  }];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Become a Volunteer</h1>
            <p className="text-xl text-green-100">Be the Voice of Financial Awareness</p>
            <p className="text-lg text-green-50 max-w-4xl mx-auto leading-relaxed">
              Do you want to make a difference in people's financial lives? Join us as a volunteer 
              and become a part of our mission to promote ethical investing and financial education.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How You Can Contribute</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a role that matches your skills and interests. Every contribution makes a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => {
            const Icon = role.icon;
            return <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{role.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{role.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Requirements:</h4>
                      <ul className="space-y-1">
                        {role.requirements.map((req, reqIndex) => <li key={reqIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain valuable experience while making a meaningful impact in your community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Skill development in financial education", "Network with like-minded individuals", "Flexible time commitment", "Training and certification opportunities", "Recognition and appreciation", "Make a real difference in communities"].map((benefit, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-900">{benefit}</span>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Volunteer Application</h2>
            <p className="text-xl text-gray-600">
              Ready to make a difference? Fill out the form below to join our team.
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required placeholder="City, State" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills and Expertise *</Label>
                  <Textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} required placeholder="Tell us about your relevant skills, expertise, and background" rows={3} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Textarea id="experience" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Share any previous volunteer or community service experience" rows={3} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select value={formData.availability} onValueChange={value => handleSelectChange("availability", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends Only</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="flexible">Flexible Schedule</SelectItem>
                      <SelectItem value="specific">Specific Days/Times</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why Do You Want to Volunteer? *</Label>
                  <Textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleInputChange} required placeholder="Tell us what motivates you to volunteer with Jago Invester Jago Forum" rows={4} />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              Whether you're a student, professional, or retired individual, your time and skills 
              can help create financially empowered communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-sky-300 hover:bg-sky-200 text-lg text-gray-700">
                <Clock className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Volunteer;