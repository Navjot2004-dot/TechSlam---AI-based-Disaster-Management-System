// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Slider } from "@/components/ui/slider";
// import { 
//   Brain, 
//   TrendingUp, 
//   AlertTriangle,
//   Target,
//   Settings,
//   BarChart3,
//   Zap,
//   Gauge
// } from "lucide-react";

// const Prediction = () => {
//   const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
//   const [rainfall, setRainfall] = useState([45]);
//   const [temperature, setTemperature] = useState([28]);
//   const [seismicActivity, setSeismicActivity] = useState([3.2]);

//   const predictions = [
//     {
//       type: "Flood Risk",
//       location: "Mumbai, India",
//       probability: 78,
//       severity: "high",
//       timeframe: "Next 6-12 hours",
//       confidence: 92,
//       factors: ["Heavy rainfall", "High tide", "Poor drainage"]
//     },
//     {
//       type: "Wildfire Risk", 
//       location: "California, USA",
//       probability: 65,
//       severity: "medium",
//       timeframe: "Next 12-24 hours", 
//       confidence: 87,
//       factors: ["Dry conditions", "High winds", "Low humidity"]
//     },
//     {
//       type: "Earthquake Risk",
//       location: "Tokyo, Japan",
//       probability: 23,
//       severity: "medium",
//       timeframe: "Next 48-72 hours",
//       confidence: 74,
//       factors: ["Recent tremors", "Tectonic stress", "Historical patterns"]
//     }
//   ];

//   const getSeverityColor = (severity: string) => {
//     switch (severity) {
//       case "critical": return "text-emergency-critical";
//       case "high": return "text-emergency-high";
//       case "medium": return "text-emergency-medium";
//       case "low": return "text-emergency-low";
//       default: return "text-muted-foreground";
//     }
//   };

//   const getProbabilityColor = (probability: number) => {
//     if (probability >= 70) return "text-emergency-critical";
//     if (probability >= 50) return "text-emergency-high";
//     if (probability >= 30) return "text-emergency-medium";
//     return "text-emergency-low";
//   };

//   return (
//     <div className="min-h-screen p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground mb-2">
//             AI Disaster Prediction Center
//           </h1>
//           <p className="text-muted-foreground">
//             Machine learning-powered forecasting and risk assessment
//           </p>
//         </div>
//         <div className="flex items-center gap-4">
//           <Badge variant="outline" className="text-emergency-info border-emergency-info">
//             <Brain className="h-3 w-3 mr-1" />
//             ML Models Active
//           </Badge>
//           <Button variant="outline">
//             <Settings className="h-4 w-4 mr-2" />
//             Model Settings
//           </Button>
//         </div>
//       </div>

//       {/* Time Frame Selector */}
//       <Card className="p-6 border-card-border bg-card">
//         <div className="flex items-center gap-4">
//           <h2 className="text-lg font-semibold text-card-foreground">Prediction Timeframe</h2>
//           <div className="flex gap-2">
//             {["6h", "12h", "24h", "48h", "72h"].map((timeframe) => (
//               <Button
//                 key={timeframe}
//                 variant={selectedTimeframe === timeframe ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedTimeframe(timeframe)}
//               >
//                 {timeframe}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </Card>

//       {/* Current Predictions */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//         {predictions.map((prediction, index) => (
//           <Card key={index} className="p-6 border-card-border bg-card">
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-semibold text-card-foreground">
//                   {prediction.type}
//                 </h3>
//                 <Badge variant="outline" className={getSeverityColor(prediction.severity)}>
//                   {prediction.severity}
//                 </Badge>
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 <p><strong>Location:</strong> {prediction.location}</p>
//                 <p><strong>Timeframe:</strong> {prediction.timeframe}</p>
//               </div>

//               {/* Probability Gauge */}
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium">Risk Probability</span>
//                   <span className={`text-2xl font-bold ${getProbabilityColor(prediction.probability)}`}>
//                     {prediction.probability}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-muted rounded-full h-2">
//                   <div 
//                     className={`h-2 rounded-full transition-all duration-500 ${
//                       prediction.probability >= 70 ? "bg-emergency-critical" :
//                       prediction.probability >= 50 ? "bg-emergency-high" :
//                       prediction.probability >= 30 ? "bg-emergency-medium" : "bg-emergency-low"
//                     }`}
//                     style={{ width: `${prediction.probability}%` }}
//                   />
//                 </div>
//               </div>

