
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Users, CheckCircle, Calendar, Mail } from "lucide-react";

const RepEoi = () => {
  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/rep-eoi-document.pdf';
    link.download = 'REP-EOI-Document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const benefits = [
    "Partnership with a government-recognized forum",
    "Access to structured training programs",
    "Opportunity to contribute to financial literacy",
    "Networking with industry experts",
    "Certification and recognition",
    "Support in program implementation"
  ];

  const requirements = [
    "Registered organization with valid credentials",
    "Experience in financial education or related field",
    "Commitment to social impact initiatives",
    "Ability to conduct training programs",
    "Professional team and infrastructure",
    "Alignment with our mission and values"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                REP / EOI
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Request for Empanelment of Partners & Expression of Interest
              </p>
            </div>
            
            <p className="text-lg text-blue-50 leading-relaxed max-w-4xl mx-auto">
              Join hands with Jago Investor Jago Forum to create a financially empowered India. 
              We invite organizations and institutions to partner with us in our mission to promote 
              investor education and financial literacy across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Opportunity</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are seeking dedicated partners who share our vision of building an informed 
                  investment culture. Through our REP (Request for Empanelment of Partners) and 
                  EOI (Expression of Interest) program, we invite qualified organizations to join 
                  our network of change-makers.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">What's Included</h3>
                  </div>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Detailed partnership guidelines</li>
                    <li>• Application process and requirements</li>
                    <li>• Terms and conditions</li>
                    <li>• Contact information and deadlines</li>
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Partnership Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Download and Benefits */}
            <div className="space-y-8">
              
              {/* Download Section */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                    <Download className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Download REP/EOI Document
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Get the complete REP/EOI document with detailed information about 
                    partnership opportunities, application process, and requirements.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={handleDownloadPDF}
                      size="lg" 
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </Button>
                    
                    <div className="text-sm text-gray-500">
                      <p>File Format: PDF | Size: ~2.5 MB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>Partnership Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    For any queries regarding the REP/EOI process, please contact us:
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Email:</strong> partnerships@jagoinvestorjagoforum.org</p>
                    <p><strong>Phone:</strong> +91 928933553</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Deadline</h3>
                <p className="text-gray-600">Rolling basis - Applications reviewed monthly</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-600">4-6 weeks from submission date</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Duration</h3>
                <p className="text-gray-600">Initial term of 2 years, renewable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RepEoi;
