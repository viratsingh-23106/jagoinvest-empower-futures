
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Shield, 
  TrendingUp, 
  Target, 
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const focusAreas = [
    {
      icon: BookOpen,
      title: "Investor Education and Literacy",
      description: "Comprehensive financial education programs to empower informed decision-making."
    },
    {
      icon: TrendingUp,
      title: "Financial Awareness Campaigns",
      description: "Grassroots campaigns to promote responsible investing and financial wellness."
    },
    {
      icon: Shield,
      title: "Grievance Support and Protection",
      description: "Dedicated support system to help investors resolve financial concerns and disputes."
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Training programs for NGOs and community leaders to expand our outreach."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Investors Educated" },
    { number: "500+", label: "Workshops Conducted" },
    { number: "25+", label: "States Covered" },
    { number: "100+", label: "Partner Organizations" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Welcome to <span className="text-yellow-400">Jago Invester</span> Jago Forum
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Empowering Investors | Promoting Transparency | Securing Futures
                </p>
              </div>
              
              <p className="text-lg text-blue-50 leading-relaxed">
                Jago Invester Jago Forum is a non-governmental organization dedicated to investor education, 
                awareness, and welfare. In an increasingly complex financial world, we stand as a guiding 
                light for individuals, businesses, and organizations seeking reliable investment knowledge and protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link to="/about">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link to="/volunteer">Get Involved</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Financial growth and education" 
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Through structured programs, grassroots campaigns, and community engagement, we aim to build 
              an informed investment culture that empowers citizens and safeguards their financial interests.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community engagement and education" 
                className="rounded-xl shadow-lg max-w-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We concentrate our efforts on key areas that make the biggest impact on investor welfare and financial literacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Together, let's create a secure and informed investing environment
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our mission to build financially empowered communities across India. 
              Your participation can make a real difference in someone's financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/join-us">Partner with Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
