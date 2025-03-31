
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import databaseService from "@/services/databaseService";

const Navbar = () => {
  const { isMobile } = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      const adminStatus = await databaseService.isAdmin();
      setIsAdmin(adminStatus);
    };
    
    checkAdmin();
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Itineraries", path: "/itinerary" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-musafir-brown">Musafir</span>
            </Link>
          </div>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-background z-40">
                  <div className="p-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={closeMenu}
                        className={`px-3 py-2 rounded-md text-lg ${
                          isActive(link.path)
                            ? "bg-musafir-light text-musafir-brown font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={closeMenu}
                        className={`px-3 py-2 rounded-md text-lg flex items-center ${
                          isActive("/admin")
                            ? "bg-musafir-spiritual/10 text-musafir-spiritual font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <User className="mr-2 h-4 w-4" /> Admin
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md ${
                    isActive(link.path)
                      ? "bg-musafir-light text-musafir-brown font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`px-3 py-2 rounded-md flex items-center ${
                    isActive("/admin")
                      ? "bg-musafir-spiritual/10 text-musafir-spiritual font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <User className="mr-2 h-4 w-4" /> Admin
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