//               {/* Confidence Level */}
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium">AI Confidence</span>
//                   <span className="text-sm text-muted-foreground">{prediction.confidence}%</span>
//                 </div>
//                 <div className="w-full bg-muted rounded-full h-1">
//                   <div 
//                     className="h-1 rounded-full bg-emergency-info transition-all duration-500"
//                     style={{ width: `${prediction.confidence}%` }}
//                   />
//                 </div>
//               </div>

//               {/* Contributing Factors */}
//               <div className="space-y-2">
//                 <span className="text-sm font-medium">Key Factors</span>
//                 <div className="flex flex-wrap gap-1">
//                   {prediction.factors.map((factor, i) => (
//                     <Badge key={i} variant="outline" className="text-xs">
//                       {factor}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>

//               <Button variant="outline" className="w-full">
//                 <BarChart3 className="h-4 w-4 mr-2" />
//                 View Analysis
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Interactive Simulation */}
//       <Card className="p-6 border-card-border bg-card">
//         <div className="space-y-6">
//           <div className="flex items-center gap-2">
//             <Target className="h-5 w-5 text-primary" />
//             <h2 className="text-xl font-semibold text-card-foreground">
//               What-If Scenario Simulator
//             </h2>
//           </div>
          
//           <p className="text-sm text-muted-foreground">
//             Adjust environmental parameters to see how they affect disaster risk predictions
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Rainfall Slider */}
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-medium">Rainfall (mm/hour)</label>
//                 <span className="text-sm text-muted-foreground">{rainfall[0]}mm</span>
//               </div>
//               <Slider
//                 value={rainfall}
//                 onValueChange={setRainfall}
//                 max={100}
//                 min={0}
//                 step={1}
//                 className="w-full"
//               />
//             </div>

//             {/* Temperature Slider */}
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-medium">Temperature (°C)</label>
//                 <span className="text-sm text-muted-foreground">{temperature[0]}°C</span>
//               </div>
//               <Slider
//                 value={temperature}
//                 onValueChange={setTemperature}
//                 max={50}
//                 min={-10}
//                 step={1}
//                 className="w-full"
//               />
//             </div>

//             {/* Seismic Activity Slider */}
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-medium">Seismic Activity (magnitude)</label>
//                 <span className="text-sm text-muted-foreground">{seismicActivity[0]}</span>
//               </div>
//               <Slider
//                 value={seismicActivity}
//                 onValueChange={setSeismicActivity}
//                 max={9}
//                 min={0}
//                 step={0.1}
//                 className="w-full"
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-4 pt-4 border-t border-card-border">
//             <Button>
//               <Zap className="h-4 w-4 mr-2" />
//               Run Simulation
//             </Button>
//             <div className="text-sm text-muted-foreground">
//               Updated risk calculations will appear based on adjusted parameters
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Prediction;
// File: src/pages/prediction.tsx

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Brain, 
  Settings,
  BarChart3,
  Zap,
  Target,
  Loader2 // Added for loading spinner
} from "lucide-react";

// Define a type for the API response from our backend
type PredictionResult = {
  sequence: string;
  labels: string[];
  scores: number[];
};

// Define a type for the card that displays the result
type PredictionDisplay = {
  type: string;
  location: string;
  probability: number;
  severity: "low" | "medium" | "high" | "critical";
  timeframe: string;
  confidence: number;
  factors: string[];
};

