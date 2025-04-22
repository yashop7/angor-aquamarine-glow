
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-angor-darkTeal/90 backdrop-blur-md border-b border-angor-cyan/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f2a9b647-794c-49e4-be26-1f4f77230ed8.png" 
              alt="Angor Logo" 
              className="h-8 w-auto mr-3" 
            />
            <span className="text-angor-steel font-bold text-xl">Angor</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-angor-steel hover:text-white transition-colors">Home</Link>
          <Link to="/features" className="text-angor-steel hover:text-white transition-colors">Features</Link>
          <Link to="/faq" className="text-angor-steel hover:text-white transition-colors">FAQ</Link>
          <Link to="/nostr" className="text-angor-steel hover:text-white transition-colors">Nostr</Link>
        </nav>
        
        <div className="hidden md:flex items-center">
          <Button 
            variant="outline" 
            className="border-angor-cyan text-angor-steel hover:bg-angor-cyan hover:text-white"
          >
            Source code
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-angor-steel" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-angor-darkTeal border-t border-angor-cyan/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-angor-steel hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-angor-steel hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/faq" 
              className="text-angor-steel hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/nostr" 
              className="text-angor-steel hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nostr
            </Link>
            <Button 
              variant="outline" 
              className="border-angor-cyan text-angor-steel hover:bg-angor-cyan hover:text-white w-full"
            >
              Source code
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
