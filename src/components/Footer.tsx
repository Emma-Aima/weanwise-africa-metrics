
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Home, 
  Apple, 
  Users, 
  Bell, 
  Settings, 
  Info,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    handleClear();
  };

  const navigationLinks = [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Health Monitor", url: "/health", icon: Heart },
    { title: "Nutrition", url: "/nutrition", icon: Apple },
    { title: "Care Team", url: "/team", icon: Users },
    { title: "About Us", url: "/about", icon: Info },
    { title: "Alerts", url: "/alerts", icon: Bell },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  const objectives = [
    "Reduce child mortality rates in Sub-Saharan Africa",
    "Provide real-time health monitoring for infants and children",
    "Deliver culturally relevant nutrition guidance",
    "Empower mothers and caregivers with data-driven insights",
    "Support healthcare workers with accessible tools",
    "Promote healthy weaning practices and child development"
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">WeanWise Africa</h3>
                <p className="text-sm text-blue-200">Child Health & Nutrition</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-blue-200">What We Do</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                WeanWise Africa is a technology-driven platform that supports child health and nutrition 
                across Sub-Saharan Africa through real-time monitoring and culturally relevant guidance.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-blue-200">Our Objectives</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.url} 
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SDG Statement */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200">The UN SDG Global Solution:</h4>
            <div className="bg-white/10 rounded-lg p-4 border border-blue-400/30">
              <p className="text-sm text-blue-100 font-medium">
                "WeanWise Africa is addressing the SDG 3: Good Health & Wellbeing in Sub-Saharan Africa"
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-green-200">Contact Information</h5>
              <div className="space-y-1 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span>info@weanwiseafrica.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200">Contact Us</h4>
            <Card className="bg-white/10 border-blue-400/30">
              <CardContent className="p-4">
                <form onSubmit={handleSendMessage} className="space-y-3">
                  <div>
                    <Label htmlFor="fullName" className="text-xs text-blue-200">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="h-8 text-sm bg-white/20 border-blue-400/30 text-white placeholder:text-gray-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phoneNumber" className="text-xs text-blue-200">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="h-8 text-sm bg-white/20 border-blue-400/30 text-white placeholder:text-gray-300"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-xs text-blue-200">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-8 text-sm bg-white/20 border-blue-400/30 text-white placeholder:text-gray-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-xs text-blue-200">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="h-8 text-sm bg-white/20 border-blue-400/30 text-white placeholder:text-gray-300"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-xs text-blue-200">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="h-20 text-sm bg-white/20 border-blue-400/30 text-white placeholder:text-gray-300 resize-none"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleClear}
                      className="flex-1 h-8 text-xs bg-transparent border-blue-400/30 text-blue-200 hover:bg-white/10"
                    >
                      Clear
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 h-8 text-xs bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400/30 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2025 WeanWise Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
