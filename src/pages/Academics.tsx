import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Palette, Trophy, Beaker, Calculator, Globe, Music, Dumbbell } from "lucide-react";

const sections = {
  primary: {
    title: "Primary Section (Classes I-V)",
    description: "Building strong foundations through activity-based learning and nurturing curiosity.",
    subjects: [
      "English Language & Literature",
      "Hindi",
      "Mathematics",
      "Environmental Studies",
      "General Knowledge",
      "Computer Basics",
      "Art & Craft",
      "Physical Education",
    ],
    highlights: [
      "Activity-based learning methodology",
      "Focus on reading and numeracy skills",
      "Introduction to digital learning",
      "Regular parent-teacher interactions",
    ],
  },
  middle: {
    title: "Middle Section (Classes VI-VIII)",
    description: "Developing critical thinking and analytical skills through comprehensive curriculum.",
    subjects: [
      "English",
      "Hindi",
      "Sanskrit/French",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer Science",
      "Art & Music",
    ],
    highlights: [
      "Hands-on science experiments",
      "Introduction to third language",
      "Project-based assessments",
      "Career awareness programs",
    ],
  },
  secondary: {
    title: "Secondary Section (Classes IX-X)",
    description: "Preparing students for board examinations with focused academic rigor.",
    subjects: [
      "English",
      "Hindi/Sanskrit",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science",
      "Information Technology",
    ],
    highlights: [
      "Board exam preparation",
      "Regular mock tests",
      "Remedial classes for weak areas",
      "Career counseling sessions",
    ],
  },
  senior: {
    title: "Senior Secondary (Classes XI-XII)",
    description: "Specialized streams for higher education and competitive exam preparation.",
    streams: [
      {
        name: "Science Stream",
        subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English", "Computer Science/Physical Education"],
      },
      {
        name: "Commerce Stream",
        subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics/Informatics Practices"],
      },
      {
        name: "Arts Stream",
        subjects: ["History", "Political Science", "Economics", "English", "Geography/Psychology"],
      },
    ],
    highlights: [
      "Stream-specific faculty",
      "Competitive exam coaching",
      "University guidance",
      "Internship opportunities",
    ],
  },
};

const extracurricular = [
  { icon: Palette, title: "Arts & Crafts", description: "Painting, sketching, clay modeling, and creative arts" },
  { icon: Music, title: "Music & Dance", description: "Classical, western, and folk music and dance forms" },
  { icon: Dumbbell, title: "Sports", description: "Cricket, football, basketball, athletics, and more" },
  { icon: Trophy, title: "Competitions", description: "Quiz, debate, elocution, and science olympiads" },
];

const Academics = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Comprehensive curriculum designed to nurture academic excellence from primary to senior secondary, 
            following the State Board standards.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Curriculum</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our State Board affiliated curriculum is designed to provide a strong academic foundation 
              while developing critical thinking and life skills.
            </p>
          </div>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="middle">Middle</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
              <TabsTrigger value="senior">Senior Secondary</TabsTrigger>
            </TabsList>

            {Object.entries(sections).map(([key, section]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                    <p className="text-muted-foreground">{section.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-primary" />
                          {"streams" in section ? "Available Streams" : "Subjects Offered"}
                        </h4>
                        {"streams" in section ? (
                          <div className="space-y-4">
                            {section.streams.map((stream, index) => (
                              <div key={index} className="bg-muted/50 rounded-lg p-4">
                                <h5 className="font-medium text-foreground mb-2">{stream.name}</h5>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {stream.subjects.map((subject, idx) => (
                                    <li key={idx}>• {subject}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {section.subjects.map((subject, index) => (
                              <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                {subject}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-primary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {section.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-2 h-2 bg-accent rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Teaching Methodology</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe in a balanced approach that combines traditional teaching methods with 
                modern educational technology. Our teachers are trained to use interactive techniques 
                that make learning engaging and effective.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Beaker, title: "Experiential Learning", desc: "Hands-on experiments and real-world applications" },
                  { icon: Calculator, title: "Conceptual Understanding", desc: "Focus on understanding rather than rote learning" },
                  { icon: Globe, title: "Digital Integration", desc: "Smart classrooms and e-learning resources" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"
                alt="Classroom teaching"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Assessment & Evaluation</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">FA</div>
                <h3 className="font-semibold text-foreground mb-2">Formative Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous evaluation through class tests, projects, and assignments
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">SA</div>
                <h3 className="font-semibold text-foreground mb-2">Summative Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Term-end examinations to evaluate comprehensive understanding
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">CCE</div>
                <h3 className="font-semibold text-foreground mb-2">Continuous Evaluation</h3>
                <p className="text-sm text-muted-foreground">
                  Holistic assessment including co-curricular activities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extra-curricular */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Beyond Academics</h2>
          <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            We believe in holistic development. Our students have ample opportunities to explore 
            their talents and interests beyond the classroom.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurricular.map((item, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-lg p-6 text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
