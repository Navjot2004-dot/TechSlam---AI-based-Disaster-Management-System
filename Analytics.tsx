import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar,
  Download,
  Filter,
  Clock,
  Target,
  AlertTriangle
} from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Analytics & Performance
          </h1>
          <p className="text-muted-foreground">
            Historical trends, response metrics, and predictive insights
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-card-border bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-emergency-high" />
              <span className="text-sm font-medium text-muted-foreground">Disasters This Month</span>
            </div>
            <div className="text-3xl font-bold text-card-foreground">47</div>
            <div className="text-sm text-emergency-high">+12% vs last month</div>
          </div>
        </Card>

        <Card className="p-6 border-card-border bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-emergency-info" />
              <span className="text-sm font-medium text-muted-foreground">Avg Response Time</span>
            </div>
            <div className="text-3xl font-bold text-card-foreground">18m</div>
            <div className="text-sm text-emergency-low">-5% vs last month</div>
          </div>
        </Card>

        <Card className="p-6 border-card-border bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emergency-medium" />
              <span className="text-sm font-medium text-muted-foreground">Prediction Accuracy</span>
            </div>
            <div className="text-3xl font-bold text-card-foreground">87%</div>
            <div className="text-sm text-emergency-low">+3% vs last month</div>
          </div>
        </Card>

        <Card className="p-6 border-card-border bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emergency-low" />
              <span className="text-sm font-medium text-muted-foreground">Lives Saved</span>
            </div>
            <div className="text-3xl font-bold text-card-foreground">1,247</div>
            <div className="text-sm text-emergency-low">+23% vs last month</div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Disaster Frequency Chart */}
        <Card className="p-6 border-card-border bg-card">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">
                Disaster Frequency Trends
              </h2>
              <Badge variant="outline">
                <Calendar className="h-3 w-3 mr-1" />
                Last 12 Months
              </Badge>
            </div>
            
            <div className="h-[300px] flex items-end justify-between gap-2 p-4 bg-muted/20 rounded-lg">
              {/* Mock Chart Bars */}
              {[20, 35, 45, 30, 55, 40, 65, 50, 70, 60, 45, 55].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-primary rounded-t transition-all duration-500 hover:bg-primary-hover"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emergency-critical"></div>
                <span>Wildfires</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emergency-high"></div>
                <span>Earthquakes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emergency-medium"></div>
                <span>Floods</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Response Performance */}
        <Card className="p-6 border-card-border bg-card">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">
                Response Performance
              </h2>
              <Badge variant="outline">
                <BarChart3 className="h-3 w-3 mr-1" />
                By Severity
              </Badge>
            </div>

            <div className="space-y-4">
              {/* Critical Events */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Critical Events</span>
                  <span className="text-sm text-muted-foreground">Avg: 12 min</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="h-2 bg-emergency-critical rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              {/* High Priority */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">High Priority</span>
                  <span className="text-sm text-muted-foreground">Avg: 18 min</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="h-2 bg-emergency-high rounded-full" style={{ width: "78%" }} />
                </div>
              </div>

              {/* Medium Priority */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Medium Priority</span>
                  <span className="text-sm text-muted-foreground">Avg: 24 min</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="h-2 bg-emergency-medium rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              {/* Low Priority */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Low Priority</span>
                  <span className="text-sm text-muted-foreground">Avg: 35 min</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="h-2 bg-emergency-low rounded-full" style={{ width: "96%" }} />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-card-border">
              <div className="text-sm text-muted-foreground">
                <strong>Target Response Time:</strong> &lt; 15 minutes for critical events
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Prediction Model Performance */}
      <Card className="p-6 border-card-border bg-card">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-card-foreground">
            AI Model Performance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Earthquake Prediction</span>
                <span className="text-lg font-bold text-emergency-info">87%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 bg-emergency-info rounded-full" style={{ width: "87%" }} />
              </div>
              <div className="text-xs text-muted-foreground">
                Based on 340 predictions in last 90 days
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Wildfire Risk</span>
                <span className="text-lg font-bold text-emergency-high">92%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 bg-emergency-high rounded-full" style={{ width: "92%" }} />
              </div>
              <div className="text-xs text-muted-foreground">
                Based on 156 predictions in last 90 days
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Flood Forecasting</span>
                <span className="text-lg font-bold text-emergency-medium">74%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 bg-emergency-medium rounded-full" style={{ width: "74%" }} />
              </div>
              <div className="text-xs text-muted-foreground">
                Based on 89 predictions in last 90 days
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;