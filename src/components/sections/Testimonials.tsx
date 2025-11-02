import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Joining TOM FITNESS was the best decision I've ever made for my health. The community is so supportive and the trainers are top-notch!",
    name: "Jessica Miller",
    handle: "Fitness Enthusiast",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "I've crushed all my strength goals thanks to the incredible equipment and motivating atmosphere here. This place feels like a second home.",
    name: "Mark Johnson",
    handle: "Powerlifter",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
   {
    quote: "The group classes are amazing! They are challenging, fun, and I've made so many friends. I actually look forward to my workouts now.",
    name: "Sarah Chen",
    handle: "Group Class Regular",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-accent font-headline uppercase">From Our Members</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Why They Love Us
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
              </CardContent>
              <div className="p-6 pt-0 mt-4 flex items-center gap-4">
                  <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face"/>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
