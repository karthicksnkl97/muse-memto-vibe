import floatingElementsImage from "@/assets/floating-elements.png";

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top left floating element */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full floating-animation" 
           style={{ animationDelay: '0s' }} />
      
      {/* Top right floating element */}
      <div className="absolute top-32 right-20 w-8 h-8 bg-secondary/30 rounded-full floating-animation" 
           style={{ animationDelay: '1s' }} />
      
      {/* Bottom left floating element */}
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/25 rounded-full floating-animation" 
           style={{ animationDelay: '2s' }} />
      
      {/* Bottom right floating element */}
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent/15 rounded-full floating-animation" 
           style={{ animationDelay: '0.5s' }} />
      
      {/* Center floating elements */}
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-secondary/40 rounded-full floating-animation" 
           style={{ animationDelay: '1.5s' }} />
      
      <div className="absolute top-1/4 right-1/3 w-10 h-10 bg-primary/20 rounded-full floating-animation" 
           style={{ animationDelay: '2.5s' }} />
    </div>
  );
};