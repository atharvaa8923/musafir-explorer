
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Map, Backpack, Wallet, MessageCircle, Sun } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-musafir-brown">
            <span className="text-musafir-spiritual">Musafir</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem icon={<Map size={18} />} label="Offline Maps" />
          <NavItem icon={<Backpack size={18} />} label="Packing List" />
          <NavItem icon={<Wallet size={18} />} label="Budget" />
          <NavItem icon={<MessageCircle size={18} />} label="Chat" />
          <NavItem icon={<Sun size={18} />} label="Weather" />
          <Button className="bg-musafir-trekking hover:bg-musafir-trekking/90">Explore Now</Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <NavItem icon={<Map size={18} />} label="Offline Maps" />
            <NavItem icon={<Backpack size={18} />} label="Packing List" />
            <NavItem icon={<Wallet size={18} />} label="Budget" />
            <NavItem icon={<MessageCircle size={18} />} label="Chat" />
            <NavItem icon={<Sun size={18} />} label="Weather" />
            <Button className="bg-musafir-trekking hover:bg-musafir-trekking/90 w-full">
              Explore Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors">
    {icon}
    <span>{label}</span>
  </button>
);

export default Navbar;
