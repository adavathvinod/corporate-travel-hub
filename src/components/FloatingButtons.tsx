import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const phoneNumber = "+919705745455";
  const whatsappNumber = "919705745455";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in Aditya Travels corporate transportation services.");

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" fill="white" />
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}
