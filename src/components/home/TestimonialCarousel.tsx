
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Raj Mehta',
    role: 'Small Business Owner',
    content: 'SBI\'s business banking services have been instrumental in growing my business. Their personalized approach and digital banking tools have made managing finances seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Home Loan Customer',
    content: 'Getting a home loan from SBI was a smooth experience. The staff guided me through each step, and I got competitive interest rates. Now I\'m living in my dream home!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Premium Account Holder',
    content: 'I\'ve been an SBI customer for over 15 years. Their internet banking platform is excellent, and their customer service is always prompt and helpful.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Anita Desai',
    role: 'Education Loan Recipient',
    content: 'SBI\'s education loan helped me pursue my masters abroad without financial stress. The flexible repayment options are really beneficial for students.',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    
    setIsAnimating(true);
    setCurrentTestimonial(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with SBI's services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden h-80"
          >
            <div 
              className={cn(
                "transition-all duration-500 ease-in-out h-full flex",
                isAnimating ? "opacity-0" : "opacity-100"
              )}
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4 flex flex-col items-center justify-center"
                >
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-5 w-5", 
                          i < testimonial.rating 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 text-center mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-sbi-blue hover:shadow-lg transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-sbi-blue hover:shadow-lg transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentTestimonial 
                    ? "w-6 bg-sbi-blue" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
