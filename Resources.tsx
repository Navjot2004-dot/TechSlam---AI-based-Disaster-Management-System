// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Truck, 
//   MapPin, 
//   Users, 
//   Heart,
//   Shield,
//   Plane,
//   Navigation,
//   Clock,
//   CheckCircle,
//   AlertCircle,
//   RefreshCw
// } from "lucide-react";

// const Resources = () => {
//   const [selectedResource, setSelectedResource] = useState<number | null>(null);

//   const resources = [
//     {
//       id: 1,
//       type: "ambulance",
//       name: "Emergency Unit Alpha-7",
//       location: "Los Angeles, CA",
//       status: "available",
//       personnel: 4,
//       equipment: ["Medical Supplies", "Defibrillator", "Oxygen"],
//       eta: null,
//       assignment: null
//     },
//     {
//       id: 2,
//       type: "fire_truck",
//       name: "Fire Response Unit 23",
//       location: "Sacramento, CA", 
//       status: "deployed",
//       personnel: 6,
//       equipment: ["Water Tank", "Foam System", "Rescue Tools"],
//       eta: "25 minutes",
//       assignment: "Wildfire Suppression - Zone A"
//     },
//     {
//       id: 3,
//       type: "helicopter",
//       name: "Air Rescue Hawk-1",
//       location: "San Francisco, CA",
//       status: "available",
//       personnel: 3,
//       equipment: ["Medical Kit", "Rescue Hoist", "Thermal Camera"],
//       eta: null,
//       assignment: null
//     },
//     {
//       id: 4,
//       type: "shelter",
//       name: "Community Emergency Center",
//       location: "Oakland, CA",
//       status: "active",
//       personnel: 12,
//       equipment: ["500 Beds", "Kitchen", "Medical Station"],
//       eta: null,
//       assignment: "Wildfire Evacuees"
//     }
//   ];

//   const getResourceIcon = (type: string) => {
//     switch (type) {
//       case "ambulance": return Heart;
//       case "fire_truck": return Shield;
//       case "helicopter": return Plane;
//       case "shelter": return Users;
//       default: return Truck;
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "available": return "text-emergency-low border-emergency-low";
//       case "deployed": return "text-emergency-high border-emergency-high";
//       case "maintenance": return "text-emergency-medium border-emergency-medium";
//       case "active": return "text-emergency-info border-emergency-info";
//       default: return "text-muted-foreground border-border";
//     }
//   };

//   const getStatusBg = (status: string) => {
//     switch (status) {
//       case "available": return "bg-emergency-low/10";
//       case "deployed": return "bg-emergency-high/10";
//       case "maintenance": return "bg-emergency-medium/10";
//       case "active": return "bg-emergency-info/10";
//       default: return "bg-muted";
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground mb-2">
//             Resource Management Center
//           </h1>
//           <p className="text-muted-foreground">
//             Real-time tracking and deployment of emergency response resources
//           </p>
//         </div>
//         <div className="flex items-center gap-4">
//           <Badge variant="outline" className="text-emergency-low border-emergency-low">
//             <CheckCircle className="h-3 w-3 mr-1" />
//             67 Available
//           </Badge>
//           <Badge variant="outline" className="text-emergency-high border-emergency-high">
//             <AlertCircle className="h-3 w-3 mr-1" />
//             23 Deployed
//           </Badge>
//           <Button variant="outline">
//             <RefreshCw className="h-4 w-4 mr-2" />
//             Refresh
//           </Button>
//         </div>
//       </div>

//       {/* Resource Overview Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <Card className="p-6 border-card-border bg-card">
//           <div className="flex items-center gap-3">
//             <div className="rounded-lg p-3 bg-emergency-low/10">
//               <Heart className="h-6 w-6 text-emergency-low" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-card-foreground">24</h3>
//               <p className="text-sm text-muted-foreground">Medical Units</p>
//             </div>
//           </div>
//         </Card>

//         <Card className="p-6 border-card-border bg-card">
//           <div className="flex items-center gap-3">
//             <div className="rounded-lg p-3 bg-emergency-high/10">
//               <Shield className="h-6 w-6 text-emergency-high" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-card-foreground">18</h3>
//               <p className="text-sm text-muted-foreground">Fire Units</p>
//             </div>
//           </div>
//         </Card>

