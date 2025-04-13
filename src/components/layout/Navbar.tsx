
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = cn(
    'relative w-full z-20 transition-all duration-300',
    isScrolled ? 'sticky-nav py-2' : 'py-4 bg-white'
  );

  const navItems = [
    {
      name: 'Personal Banking',
      path: '/personal-banking',
      dropdown: [
        { name: 'Savings Account', path: '/personal-banking/savings' },
        { name: 'Current Account', path: '/personal-banking/current' },
        { name: 'Fixed Deposits', path: '/personal-banking/fixed-deposits' },
      ],
    },
    {
      name: 'Corporate Banking',
      path: '/corporate-banking',
      dropdown: [
        { name: 'Business Accounts', path: '/corporate-banking/business-accounts' },
        { name: 'Merchant Services', path: '/corporate-banking/merchant-services' },
        { name: 'Corporate Loans', path: '/corporate-banking/loans' },
      ],
    },
    {
      name: 'Loans',
      path: '/loans',
      dropdown: [
        { name: 'Home Loan', path: '/loans/home-loan' },
        { name: 'Car Loan', path: '/loans/car-loan' },
        { name: 'Education Loan', path: '/loans/education-loan' },
        { name: 'Personal Loan', path: '/loans/personal-loan' },
      ],
    },
    {
      name: 'Cards',
      path: '/cards',
      dropdown: [
        { name: 'Credit Cards', path: '/cards/credit' },
        { name: 'Debit Cards', path: '/cards/debit' },
        { name: 'Prepaid Cards', path: '/cards/prepaid' },
      ],
    },
    {
      name: 'About',
      path: '/about',
      dropdown: null,
    },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center font-bold text-2xl text-sbi-blue" onClick={() => setIsOpen(false)}>
              <span className="mr-1 text-sbi-blue font-bold">SBI</span>
              <span className="text-sm font-medium">State Bank of India</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    'hover:bg-gray-100',
                    activeDropdown === item.name ? 'text-sbi-blue' : 'text-gray-700'
                  )}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        'ml-1 h-4 w-4 transition-transform duration-200',
                        activeDropdown === item.name ? 'rotate-180' : ''
                      )}
                    />
                  )}
                </button>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          toggleDropdown(item.name);
                          setIsOpen(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Search className="h-4 w-4 mr-1" />
              <span>Search</span>
            </Button>
            <Button asChild variant="ghost" size="sm" className="flex items-center">
              <Link to="/login" className="text-sbi-blue hover:text-sbi-darkBlue">
                <User className="h-4 w-4 mr-1" />
                <span>Login</span>
              </Link>
            </Button>
            <Button asChild variant="default" size="sm" className="bg-sbi-blue hover:bg-sbi-darkBlue">
              <Link to="/login">Internet Banking</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-4 animate-slide-in">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      'flex justify-between items-center w-full px-3 py-2 text-left text-base font-medium rounded-md',
                      'hover:bg-gray-100',
                      activeDropdown === item.name ? 'text-sbi-blue' : 'text-gray-700'
                    )}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={cn(
                          'ml-1 h-4 w-4 transition-transform duration-200',
                          activeDropdown === item.name ? 'rotate-180' : ''
                        )}
                      />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-2">
              <Button asChild variant="outline" size="sm" className="w-full justify-center">
                <Link to="/login" className="text-sbi-blue">
                  <User className="h-4 w-4 mr-1" />
                  <span>Login</span>
                </Link>
              </Button>
              <Button asChild size="sm" className="w-full justify-center bg-sbi-blue hover:bg-sbi-darkBlue">
                <Link to="/login">Internet Banking</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
