
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Calendar, Users } from "lucide-react";

export interface UserProfile {
  id: number;
  name: string;
  role: 'mother' | 'caregiver' | 'health_worker';
  location: string;
  children: number;
  joinedDate: string;
  activeChildren: string[];
}

interface UserProfilesProps {
  users: UserProfile[];
  onSelectUser: (userId: number) => void;
}

export default function UserProfiles({ users, onSelectUser }: UserProfilesProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'mother': return 'bg-pink-100 text-pink-800';
      case 'caregiver': return 'bg-blue-100 text-blue-800';
      case 'health_worker': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'health_worker': return 'Health Worker';
      default: return role.charAt(0).toUpperCase() + role.slice(1);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Users className="h-5 w-5" />
        Active Users
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card 
            key={user.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onSelectUser(user.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{user.name}</CardTitle>
                    <Badge className={getRoleColor(user.role)} variant="secondary">
                      {getRoleDisplay(user.role)}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Joined {user.joinedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-3 w-3" />
                <span>{user.children} children under care</span>
              </div>
              {user.activeChildren.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {user.activeChildren.map((child, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {child}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
