
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import SharedHeader from '@/components/layout/SharedHeader';

const mensFeatures = [
  "Full access to free weights",
  "Full access to machines",
  "Full access to strength zones"
];

const womensFeatures = [
    "Full gym access",
    "Exclusive community classes",
    "Supportive & empowering space"
];

export default function JoinPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SharedHeader />
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
              Become a Member
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join the TOM FITNESS community and start your journey to a stronger, healthier you. We have plans tailored for your needs.
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="mt-16 bg-card border border-border rounded-lg p-6 max-w-lg mx-auto text-center">
            <h2 className="text-lg font-semibold text-foreground">One-Time Application Fee</h2>
            <p className="text-3xl font-bold text-accent mt-2">$50.00</p>
            <p className="text-sm text-muted-foreground mt-2">
              A one-time application fee applies to all new memberships.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation>
                <Card className="flex flex-col h-full border-accent border-2 shadow-lg shadow-accent/10">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-headline">Men's Membership</CardTitle>
                        <CardDescription className="text-4xl font-bold text-foreground">$75.00 / month</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center text-muted-foreground mb-6">Full access to free weights, machines, and strength zones.</p>
                        <ul className="space-y-3">
                            {mensFeatures.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                                    <span className="text-foreground/90">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary" size="lg" className="w-full text-lg">Select Plan</Button>
                    </CardFooter>
                </Card>
            </ScrollAnimation>

            <ScrollAnimation>
                <Card className="flex flex-col h-full">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-headline">Women's Membership</CardTitle>
                        <CardDescription className="text-4xl font-bold text-foreground">$65.00 / month</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center text-muted-foreground mb-6">Full gym access, plus exclusive community classes.</p>
                         <ul className="space-y-3">
                            {womensFeatures.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                                    <span className="text-foreground/90">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="primary" size="lg" className="w-full text-lg">Select Plan</Button>
                    </CardFooter>
                </Card>
            </ScrollAnimation>
        </div>
      </main>
    </div>
  );
}
