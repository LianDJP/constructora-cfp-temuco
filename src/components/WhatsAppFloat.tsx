
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre los servicios de Constructora CFP.");
    const phoneNumber = "56950662535"; // Updated WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-float border-0 p-0"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/lovable-uploads/9ab4e1b3-000d-46c7-a7bc-9d0acc93ffe1.png" 
        alt="WhatsApp" 
        className="h-8 w-8"
      />
    </Button>
  );
};

export default WhatsAppFloat;