const Prediction = () => {
  // State for the interactive sliders
  const [rainfall, setRainfall] = useState([45]);
  const [temperature, setTemperature] = useState([28]);
  const [seismicActivity, setSeismicActivity] = useState([3.2]);

  // State for the API call
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State to hold the dynamic prediction result
  const [prediction, setPrediction] = useState<PredictionDisplay | null>({
    // Initial default state before first simulation
    type: "Flood Risk",
    location: "Mumbai, India",
    probability: 0,
    severity: "low",
    timeframe: "Awaiting Simulation",
    confidence: 0,
    factors: ["Heavy rainfall", "High tide"]
  });

  // Function to determine severity based on score and label
  const getSeverity = (label: string, score: number): PredictionDisplay['severity'] => {
    if (label === "no disaster") return "low";
    if (score > 0.8) return "critical";
    if (score > 0.6) return "high";
    if (score > 0.4) return "medium";
    return "low";
  };

  // Main function to handle the simulation and API call
  const handleSimulation = async () => {
    setIsLoading(true);
    setError(null);

    // 1. Construct a descriptive sentence from slider values
    const scenarioText = 
      `Simulate a disaster scenario with the following conditions: ` +
      `rainfall at ${rainfall[0]} mm/hour, ` +
      `temperature at ${temperature[0]} degrees Celsius, ` +
      `and seismic activity at a magnitude of ${seismicActivity[0]}.`;

    try {
      // 2. Call the Python backend
      const response = await fetch('http://127.0.0.1:8000/predict', { // Make sure this URL is correct
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: scenarioText }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to the prediction API. Is the backend server running?');
      }

      const result: PredictionResult = await response.json();
      
      // 3. Process the result and update the display state
      const topLabel = result.labels[0];
      const topScore = result.scores[0];

      setPrediction({
        type: `${topLabel.charAt(0).toUpperCase() + topLabel.slice(1)} Risk`,
        location: "Simulated Scenario",
        probability: Math.round(topScore * 100),
        severity: getSeverity(topLabel, topScore),
        timeframe: "Next 6-12 hours",
        confidence: Math.round(Math.random() * (95 - 85) + 85), // Simulate a confidence score
        factors: [`Rainfall: ${rainfall[0]}mm`, `Temp: ${temperature[0]}°C`, `Seismic: ${seismicActivity[0]} mag`]
      });

    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper functions for styling, same as your original code
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-red-500/50 bg-red-500/10 text-red-500";
      case "high": return "border-orange-500/50 bg-orange-500/10 text-orange-500";
      case "medium": return "border-yellow-500/50 bg-yellow-500/10 text-yellow-500";
      default: return "border-green-500/50 bg-green-500/10 text-green-500";
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return "text-red-500";
    if (probability >= 60) return "text-orange-500";
    if (probability >= 40) return "text-yellow-500";
    return "text-green-500";
  };
  
  const getProbabilityBgColor = (probability: number) => {
    if (probability >= 80) return "bg-red-500";
    if (probability >= 60) return "bg-orange-500";
    if (probability >= 40) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Disaster Prediction Center</h1>
          <p className="text-muted-foreground">ML-powered forecasting and risk assessment</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-blue-400 border-blue-400/50">
            <Brain className="h-3 w-3 mr-1" />
            ML Models Active
          </Badge>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Model Settings
          </Button>
        </div>
      </div>

      {/* Dynamic Prediction Display */}
      <div className="grid grid-cols-1 gap-6">
        {prediction && (
          <Card className="p-6 border-border bg-card animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {prediction.type}
                </h3>
                <Badge variant="outline" className={getSeverityColor(prediction.severity)}>
                  {prediction.severity}
                </Badge>
              </div>

              <div className="text-sm text-muted-foreground">
                <p><strong>Location:</strong> {prediction.location}</p>
                <p><strong>Timeframe:</strong> {prediction.timeframe}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Risk Probability</span>
                  <span className={`text-2xl font-bold ${getProbabilityColor(prediction.probability)}`}>
                    {prediction.probability}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getProbabilityBgColor(prediction.probability)}`}
                    style={{ width: `${prediction.probability}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium">Key Factors (from simulation)</span>
                <div className="flex flex-wrap gap-1">
                  {prediction.factors.map((factor, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Full Analysis
              </Button>
            </div>
          </Card>
        )}
      </div>

      {/* Interactive Simulation */}
      <Card className="p-6 border-border bg-card">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-card-foreground">
              What-If Scenario Simulator
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Adjust environmental parameters to see how they affect disaster risk predictions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Rainfall (mm/hour)</label>
                <span className="text-sm font-mono text-muted-foreground">{rainfall[0]}mm</span>
              </div>
              <Slider value={rainfall} onValueChange={setRainfall} max={100} min={0} step={1} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Temperature (°C)</label>
                <span className="text-sm font-mono text-muted-foreground">{temperature[0]}°C</span>
              </div>
              <Slider value={temperature} onValueChange={setTemperature} max={50} min={-10} step={1} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Seismic Activity (mag)</label>
                <span className="text-sm font-mono text-muted-foreground">{seismicActivity[0].toFixed(1)}</span>
              </div>
              <Slider value={seismicActivity} onValueChange={setSeismicActivity} max={9} min={0} step={0.1} />
            </div>
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <Button onClick={handleSimulation} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Zap className="h-4 w-4 mr-2" />
              )}
              {isLoading ? "Analyzing..." : "Run Simulation"}
            </Button>
            <div className="text-sm text-muted-foreground">
              The prediction card above will update based on these parameters.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Prediction;