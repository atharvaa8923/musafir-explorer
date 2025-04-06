
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import useTranslation from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { t } = useTranslation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-musafir-spiritual">Musafir</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-musafir-spiritual transition-colors">
              {t('home')}
            </Link>
            <Link to="/destinations" className="text-sm font-medium hover:text-musafir-spiritual transition-colors">
              {t('destinations')}
            </Link>
            <Link to="/itinerary" className="text-sm font-medium hover:text-musafir-spiritual transition-colors">
              {t('itineraries')}
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-musafir-spiritual transition-colors">
              {t('blog')}
            </Link>
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link to="/" className="text-lg font-medium hover:text-musafir-spiritual transition-colors">
                  {t('home')}
                </Link>
                <Link to="/destinations" className="text-lg font-medium hover:text-musafir-spiritual transition-colors">
                  {t('destinations')}
                </Link>
                <Link to="/itinerary" className="text-lg font-medium hover:text-musafir-spiritual transition-colors">
                  {t('itineraries')}
                </Link>
                <Link to="/blog" className="text-lg font-medium hover:text-musafir-spiritual transition-colors">
                  {t('blog')}
                </Link>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <p className="mb-2 text-sm text-muted-foreground">Language</p>
                    <ThemeToggle />
                  </div>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
