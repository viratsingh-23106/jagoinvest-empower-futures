import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const focusAreas = [
    {
      icon: BookOpen,
      title: "Investor Education and Financial Literacy",
      description: "Comprehensive workshops and training programs that empower individuals with essential financial knowledge for smart investment decisions."
    },
    {
      icon: TrendingUp,
      title: "Community Financial Awareness Campaigns",
      description: "Grassroot initiatives that reach every corner of society to promote responsible investing and build financial wellness at the community level."
    },
    {
      icon: Shield,
      title: "Investor Protection and Grievance Support",
      description: "A robust support system providing guidance and assistance to help investors navigate financial challenges and resolve investment-related disputes."
    },
    {
      icon: Users,
      title: "Institutional Capacity Building",
      description: "Collaborative training programs for organizations, educational institutions, and community leaders to amplify our reach and create lasting impact."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Investors Educated" },
    { number: "500+", label: "Workshops Conducted" },
    { number: "25+", label: "States Covered" },
    { number: "100+", label: "Partner Organizations" }
  ];

  const partners = [
    {
      name: "MHRD Government of India",
      logo: "/lovable-uploads/16f0b0c5-68cf-48ee-a7de-e65c4256abd1.png"
    },
    {
      name: "Skill India",
      logo: "/lovable-uploads/ce7d6435-e608-443b-a9a4-cc4d26392153.png"
    },
    {
      name: "MSME Government of India",
      logo: "/lovable-uploads/fdb6a7a4-04e4-4f47-8ebc-9d369f09cb2d.png"
    },
    {
      name: "NSE",
      logo: "/lovable-uploads/2371e770-41e8-4965-990e-74875e475506.png"
    },
    {
      name: "SEBI",
      logo: "/lovable-uploads/289fdf1d-337b-420e-9caa-f741ea2fa762.png"
    },
    {
      name: "ISO 9001",
      logo: "/lovable-uploads/6debc283-3c54-4eb9-825b-cd58cd421eff.png"
    },
    {
      name: "IAF",
      logo: "/lovable-uploads/eb8c9af8-71ee-4550-95fe-3c5e06ecff67.png"
    }
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
                  Welcome to <span className="text-yellow-400">Jago Investor</span> Jago Forum
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                    POWERED BY SEBI
                  </span>
                </div>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Empowering Investors | Promoting Transparency | Securing Futures
                </p>
              </div>
              
              <p className="text-lg text-blue-50 leading-relaxed">
                Jago Investor Jago Forum is a dedicated platform for investor education, 
                awareness, and welfare. In an increasingly complex financial world, we stand as a guiding 
                light for individuals, businesses, and organizations seeking reliable investment knowledge and protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link to="/about">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                  <Link to="/join-us">Get Involved</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Community financial education workshop" 
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
              Through structured programs, grassroot campaigns, and community engagement, we aim to build 
              an informed investment culture that empowers citizens and safeguards their financial interests.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration in financial education planning" 
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

      {/* Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations and government bodies to strengthen investor education and protection across India.
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-4">
                      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-32 flex items-center justify-center group">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
                <Link to="/join-us">Join Our Forum</Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold border-2 border-white hover:border-blue-200">
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
