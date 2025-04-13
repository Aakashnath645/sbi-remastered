import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-sbi-blue to-sbi-darkBlue text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAzLjk4LTEuNzggMy45OC0zLjk4bC4wMi0uMDIiLz48L2c+PC9nPjwvc3ZnPg==')] bg-center" />
      </div>

      <div className="container-custom py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Banking That Puts <span className="text-yellow-300">You First</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Experience seamless banking with India's most trusted bank. 
              Discover innovative solutions tailored to your financial needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white text-sbi-blue hover:bg-gray-100 font-medium">
                <Link to="/login">Internet Banking</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 hover:text-sbi-blue flex items-center transition-colors duration-300"
              >
                <Link to="/personal-banking/savings" className="flex items-center">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-full h-80">
              {/* Hero image would go here */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">Quick Access</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Button asChild variant="ghost" className="justify-start border border-white/30 bg-white/10 hover:bg-white/20">
                        <Link to="/personal-banking/savings">
                          <span>Savings Account</span>
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start border border-white/30 bg-white/10 hover:bg-white/20">
                        <Link to="/loans">
                          <span>Home Loan</span>
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start border border-white/30 bg-white/10 hover:bg-white/20">
                        <Link to="/cards">
                          <span>Credit Cards</span>
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start border border-white/30 bg-white/10 hover:bg-white/20">
                        <Link to="/personal-banking/fixed-deposits">
                          <span>Fixed Deposits</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
