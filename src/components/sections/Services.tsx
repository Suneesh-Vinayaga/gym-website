import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Group Classes',
    description: 'High-energy classes led by expert instructors. From HIIT to Yoga, find the perfect class to motivate you.',
    image: PlaceHolderImages.find(p => p.id === 'group-classes'),
  },
  {
    title: 'Personal Training',
    description: 'Get one-on-one guidance with a personalized fitness plan tailored to your specific goals and needs.',
    image: PlaceHolderImages.find(p => p.id === 'personal-training'),
  },
  {
    title: 'Open Gym Access',
    description: 'Utilize our state-of-the-art equipment at your own pace. Our floor is open for you to pursue your routine.',
    image: PlaceHolderImages.find(p => p.id === 'open-gym'),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-accent font-headline uppercase">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                What We Offer
            </p>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
                We provide a range of services to help you achieve your fitness goals, no matter your experience level.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden flex flex-col group">
              <div className="relative h-56 w-full">
                {service.image && (
                  <Image
                    src={service.image.imageUrl}
                    alt={service.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={service.image.imageHint}
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