//         <Card className="p-6 border-card-border bg-card">
//           <div className="flex items-center gap-3">
//             <div className="rounded-lg p-3 bg-emergency-info/10">
//               <Plane className="h-6 w-6 text-emergency-info" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-card-foreground">12</h3>
//               <p className="text-sm text-muted-foreground">Air Support</p>
//             </div>
//           </div>
//         </Card>

//         <Card className="p-6 border-card-border bg-card">
//           <div className="flex items-center gap-3">
//             <div className="rounded-lg p-3 bg-emergency-medium/10">
//               <Users className="h-6 w-6 text-emergency-medium" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-card-foreground">8</h3>
//               <p className="text-sm text-muted-foreground">Shelters</p>
//             </div>
//           </div>
//         </Card>
//       </div>

//       {/* Resource Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {resources.map((resource) => {
//           const Icon = getResourceIcon(resource.type);
//           const isSelected = selectedResource === resource.id;
          
//           return (
//             <Card 
//               key={resource.id}
//               className={`p-6 border-card-border bg-card cursor-pointer transition-all duration-200 ${
//                 isSelected ? "ring-2 ring-primary" : "hover:bg-card/80"
//               }`}
//               onClick={() => setSelectedResource(isSelected ? null : resource.id)}
//             >
//               <div className="space-y-4">
//                 {/* Resource Header */}
//                 <div className="flex items-start justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`rounded-lg p-3 ${getStatusBg(resource.status)}`}>
//                       <Icon className={`h-6 w-6 ${getStatusColor(resource.status).split(" ")[0]}`} />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-card-foreground">
//                         {resource.name}
//                       </h3>
//                       <p className="text-sm text-muted-foreground capitalize">
//                         {resource.type.replace("_", " ")}
//                       </p>
//                     </div>
//                   </div>
//                   <Badge variant="outline" className={getStatusColor(resource.status)}>
//                     {resource.status}
//                   </Badge>
//                 </div>

//                 {/* Resource Details */}
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <MapPin className="h-4 w-4" />
//                     <span>{resource.location}</span>
//                   </div>

//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <Users className="h-4 w-4" />
//                     <span>{resource.personnel} personnel</span>
//                   </div>

//                   {resource.eta && (
//                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                       <Clock className="h-4 w-4" />
//                       <span>ETA: {resource.eta}</span>
//                     </div>
//                   )}

//                   {resource.assignment && (
//                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                       <Navigation className="h-4 w-4" />
//                       <span>Assignment: {resource.assignment}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Equipment List */}
//                 <div className="space-y-2">
//                   <span className="text-sm font-medium text-card-foreground">Equipment</span>
//                   <div className="flex flex-wrap gap-1">
//                     {resource.equipment.map((item, i) => (
//                       <Badge key={i} variant="outline" className="text-xs">
//                         {item}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-2 pt-2">
//                   {resource.status === "available" && (
//                     <Button size="sm" className="flex-1">
//                       <Navigation className="h-4 w-4 mr-2" />
//                       Deploy
//                     </Button>
//                   )}
//                   {resource.status === "deployed" && (
//                     <Button variant="outline" size="sm" className="flex-1">
//                       <MapPin className="h-4 w-4 mr-2" />
//                       Track
//                     </Button>
//                   )}
//                   <Button variant="outline" size="sm">
//                     Details
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           );
//         })}
//       </div>

//       {/* Quick Deployment */}
//       <Card className="p-6 border-card-border bg-card">
//         <div className="space-y-4">
//           <h2 className="text-xl font-semibold text-card-foreground">
//             Quick Deployment
//           </h2>
//           <p className="text-sm text-muted-foreground">
//             Rapidly assign available resources to active disaster zones
//           </p>
          
//           <div className="flex gap-4">
//             <Button>
//               <Truck className="h-4 w-4 mr-2" />
//               Deploy to Wildfire Zone
//             </Button>
//             <Button variant="outline">
//               <Heart className="h-4 w-4 mr-2" />
//               Medical Response Team
//             </Button>
//             <Button variant="outline">
//               <Users className="h-4 w-4 mr-2" />
//               Open Emergency Shelter
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Resources;
// File: src/pages/resources.tsx

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, MapPin, Users, Heart, Shield, Plane, Navigation, Clock,
  CheckCircle, AlertCircle, RefreshCw, Map, List, Signal 
} from "lucide-react";

