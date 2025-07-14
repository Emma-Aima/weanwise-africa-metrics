
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Star,
  Stethoscope,
  Baby,
  UserCheck,
  HeartHandshake
} from "lucide-react";

interface CareTeamMember {
  id: number;
  name: string;
  designation: string;
  title: string;
  hospital: string;
  location: string;
  country: string;
  phone: string;
  email: string;
  openingHours: string;
  meetingPeriods: string;
  specialization: string[];
  rating: number;
  experience: string;
  avatar?: string;
  type: 'doctor' | 'therapist' | 'nurse' | 'caregiver';
}

const careTeamMembers: CareTeamMember[] = [
  {
    id: 1,
    name: "Dr. Amara Okonkwo",
    designation: "Pediatrician",
    title: "Chief Pediatrician",
    hospital: "Lagos University Teaching Hospital",
    location: "Idi-Araba, Lagos",
    country: "Nigeria",
    phone: "+234-1-7747-4647",
    email: "amara.okonkwo@luth.edu.ng",
    openingHours: "Mon-Fri: 8:00 AM - 5:00 PM",
    meetingPeriods: "Consultations: Mon, Wed, Fri 9:00 AM - 12:00 PM",
    specialization: ["Child Nutrition", "Growth Disorders", "Preventive Care"],
    rating: 4.9,
    experience: "15 years",
    type: 'doctor'
  },
  {
    id: 2,
    name: "Dr. Fatima Al-Rashid",
    designation: "Child Therapist",
    title: "Senior Development Therapist",
    hospital: "Cairo Children's Medical Center",
    location: "Heliopolis, Cairo",
    country: "Egypt",
    phone: "+20-2-2635-3000",
    email: "fatima.rashid@ccmc.org.eg",
    openingHours: "Tue-Sat: 9:00 AM - 6:00 PM",
    meetingPeriods: "Therapy Sessions: Tue, Thu 2:00 PM - 5:00 PM",
    specialization: ["Developmental Delays", "Speech Therapy", "Behavioral Support"],
    rating: 4.8,
    experience: "12 years",
    type: 'therapist'
  },
  {
    id: 3,
    name: "Nurse Grace Mwangi",
    designation: "Pediatric Nurse",
    title: "Senior Pediatric Nurse",
    hospital: "Kenyatta National Hospital",
    location: "Upper Hill, Nairobi",
    country: "Kenya",
    phone: "+254-20-2726-300",
    email: "grace.mwangi@knh.or.ke",
    openingHours: "24/7 Emergency Care",
    meetingPeriods: "Home Visits: Mon-Fri 8:00 AM - 4:00 PM",
    specialization: ["Home Care", "Immunizations", "Health Monitoring"],
    rating: 4.7,
    experience: "10 years",
    type: 'nurse'
  },
  {
    id: 4,
    name: "Sarah Banda",
    designation: "Community Caregiver",
    title: "Certified Child Caregiver",
    hospital: "Community Health Center",
    location: "Lusaka Central",
    country: "Zambia",
    phone: "+260-21-125-4321",
    email: "sarah.banda@chc.zm",
    openingHours: "Mon-Sat: 7:00 AM - 7:00 PM",
    meetingPeriods: "Home Support: Daily 8:00 AM - 12:00 PM",
    specialization: ["Nutrition Support", "Family Care", "Health Education"],
    rating: 4.6,
    experience: "8 years",
    type: 'caregiver'
  },
  {
    id: 5,
    name: "Dr. Kwame Asante",
    designation: "Nutritionist",
    title: "Chief Clinical Nutritionist",
    hospital: "Korle-Bu Teaching Hospital",
    location: "Korle-Bu, Accra",
    country: "Ghana",
    phone: "+233-30-202-0820",
    email: "kwame.asante@kbth.gov.gh",
    openingHours: "Mon-Fri: 8:00 AM - 4:00 PM",
    meetingPeriods: "Nutrition Counseling: Wed, Fri 10:00 AM - 2:00 PM",
    specialization: ["Child Nutrition", "Malnutrition Treatment", "Dietary Planning"],
    rating: 4.9,
    experience: "18 years",
    type: 'doctor'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'doctor': return <Stethoscope className="h-5 w-5 text-blue-600" />;
    case 'therapist': return <Baby className="h-5 w-5 text-purple-600" />;
    case 'nurse': return <UserCheck className="h-5 w-5 text-green-600" />;
    case 'caregiver': return <HeartHandshake className="h-5 w-5 text-pink-600" />;
    default: return <Heart className="h-5 w-5 text-gray-600" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'doctor': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'therapist': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'nurse': return 'bg-green-100 text-green-800 border-green-200';
    case 'caregiver': return 'bg-pink-100 text-pink-800 border-pink-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const CareTeam = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredMembers = selectedType === 'all' 
    ? careTeamMembers 
    : careTeamMembers.filter(member => member.type === selectedType);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-white to-green-50">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border flex items-center px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <SidebarTrigger className="mr-4 text-white hover:bg-white/20" />
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-xl font-bold">Care Team</h1>
                <p className="text-sm text-blue-100">Your Child's Healthcare Professionals</p>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  {careTeamMembers.length} Healthcare Professionals
                </Badge>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant={selectedType === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedType('all')}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white"
              >
                All ({careTeamMembers.length})
              </Button>
              <Button 
                variant={selectedType === 'doctor' ? 'default' : 'outline'}
                onClick={() => setSelectedType('doctor')}
                className={selectedType === 'doctor' ? 'bg-blue-600' : ''}
              >
                Doctors ({careTeamMembers.filter(m => m.type === 'doctor').length})
              </Button>
              <Button 
                variant={selectedType === 'therapist' ? 'default' : 'outline'}
                onClick={() => setSelectedType('therapist')}
                className={selectedType === 'therapist' ? 'bg-purple-600' : ''}
              >
                Therapists ({careTeamMembers.filter(m => m.type === 'therapist').length})
              </Button>
              <Button 
                variant={selectedType === 'nurse' ? 'default' : 'outline'}
                onClick={() => setSelectedType('nurse')}
                className={selectedType === 'nurse' ? 'bg-green-600' : ''}
              >
                Nurses ({careTeamMembers.filter(m => m.type === 'nurse').length})
              </Button>
              <Button 
                variant={selectedType === 'caregiver' ? 'default' : 'outline'}
                onClick={() => setSelectedType('caregiver')}
                className={selectedType === 'caregiver' ? 'bg-pink-600' : ''}
              >
                Caregivers ({careTeamMembers.filter(m => m.type === 'caregiver').length})
              </Button>
            </div>

            {/* Care Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-lg font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getTypeIcon(member.type)}
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                        </div>
                        <p className="text-sm text-gray-600">{member.designation}</p>
                        <Badge className={getTypeColor(member.type)}>
                          {member.title}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Hospital Info */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-800 mb-2">{member.hospital}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <MapPin className="h-3 w-3" />
                        {member.location}, {member.country}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-sm font-medium">{member.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-600">{member.experience} experience</span>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3 text-green-600" />
                        <span className="font-medium">{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-blue-600" />
                        <span className="text-gray-600">{member.email}</span>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <Clock className="h-3 w-3 text-purple-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">Hours:</p>
                          <p className="text-gray-600">{member.openingHours}</p>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-gray-800">Meeting Times:</p>
                        <p className="text-gray-600">{member.meetingPeriods}</p>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialization.map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                        Contact
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CareTeam;
