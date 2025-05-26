
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Shield, 
  AlertTriangle, 
  Handshake, 
  Users, 
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";

const Works = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Investor Awareness Workshops",
      description: "Comprehensive financial literacy programs conducted in collaboration with NGOs, schools, and local bodies.",
      impact: "Reached 10,000+ participants across 25 states",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "Community Outreach", "Workshops"]
    },
    {
      icon: Shield,
      title: "Financial Grievance Redressal Support",
      description: "Dedicated support system helping investors understand and resolve their financial concerns and disputes.",
      impact: "Assisted 2,500+ investors with grievance resolution",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Support", "Legal Aid", "Resolution"]
    },
    {
      icon: AlertTriangle,
      title: "Anti-Fraud Awareness Campaigns",
      description: "Community outreach programs to warn and educate against high-risk or misleading investment offers.",
      impact: "Prevented potential losses worth ₹50+ crores",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Fraud Prevention", "Awareness", "Safety"]
    },
    {
      icon: Handshake,
      title: "Institutional Collaborations",
      description: "Strategic partnerships with regulators and financial firms to expand the scope and reach of our programs.",
      impact: "Partnered with 100+ organizations",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Partnership", "Collaboration", "Growth"]
    }
  ];

  const impactStats = [
    { icon: Users, number: "10,000+", label: "Lives Impacted" },
    { icon: MapPin, number: "25+", label: "States Covered" },
    { icon: Calendar, number: "500+", label: "Events Organized" },
    { icon: TrendingUp, number: "₹50Cr+", label: "Losses Prevented" }
  ];

  const recentProjects = [
    {
      title: "Rural Financial Literacy Drive",
      location: "Uttar Pradesh & Bihar",
      date: "January 2024",
      participants: "2,000+ farmers and rural entrepreneurs",
      description: "Focused on agricultural investment schemes and rural banking awareness."
    },
    {
      title: "Youth Investment Awareness Program",
      location: "Delhi & NCR",
      date: "March 2024",
      participants: "1,500+ college students",
      description: "Introduction to mutual funds, SIPs, and digital investment platforms."
    },
    {
      title: "Senior Citizen Financial Security Workshop",
      location: "Mumbai & Pune",
      date: "May 2024",
      participants: "800+ senior citizens",
      description: "Focus on pension schemes, health insurance, and fraud prevention."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Our Key Initiatives and Impact</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              At Jago Invester Jago Forum, we believe that knowledge is the first line of defense 
              against financial exploitation. Our works focus on practical education, awareness creation, 
              and enabling access to trustworthy investment practices.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Highlights of Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting impact in financial literacy and investor protection.
            </p>
          </div>
          
          <div className="space-y-16">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{initiative.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold">Impact: {initiative.impact}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {initiative.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-green-100 text-green-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img 
                      src={initiative.image} 
                      alt={initiative.title} 
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest initiatives across different regions and demographics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{project.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium text-sm">
                      Participants: {project.participants}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pride Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Pride</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We take pride in having reached thousands of investors across rural and urban India 
              with life-changing financial education. Every workshop, every campaign, and every 
              individual we've helped represents a step towards a more financially secure nation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Works;