// Define a type for our resource objects for better safety
type Resource = {
  id: number;
  type: string;
  name: string;
  location: string;
  status: "available" | "deployed" | "maintenance" | "active";
  personnel: number;
  equipment: string[];
  eta: string | null;
  assignment: string | null;
};

// This is the localized, Indian-context data.
// In a real app, this would come from your backend API.
const initialResources: Resource[] = [
  {
    id: 1,
    type: "ndrf_unit",
    name: "NDRF 4th Battalion",
    location: "Chennai, Tamil Nadu",
    status: "available",
    personnel: 45,
    equipment: ["Inflatable Boats", "Cutting Tools", "First Aid"],
    eta: null,
    assignment: null
  },
  {
    id: 2,
    type: "ambulance",
    name: "Apollo Emergency Unit 12",
    location: "Mumbai, Maharashtra",
    status: "deployed",
    personnel: 4,
    equipment: ["Mobile Ventilator", "Defibrillator", "Oxygen"],
    eta: "18 minutes",
    assignment: "Mumbai Flood Relief - Zone B"
  },
  {
    id: 3,
    type: "helicopter",
    name: "IAF Dhruv (Air Rescue)",
    location: "Dehradun, Uttarakhand",
    status: "available",
    personnel: 5,
    equipment: ["Rescue Hoist", "Medical Kits", "Satellite Phone"],
    eta: null,
    assignment: null
  },
  {
    id: 4,
    type: "shelter",
    name: "Govt. Community Center",
    location: "Bhubaneswar, Odisha",
    status: "active",
    personnel: 20,
    equipment: ["1000 Beds", "Community Kitchen", "Medical Station"],
    eta: null,
    assignment: "Cyclone Yaas Evacuees"
  },
  {
    id: 5,
    type: "fire_truck",
    name: "Delhi Fire Service Unit 7",
    location: "New Delhi, Delhi",
    status: "deployed",
    personnel: 6,
    equipment: ["Water Cannon", "Ladders", "Breathing Apparatus"],
    eta: "12 minutes",
    assignment: "Industrial Fire - Okhla"
  },
  {
    id: 6,
    type: "ndrf_unit",
    name: "NDRF 8th Battalion",
    location: "Ghaziabad, Uttar Pradesh",
    status: "maintenance",
    personnel: 15,
    equipment: ["Vehicle Repair", "Equipment Check", "Restocking"],
    eta: null,
    assignment: "Scheduled Maintenance"
  },
  {
    id: 7,
    type: "transport_plane",
    name: "IAF C-17 Globemaster",
    location: "Hindon Air Force Station",
    status: "deployed",
    personnel: 8,
    equipment: ["Relief Supplies", "Water Purifiers", "Tents"],
    eta: "4 hours",
    assignment: "A&N Islands Cyclone Relief"
  },
  {
    id: 8,
    type: "medical_team",
    name: "Army Field Hospital",
    location: "Pune, Maharashtra",
    status: "available",
    personnel: 60,
    equipment: ["Surgical Kits", "50 Cots", "Mobile Pharmacy"],
    eta: null,
    assignment: null
  },
  {
    id: 9,
    type: "comm_vehicle",
    name: "Mobile Comms Post",
    location: "Hyderabad, Telangana",
    status: "available",
    personnel: 3,
    equipment: ["Satellite Uplink", "Radio Repeaters", "Generators"],
    eta: null,
    assignment: null
  },
  {
    id: 10,
    type: "shelter",
    name: "City School Auditorium",
    location: "Kolkata, West Bengal",
    status: "available",
    personnel: 5,
    equipment: ["Ready-to-deploy cots", "First Aid Station"],
    eta: null,
    assignment: "On Standby"
  }
];

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedResource, setSelectedResource] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // Fetch data when the component loads
  useEffect(() => {
    // In a real app, you would fetch from your backend API here.
    // For the demo, we'll simulate a network delay.
    setIsLoading(true);
    const timer = setTimeout(() => {
      setResources(initialResources);
      setIsLoading(false);
    }, 1000); // Simulate 1 second loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Handler for refreshing data
  const handleRefresh = () => {
    // This would re-fetch data from the API
    setIsLoading(true);
    const timer = setTimeout(() => {
      // You could shuffle or update the data here to show it's live
      setResources([...initialResources].reverse()); 
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  };
  
  // Handler for deploying a resource (for the demo)
  const handleDeploy = (id: number) => {
    console.log(`Deploying resource with ID: ${id}`);
    // In a real app, this would make a POST request to your backend
    // to update the resource status.
    alert(`This would trigger an API call to deploy unit ${id}.`);
  };

  // Helper functions for icons and colors
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "ambulance": return Heart;
      case "medical_team": return Heart;
      case "ndrf_unit": return Shield;
      case "fire_truck": return Shield;
      case "helicopter": return Plane;
      case "transport_plane": return Plane;
      case "shelter": return Users;
      case "comm_vehicle": return Signal;
      default: return Truck;
    }
  };

  const getStatusColor = (status: Resource['status']) => {
    switch (status) {
      case "available": return "text-green-500 border-green-500/50 bg-green-500/10";
      case "deployed": return "text-orange-500 border-orange-500/50 bg-orange-500/10";
      case "maintenance": return "text-yellow-500 border-yellow-500/50 bg-yellow-500/10";
      case "active": return "text-blue-500 border-blue-500/50 bg-blue-500/10";
      default: return "text-gray-500 border-gray-500/50";
    }
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Resource Management</h1>
          <p className="text-muted-foreground">Real-time tracking and deployment of Indian emergency response assets</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="outline" size="sm" onClick={() => setViewMode('list')} disabled={viewMode === 'list'}>
            <List className={`h-4 w-4 ${viewMode === 'list' ? 'text-primary' : ''}`} />
          </Button>
          <Button variant="outline" size="sm" onClick={() => setViewMode('map')} disabled={viewMode === 'map'}>
            <Map className={`h-4 w-4 ${viewMode === 'map' ? 'text-primary' : ''}`} />
          </Button>
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Conditional Rendering based on View Mode */}
      {viewMode === 'list' ? (
        // Grid View for Resource Cards
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          {isLoading ? (
            <p className="text-muted-foreground col-span-full text-center py-10">Loading resources...</p>
          ) : (
            resources.map((resource) => {
              const Icon = getResourceIcon(resource.type);
              const isSelected = selectedResource === resource.id;
              
              return (
                <Card 
                  key={resource.id}
                  className={`p-6 border-border bg-card cursor-pointer transition-all duration-200 ${
                    isSelected ? "ring-2 ring-primary" : "hover:shadow-lg"
                  }`}
                  onClick={() => setSelectedResource(isSelected ? null : resource.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-lg p-3 ${getStatusColor(resource.status).split(" ")[2]}`}>
                           <Icon className={`h-6 w-6 ${getStatusColor(resource.status).split(" ")[0]}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{resource.name}</h3>
                          <p className="text-sm text-muted-foreground capitalize">{resource.type.replace("_", " ")}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={getStatusColor(resource.status)}>{resource.status}</Badge>
                    </div>
                    
                    <div className="space-y-3 pl-2 border-l-2 border-border">
                      <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" /><span>{resource.location}</span></div>
                      <div className="flex items-center gap-2 text-sm"><Users className="h-4 w-4" /><span>{resource.personnel} personnel</span></div>
                      {resource.assignment && <div className="flex items-center gap-2 text-sm"><Navigation className="h-4 w-4" /><span>{resource.assignment}</span></div>}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {resource.status === "available" && (
                        <Button size="sm" className="flex-1" onClick={() => handleDeploy(resource.id)}>
                          <Navigation className="h-4 w-4 mr-2" />Deploy
                        </Button>
                      )}
                       <Button variant="outline" size="sm" className="flex-1">Details</Button>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      ) : (
        // Placeholder for Map View
        <Card className="p-6 h-[60vh] border-border bg-card animate-fade-in flex items-center justify-center">
            <div className="text-center text-muted-foreground">
                <Map className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-xl font-semibold">Live Map View</h2>
                <p>This area would display a live, interactive map (e.g., using React-Leaflet) showing the geospatial location of all resources.</p>
            </div>
        </Card>
      )}
    </div>
  );
};

export default Resources;