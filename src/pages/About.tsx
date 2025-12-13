import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building character through honesty and ethical behavior",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Welcoming students from all backgrounds and abilities",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Embracing modern teaching methods and technology",
  },
];

const infrastructure = [
  "Smart Classrooms with Interactive Boards",
  "Well-equipped Science & Computer Labs",
  "Library with 15,000+ Books",
  "Sports Complex & Swimming Pool",
  "Auditorium with 500 Seating Capacity",
  "Safe & Secure Campus with CCTV",
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Discover the legacy, vision, and values that make Vidya Bharati International School 
            a premier institution for quality education.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our History</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 1985 by visionary educators, Vidya Bharati International School began its 
                journey with a simple mission: to provide quality education that nurtures both mind and character.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over nearly four decades, we have grown from a small institution with just 50 students 
                to one of the most respected schools in the region, with over 2,500 students and a 
                legacy of academic excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our alumni have gone on to excel in various fields - from medicine and engineering to 
                arts and civil services - carrying forward the values instilled in them at Vidya Bharati.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600"
                alt="School building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that nurtures globally competent individuals 
                  with strong moral values, equipped to contribute meaningfully to society and lead 
                  fulfilling lives.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide holistic education that develops intellectual curiosity, critical thinking, 
                  and creativity while fostering respect for cultural heritage and environmental consciousness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                alt="Principal"
                className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-2">Principal's Message</h2>
              <p className="text-primary font-medium mb-6">Dr. Rajesh Kumar, M.Ed., Ph.D.</p>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  "Welcome to Vidya Bharati International School, where we believe that every child 
                  is unique and possesses unlimited potential waiting to be discovered.
                </p>
                <p className="mb-4 leading-relaxed">
                  At our institution, we go beyond textbooks to provide an education that prepares 
                  students for life. Our dedicated faculty, modern infrastructure, and comprehensive 
                  curriculum work together to create an environment where students can thrive academically, 
                  socially, and emotionally.
                </p>
                <p className="mb-4 leading-relaxed">
                  We are committed to nurturing not just scholars, but responsible citizens who will 
                  contribute positively to society. I invite you to join our school family and be part 
                  of this beautiful journey of learning and growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">World-Class Infrastructure</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our campus is designed to provide the best learning environment for our students. 
                With modern facilities and thoughtful amenities, we ensure that every aspect of 
                student life is well-supported.
              </p>
              <ul className="space-y-3">
                {infrastructure.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300"
                alt="Library"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=300"
                alt="Building"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300"
                alt="Lab"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300"
                alt="Sports"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Affiliations & Accreditations</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We are proudly affiliated with the State Board of Education and maintain the highest 
            standards of educational excellence.
          </p>
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 rounded-lg px-8 py-4">
            <Award className="w-12 h-12" />
            <div className="text-left">
              <div className="font-bold text-xl">State Board Affiliated</div>
              <div className="text-primary-foreground/80">Recognized by Department of Education</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
