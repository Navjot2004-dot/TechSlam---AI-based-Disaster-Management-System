import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Calendar,
  MapPin,
  Users,
  Clock,
  Flame,
  Waves,
  Mountain,
  Wind,
  Download
} from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Disaster Events Timeline
          </h1>
          <p className="text-muted-foreground">
            Comprehensive log of all disaster events and emergency responses
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-6 border-card-border bg-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events by location, type, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={selectedFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("all")}
            >
              All Events
            </Button>
            <Button 
              variant={selectedFilter === "wildfire" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("wildfire")}
            >
              <Flame className="h-4 w-4 mr-1" />
              Fires
            </Button>
            <Button 
              variant={selectedFilter === "earthquake" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("earthquake")}
            >
              <Mountain className="h-4 w-4 mr-1" />
              Earthquakes
            </Button>
            <Button 
              variant={selectedFilter === "flood" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("flood")}
            >
              <Waves className="h-4 w-4 mr-1" />
              Floods
            </Button>
          </div>
        </div>
      </Card>

      {/* Events List */}
      <div className="space-y-4">
        {/* Event Item Example */}
        <Card className="p-6 border-card-border bg-card hover:bg-card/80 transition-colors">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-3 bg-emergency-critical/10">
              <Flame className="h-6 w-6 text-emergency-critical" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    Massive Wildfire Spreads in Northern California
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Rapidly spreading wildfire threatens residential areas and wildlife preserves
                  </p>
                </div>
                <Badge className="text-emergency-critical border-emergency-critical">
                  Critical
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Mendocino County, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>25,000 affected</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>2 hours ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 15, 2024</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-emergency-critical border-emergency-critical">
                    Active Response
                  </Badge>
                  <Badge variant="outline">
                    12 Units Deployed
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* More event items would go here */}
        <Card className="p-6 border-card-border bg-card hover:bg-card/80 transition-colors">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-3 bg-emergency-high/10">
              <Mountain className="h-6 w-6 text-emergency-high" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    7.2 Magnitude Earthquake Hits Central Japan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Strong earthquake detected with potential for significant structural damage
                  </p>
                </div>
                <Badge className="text-emergency-high border-emergency-high">
                  High
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Honshu, Japan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>150,000 affected</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>45 minutes ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 15, 2024</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-emergency-info border-emergency-info">
                    Monitoring
                  </Badge>
                  <Badge variant="outline">
                    Tsunami Alert Issued
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Events;