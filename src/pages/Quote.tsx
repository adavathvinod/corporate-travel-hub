import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, User, Mail, Phone, Briefcase, 
  Users, CalendarDays, Car, ArrowRight, ArrowLeft,
  CheckCircle2, Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Company Info", icon: Building2 },
  { id: 2, title: "Service Type", icon: Briefcase },
  { id: 3, title: "Fleet & Volume", icon: Car },
];

const serviceTypes = [
  { id: "employee-commute", label: "Employee Commute", description: "Daily pick-up & drop for employees" },
  { id: "executive-travel", label: "Executive Travel", description: "Premium chauffeur services" },
  { id: "event-logistics", label: "Event Logistics", description: "Corporate events & conferences" },
  { id: "airport-transfers", label: "Airport Transfers", description: "Pick-up & drop services" },
  { id: "outstation", label: "Outstation Trips", description: "Inter-city travel" },
];

const contractLengths = [
  { id: "6-months", label: "6 Months" },
  { id: "1-year", label: "1 Year" },
  { id: "2-years", label: "2+ Years" },
  { id: "custom", label: "Custom" },
];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Step 1
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    designation: "",
    
    // Step 2
    serviceTypes: [] as string[],
    
    // Step 3
    dailyRiders: "",
    vehiclesRequired: "",
    contractLength: "",
    additionalNotes: "",
  });

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleServiceType = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(serviceId)
        ? prev.serviceTypes.filter(id => id !== serviceId)
        : [...prev.serviceTypes, serviceId]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.contactName && formData.email && formData.phone;
      case 2:
        return formData.serviceTypes.length > 0;
      case 3:
        return formData.dailyRiders && formData.contractLength;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours with a customized proposal.",
    });
    
    setIsSubmitting(false);
    // Reset form
    setCurrentStep(1);
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      designation: "",
      serviceTypes: [],
      dailyRiders: "",
      vehiclesRequired: "",
      contractLength: "",
      additionalNotes: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get Started
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Corporate Quote
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your transportation needs and we'll prepare a customized proposal.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                    currentStep >= step.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <step.icon className="h-4 w-4" />
                  <span className="text-sm font-medium hidden sm:inline">{step.title}</span>
                  <span className="text-sm font-medium sm:hidden">{step.id}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-8 md:w-16 h-0.5 mx-2",
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  )} />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-8 md:p-12">
            {/* Step 1: Company Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Company Information</h2>
                  <p className="text-muted-foreground">Tell us about your organization</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="companyName"
                        placeholder="Your Company Pvt Ltd"
                        className="pl-10"
                        value={formData.companyName}
                        onChange={(e) => updateFormData("companyName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="contactName"
                        placeholder="Full Name"
                        className="pl-10"
                        value={formData.contactName}
                        onChange={(e) => updateFormData("contactName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="designation">Your Designation</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="designation"
                        placeholder="HR Manager, Admin Head, etc."
                        className="pl-10"
                        value={formData.designation}
                        onChange={(e) => updateFormData("designation", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Type */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Service Requirements</h2>
                  <p className="text-muted-foreground">Select all services you need (you can select multiple)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleServiceType(service.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all",
                        formData.serviceTypes.includes(service.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-semibold text-foreground">{service.label}</div>
                          <div className="text-sm text-muted-foreground">{service.description}</div>
                        </div>
                        {formData.serviceTypes.includes(service.id) && (
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Fleet & Volume */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Fleet & Volume Details</h2>
                  <p className="text-muted-foreground">Help us understand your scale requirements</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dailyRiders">Estimated Daily Riders *</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="dailyRiders"
                        placeholder="e.g., 50-100"
                        className="pl-10"
                        value={formData.dailyRiders}
                        onChange={(e) => updateFormData("dailyRiders", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehiclesRequired">Vehicles Required (approx)</Label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="vehiclesRequired"
                        placeholder="e.g., 5-10"
                        className="pl-10"
                        value={formData.vehiclesRequired}
                        onChange={(e) => updateFormData("vehiclesRequired", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contract Length *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {contractLengths.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => updateFormData("contractLength", option.id)}
                        className={cn(
                          "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                          formData.contractLength === option.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50 text-foreground"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Requirements</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Any specific requirements, preferred start date, special routes, etc."
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <Button
                  variant="corporate"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="corporate"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Trust Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Your information is secure. We'll respond within 24 business hours.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
