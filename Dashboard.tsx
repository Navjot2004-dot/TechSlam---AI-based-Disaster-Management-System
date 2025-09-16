import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Users, 
  MapPin, 
  TrendingUp,
  RefreshCw,
  Zap
} from "lucide-react";
import { DisasterMap } from "@/components/DisasterMap";
import { StatsCard } from "@/components/StatsCard";
import { RecentEvents } from "@/components/RecentEvents";

const Dashboard = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = () => {
    setLastUpdated(new Date());
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Global Disaster Command Center
          </h1>
          <p className="text-muted-foreground">
            Real-time monitoring and AI-powered emergency response coordination
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-emergency-info border-emergency-info">
            <Zap className="h-3 w-3 mr-1" />
            Live Data
          </Badge>
          <Button 
            onClick={handleRefresh}
            variant="outline" 
            size="sm"
            className="text-muted-foreground"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Disasters"
          value="23"
          change="+3 since last hour"
          icon={AlertTriangle}
          trend="up"
          severity="critical"
        />
        <StatsCard
          title="People Affected"
          value="127K"
          change="+12K since yesterday"
          icon={Users}
          trend="up"
          severity="high"
        />
        <StatsCard
          title="Response Units"
          value="89"
          change="12 deployed"
          icon={MapPin}
          trend="stable"
          severity="medium"
        />
        <StatsCard
          title="AI Predictions"
          value="15"
          change="Next 24 hours"
          icon={TrendingUp}
          trend="stable"
          severity="info"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <Card className="xl:col-span-2 p-0 overflow-hidden border-card-border bg-card">
          <div className="p-6 border-b border-card-border">
            <h2 className="text-xl font-semibold text-card-foreground mb-2">
              Global Disaster Map
            </h2>
            <p className="text-sm text-muted-foreground">
              Real-time visualization of active disasters and response operations
            </p>
          </div>
          <div className="h-[500px]">
            <DisasterMap />
          </div>
        </Card>

        {/* Recent Events Sidebar */}
        <Card className="border-card-border bg-card">
          <div className="p-6 border-b border-card-border">
            <h2 className="text-xl font-semibold text-card-foreground mb-2">
              Recent Events
            </h2>
            <p className="text-sm text-muted-foreground">
              Latest disaster alerts and updates
            </p>
          </div>
          <RecentEvents />
        </Card>
      </div>

      {/* Footer Stats */}
      <div className="text-center text-sm text-muted-foreground">
        Last updated: {lastUpdated.toLocaleTimeString()} • 
        Data sources: USGS, NASA FIRMS, OpenWeatherMap • 
        AI models: Active
      </div>
    </div>
  );
};

export default Dashboard;