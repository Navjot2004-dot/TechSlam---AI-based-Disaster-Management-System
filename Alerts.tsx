// File: src/pages/alerts.tsx

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Send, 
  MessageSquare, 
  Loader2,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const AlertsPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState(
    "DisasterNet Alert: This is a test warning for your area. Please monitor local news for updates. Stay safe."
  );
  
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !message) {
      setApiResponse({ success: false, message: "Phone number and message cannot be empty." });
      return;
    }

    setIsLoading(true);
    setApiResponse(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/send-sms', { // Ensure this URL is correct
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_number: phoneNumber, message }),
      });

      const result = await response.json();
      setApiResponse(result);

      if (result.success) {
        // Optionally clear the phone number field on success
        setPhoneNumber("");
      }

    } catch (err) {
      setApiResponse({ success: false, message: "Failed to connect to the server. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Manual Alert Center
        </h1>
        <p className="text-muted-foreground">
          Send critical SMS alerts to personnel or the public via Twilio.
        </p>
      </div>
      
      <Card className="p-6 border-border bg-card max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Recipient Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+91XXXXXXXXXX"
              className="text-lg"
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter the full number including the country code (e.g., +91 for India).
            </p>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Alert Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your alert message here..."
              className="text-base h-32"
              disabled={isLoading}
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Send className="h-4 w-4 mr-2" />
            )}
            {isLoading ? "Sending Alert..." : "Send Alert Now"}
          </Button>
        </form>
      </Card>

      {apiResponse && (
        <Alert variant={apiResponse.success ? "default" : "destructive"} className="max-w-2xl mx-auto animate-fade-in">
          {apiResponse.success ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <AlertTriangle className="h-4 w-4" />
          )}
          <AlertTitle>{apiResponse.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{apiResponse.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AlertsPage;