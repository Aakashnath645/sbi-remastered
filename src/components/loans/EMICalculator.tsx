
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calculator, 
  IndianRupee, 
  PercentIcon, 
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Form schema
const calculatorSchema = z.object({
  loanAmount: z.number()
    .min(10000, "Loan amount must be at least ₹10,000")
    .max(10000000, "Loan amount cannot exceed ₹1,00,00,000"),
  interestRate: z.number()
    .min(5, "Interest rate must be at least 5%")
    .max(20, "Interest rate cannot exceed 20%"),
  loanTenure: z.number()
    .min(1, "Loan tenure must be at least 1 year")
    .max(30, "Loan tenure cannot exceed 30 years"),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

const EMICalculator = () => {
  const [emiResult, setEmiResult] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [animateCalculation, setAnimateCalculation] = useState(false);

  // Initialize form
  const form = useForm<CalculatorForm>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      loanAmount: 1000000,
      interestRate: 8.5,
      loanTenure: 20,
    },
  });

  // Watch form values for real-time calculations
  const loanAmount = form.watch('loanAmount');
  const interestRate = form.watch('interestRate');
  const loanTenure = form.watch('loanTenure');

  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const tenureInMonths = loanTenure * 12;
    
    // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureInMonths) / 
      (Math.pow(1 + ratePerMonth, tenureInMonths) - 1);
    
    const totalAmount = emi * tenureInMonths;
    const interest = totalAmount - principal;
    
    setEmiResult(emi);
    setTotalInterest(interest);
    setTotalPayment(totalAmount);
    
    setAnimateCalculation(true);
    setTimeout(() => setAnimateCalculation(false), 1000);
  };

  // Calculate on form value changes
  useEffect(() => {
    if (loanAmount && interestRate && loanTenure) {
      calculateEMI();
    }
  }, [loanAmount, interestRate, loanTenure]);

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Calculator className="h-5 w-5 mr-2 text-sbi-blue" />
              Loan EMI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-6">
                {/* Loan Amount */}
                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="flex items-center">
                          <IndianRupee className="h-4 w-4 mr-1" />
                          Loan Amount
                        </FormLabel>
                        <div className="text-sm font-medium text-sbi-blue">
                          {formatCurrency(field.value)}
                        </div>
                      </div>
                      <FormControl>
                        <div className="space-y-3">
                          <Slider
                            min={10000}
                            max={10000000}
                            step={10000}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="py-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>₹10K</span>
                            <span>₹1Cr</span>
                          </div>
                          <Input
                            type="number"
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            value={field.value}
                            className="mt-2"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Interest Rate */}
                <FormField
                  control={form.control}
                  name="interestRate"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="flex items-center">
                          <PercentIcon className="h-4 w-4 mr-1" />
                          Interest Rate
                        </FormLabel>
                        <div className="text-sm font-medium text-sbi-blue">
                          {field.value}%
                        </div>
                      </div>
                      <FormControl>
                        <div className="space-y-3">
                          <Slider
                            min={5}
                            max={20}
                            step={0.1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="py-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>5%</span>
                            <span>20%</span>
                          </div>
                          <Input
                            type="number"
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            value={field.value}
                            step="0.1"
                            className="mt-2"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Loan Tenure */}
                <FormField
                  control={form.control}
                  name="loanTenure"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Loan Tenure (Years)
                        </FormLabel>
                        <div className="text-sm font-medium text-sbi-blue">
                          {field.value} {field.value === 1 ? 'year' : 'years'}
                        </div>
                      </div>
                      <FormControl>
                        <div className="space-y-3">
                          <Slider
                            min={1}
                            max={30}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="py-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>1 year</span>
                            <span>30 years</span>
                          </div>
                          <Input
                            type="number"
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            value={field.value}
                            className="mt-2"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="button" 
                  className="w-full bg-sbi-blue hover:bg-sbi-darkBlue"
                  onClick={calculateEMI}
                >
                  Calculate EMI
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className={cn(
          "bg-gradient-to-br from-sbi-blue to-sbi-darkBlue text-white h-full",
          animateCalculation ? "animate-pulse" : ""
        )}>
          <CardHeader>
            <CardTitle className="text-xl">Your Loan Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Monthly EMI */}
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Monthly EMI</h3>
                <div className="text-3xl font-bold">
                  {emiResult ? formatCurrency(emiResult) : '₹0'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Principal Amount */}
                <div className="p-4 bg-white/10 rounded-lg">
                  <h3 className="text-sm font-medium mb-1">Principal Amount</h3>
                  <div className="text-xl font-semibold">
                    {formatCurrency(loanAmount)}
                  </div>
                </div>

                {/* Total Interest */}
                <div className="p-4 bg-white/10 rounded-lg">
                  <h3 className="text-sm font-medium mb-1">Total Interest</h3>
                  <div className="text-xl font-semibold">
                    {totalInterest ? formatCurrency(totalInterest) : '₹0'}
                  </div>
                </div>
              </div>

              {/* Total Payment */}
              <div className="p-4 bg-white/5 border border-white/20 rounded-lg">
                <h3 className="text-sm font-medium mb-1">Total Payment (Principal + Interest)</h3>
                <div className="text-xl font-semibold">
                  {totalPayment ? formatCurrency(totalPayment) : '₹0'}
                </div>
              </div>

              <div className="text-sm text-white/70">
                <p>This is an indicative calculation. Actual values may vary based on the exact loan terms.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EMICalculator;
