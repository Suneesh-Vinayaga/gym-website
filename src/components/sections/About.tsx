import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Dumbbell, Users } from 'lucide-react';
import { ScrollAnimation } from '../shared/ScrollAnimation';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent font-headline uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                More Than Just a Gym
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                TOM FITNESS was founded on the belief that fitness is a journey, not a destination. We provide a supportive, high-energy environment for everyone, from beginners to seasoned athletes, to achieve their personal best.
            </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-foreground">
                        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                            <Dumbbell className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
                        </div>
                        <span className="font-headline">For Men: Strength & Performance</span>
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-muted-foreground">
                        Our facility is equipped with top-of-the-line strength training gear. Focus on building power, performance, and discipline with our free weights, racks, and specialized machinery.
                    </dd>
                </div>
                <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-foreground">
                        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                            <Users className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
                        </div>
                        <span className="font-headline">For Women: Community & Classes</span>
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-muted-foreground">
                        Join a vibrant community of women dedicated to health and wellness. We offer a wide range of group classes, from high-intensity interval training to yoga, in a supportive and empowering space.
                    </dd>
                </div>
            </dl>
        </div>
      </div>
    </section>
  );
}
