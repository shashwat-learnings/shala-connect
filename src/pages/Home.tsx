import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Trophy, BookOpen, ArrowRight, Quote } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "38+", label: "Years of Excellence" },
  { icon: Users, value: "2500+", label: "Students" },
  { icon: Trophy, value: "150+", label: "Awards Won" },
  { icon: BookOpen, value: "100%", label: "Board Results" },
];

const testimonials = [
  {
    quote: "Vidya Bharati has been instrumental in shaping my child's future. The teachers are dedicated and the environment is nurturing.",
    author: "Mrs. Sharma",
    role: "Parent of Class X Student",
  },
  {
    quote: "The holistic approach to education here helped me excel not just academically but also in extracurricular activities.",
    author: "Rahul Verma",
    role: "Alumni, Batch of 2020",
  },
  {
    quote: "Outstanding infrastructure and experienced faculty. My children have grown tremendously since joining this school.",
    author: "Mr. Patel",
    role: "Parent of Class V & VIII Students",
  },
];

const announcements = [
  "Admissions open for 2024-25 academic year",
  "Annual Sports Day on 15th January 2024",
  "Parent-Teacher Meeting scheduled for 20th January",
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nurturing Minds,
              <span className="block text-accent">Building Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Welcome to Vidya Bharati International School, where excellence meets tradition. 
              We are committed to providing quality education that prepares students for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/admissions">
                  Apply for Admission <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <section className="bg-accent text-accent-foreground py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold whitespace-nowrap">Latest News:</span>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {announcements.map((announcement, index) => (
                  <span key={index} className="mx-8">
                    • {announcement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-6">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of <span className="text-primary">Academic Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Established in 1985, Vidya Bharati International School has been at the forefront of 
                quality education. Our State Board affiliated curriculum, combined with modern teaching 
                methodologies, ensures that every student receives a well-rounded education.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With state-of-the-art infrastructure, experienced faculty, and a focus on both academic 
                and co-curricular excellence, we prepare our students to become leaders of tomorrow.
              </p>
              <Button asChild>
                <Link to="/about">
                  Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-bold">State Board</div>
                <div className="text-sm text-primary-foreground/80">Affiliated School</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Explore Our School
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Programs",
                description: "Discover our comprehensive curriculum from Primary to Senior Secondary",
                link: "/academics",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
              },
              {
                title: "Admissions",
                description: "Learn about our admission process and join our school family",
                link: "/admissions",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
              },
              {
                title: "Campus Life",
                description: "Explore our vibrant campus through our photo gallery",
                link: "/gallery",
                image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400",
              },
            ].map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <Card className="overflow-hidden h-full transition-shadow hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What Parents & Alumni Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-8 pb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Apply for admission today and become part of 
            the Vidya Bharati legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
