import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
  CheckCircle,
  Sparkles
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
      logo: "/lovable-uploads/skill-india-logo-png_seeklogo-408074.png"
    },
    {
      name: "MSME Government of India",
      logo: "/lovable-uploads/ministry-of-micro-small-and-medium-enterprises-logo-png_seeklogo-524483.png"
    },
    {
      name: "NSE",
      logo: "/lovable-uploads/national-stock-exchange-of-india-nse-vector-logo.png"
    },
    {
      name: "SEBI",
      logo: "/lovable-uploads/sebi-logo-png_seeklogo-305382.png"
    },
    {
      name: "ISO 9001",
      logo: "/lovable-uploads/iso-9001-logo-png_seeklogo-171579.png"
    },
    {
      name: "IAF", 
      logo: "/lovable-uploads/iaf-recognition-arrangement-logo-png_seeklogo-355644.png"
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

      {/* Enhanced Our Partners Section with improved elegance and professionalism */}
      <section className="py-32 bg-gradient-to-b from-slate-50/50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500"></div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold tracking-[0.2em] uppercase">
                Trusted Partnerships
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Affiliation
              <span className="relative mx-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">&</span>
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-pulse" />
              </span> 
              Partners
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              We collaborate with leading organizations and government bodies to strengthen investor education 
              and protection across India, building a robust ecosystem of financial empowerment.
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
                  delay: 3500,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-2">
                      <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-3 hover:border-blue-300/50 relative overflow-hidden">
                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/20 transition-all duration-500"></div>
                        
                        <CardContent className="p-8 h-52 flex flex-col relative z-10">
                          <div className="flex-1 flex items-center justify-center mb-4">
                            <div className="w-full h-36 bg-white/90 rounded-xl border border-gray-100/80 p-6 flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-md transition-all duration-300">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain filter brightness-100 contrast-100 group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                                style={{
                                  maxWidth: '150px',
                                  maxHeight: '90px',
                                  width: 'auto',
                                  height: 'auto'
                                }}
                                onError={(e) => {
                                  console.log(`Failed to load image: ${partner.logo}`);
                                  const target = e.currentTarget;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = `
                                    <div class="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium">
                                      ${partner.name}
                                    </div>
                                  `;
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Enhanced partner name on hover */}
                          <div className="absolute inset-x-0 bottom-6 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <div className="text-center bg-white/95 backdrop-blur-md rounded-xl py-3 px-4 shadow-lg border border-gray-200/50">
                              <p className="text-sm font-bold text-gray-800 leading-tight tracking-wide">
                                {partner.name}
                              </p>
                            </div>
                          </div>
                          
                          {/* Decorative corner accent */}
                          <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Enhanced navigation buttons */}
              <CarouselPrevious className="hidden md:flex -left-14 bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 h-12 w-12" />
              <CarouselNext className="hidden md:flex -right-14 bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 h-12 w-12" />
            </Carousel>
          </div>
          
          {/* Enhanced trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200/60 shadow-lg">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 tracking-wide">
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
                <Link to="/partner-with-us">Partner with Us</Link>
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
