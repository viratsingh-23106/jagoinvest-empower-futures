
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Users, CheckCircle, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Transparency",
      description: "We maintain complete openness in all our operations and communications."
    },
    {
      icon: Target,
      title: "Responsibility",
      description: "We take ownership of our mission and its impact on communities."
    },
    {
      icon: Heart,
      title: "Inclusiveness",
      description: "We ensure our programs reach all sections of society without discrimination."
    },
    {
      icon: Users,
      title: "Accountability",
      description: "We are answerable to the communities we serve and stakeholders who support us."
    }
  ];

  const achievements = [
    "Conducted investor awareness programs in over 25 states",
    "Collaborated with 100+ NGOs and educational institutions",
    "Reached over 10,000 investors through our initiatives",
    "Developed comprehensive financial literacy curriculum",
    "Established partnerships with regulatory bodies",
    "Created multi-language educational resources"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">About Jago Investor Jago Forum</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Established with a singular vision — to promote investor awareness and foster a culture 
              of responsible investing in India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Jago Investor Jago Forum was established with a singular vision — to promote investor 
                    awareness and foster a culture of responsible investing in India. We operate as an 
                    independent, non-profit entity committed to the financial well-being of the public.
                  </p>
                  <p>
                    Over the years, we have conducted numerous investor awareness drives, workshops, and 
                    campaigns across various states, ensuring that financial literacy reaches even the 
                    most underserved communities.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Equip individuals with the knowledge to make informed financial decisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduce investor vulnerability to fraud and misinformation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Collaborate with financial institutions, regulators, and civil society for impactful outreach</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial education and planning session" 
                className="rounded-xl shadow-lg w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital financial literacy workshop" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our approach to investor education and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Successful community workshop celebration" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Over the years, we have made significant strides in promoting financial literacy 
                  and investor awareness across India.
                </p>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Join this initiative</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Become a part of our journey to create financially empowered communities. 
              Together, we can build a more secure financial future for all.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
