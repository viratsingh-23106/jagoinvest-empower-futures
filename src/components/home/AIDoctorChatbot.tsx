import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, MessageCircle, Heart } from "lucide-react";

const AIDoctorChatbot = () => {
  useEffect(() => {
    // Load the Pickaxe script dynamically
    const script = document.createElement("script");
    script.src = "https://studio.pickaxe.co/api/embed/bundle.js";
    script.defer = true;
    script.async = true;
    
    // Add error handling
    script.onerror = () => {
      console.error("Failed to load AI Doctor chatbot script");
    };
    
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://studio.pickaxe.co/api/embed/bundle.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.05),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-green-500"></div>
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent text-sm font-bold tracking-[0.2em] uppercase">
              Health & Wellness
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Health
            <span className="relative mx-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">Assistant</span>
              <Heart className="absolute -top-2 -right-2 h-6 w-6 text-red-500 animate-pulse" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            Get instant medical guidance and health information from our AI-powered doctor assistant. 
            Available 24/7 to help with your health questions and concerns.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-200/60 shadow-sm">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Medical Expertise</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-200/60 shadow-sm">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">24/7 Available</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-200/60 shadow-sm">
              <div className="p-2 bg-gradient-to-br from-teal-500 to-green-600 rounded-full">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Personalized Care</span>
            </div>
          </div>
        </div>
        
        {/* Chatbot Container */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-100/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Consultation</h3>
                <p className="text-gray-600">Ask any health-related question and get expert guidance</p>
              </div>
              
              {/* AI Doctor Chatbot Embed */}
              <div className="relative">
                <div 
                  id="deployment-0ef362ae-52dd-4e65-92fa-53d055eeb152"
                  className="min-h-[500px] w-full bg-gray-50/50 rounded-xl border border-gray-200/60 flex items-center justify-center"
                >
                  {/* Loading placeholder */}
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-sm">Loading AI Health Assistant...</p>
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-50/80 border border-yellow-200/60 rounded-xl">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Disclaimer:</strong> This AI assistant provides general health information only. 
                  For serious medical concerns, please consult with a qualified healthcare professional.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIDoctorChatbot;