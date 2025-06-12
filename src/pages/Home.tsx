
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
      logo: "/lovable-uploads/mhrd-logo.png"
    },
    {
      name: "Skill India", 
      logo: "/lovable-uploads/skill-india-logo-png_seeklogo.com.png"
    },
    {
      name: "MSME Government of India",
      logo: "/lovable-uploads/ministry-of-micro-small-and-medium-enterprises.png"
    },
    {
      name: "NSE",
      logo: "/lovable-uploads/national-stock-exchange-logo.png"
    },
    {
      name: "SEBI",
      logo: "/lovable-uploads/sebi-logo-png_seeklogo.com.png"
    },
    {
      name: "ISO 9001",
      logo: "/lovable-uploads/iso-9001-logo-png_seeklogo.com.png"
    },
    {
      name: "IAF", 
      logo: "/lovable-uploads/iaf-recognition-arrangement-logo.png"
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
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                Trusted Partnerships
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Esteemed</span> Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We collaborate with leading organizations and government bodies to strengthen investor education and protection across India, building a robust ecosystem of financial empowerment.
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
                  delay: 2500,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                        <CardContent className="p-8">
                          <div className="h-24 flex items-center justify-center">
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="max-h-16 max-w-full object-contain filter brightness-75 contrast-125 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
                              onError={(e) => {
                                console.log(`Failed to load image: ${partner.logo}`);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                              {partner.name}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300" />
            </Carousel>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Officially recognized and certified partnerships
              </span>
            </div>
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
