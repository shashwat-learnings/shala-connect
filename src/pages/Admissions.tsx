import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Calendar, 
  ClipboardCheck, 
  Phone, 
  Download,
  CheckCircle,
  AlertCircle,
  IndianRupee
} from "lucide-react";

const admissionProcess = [
  {
    step: 1,
    title: "Inquiry & Registration",
    description: "Visit the school or submit an online inquiry. Collect the prospectus and application form.",
  },
  {
    step: 2,
    title: "Document Submission",
    description: "Submit the completed application form along with required documents.",
  },
  {
    step: 3,
    title: "Entrance Assessment",
    description: "Students appear for an age-appropriate assessment test and interaction.",
  },
  {
    step: 4,
    title: "Result & Admission",
    description: "Shortlisted candidates are offered admission. Complete fee payment to confirm seat.",
  },
];

const documents = [
  "Birth Certificate (original + photocopy)",
  "Transfer Certificate from previous school",
  "Report Card of last two years",
  "Passport size photographs (6 copies)",
  "Aadhar Card of student",
  "Address Proof (Aadhar/Passport/Utility Bill)",
  "Parent's ID Proof",
  "Caste Certificate (if applicable)",
];

const feeStructure = [
  { class: "Nursery - KG", admission: "15,000", tuition: "3,500", annual: "57,000" },
  { class: "Classes I - V", admission: "18,000", tuition: "4,000", annual: "66,000" },
  { class: "Classes VI - VIII", admission: "20,000", tuition: "4,500", annual: "74,000" },
  { class: "Classes IX - X", admission: "22,000", tuition: "5,000", annual: "82,000" },
  { class: "Classes XI - XII", admission: "25,000", tuition: "5,500", annual: "91,000" },
];

const importantDates = [
  { event: "Application Forms Available", date: "January 15, 2024" },
  { event: "Last Date for Submission", date: "March 31, 2024" },
  { event: "Entrance Test", date: "April 10-15, 2024" },
  { event: "Result Declaration", date: "April 25, 2024" },
  { event: "Admission Confirmation Deadline", date: "May 15, 2024" },
  { event: "Session Begins", date: "June 1, 2024" },
];

const Admissions = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions 2024-25</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mb-8">
            Begin your child's journey towards excellence. Join the Vidya Bharati family and 
            give your child the gift of quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary">
              <Download className="mr-2 h-5 w-5" />
              Download Prospectus
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((item) => (
              <Card key={item.step} className="relative">
                <CardContent className="pt-8">
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2 mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Age Requirements</h4>
                    <p className="text-muted-foreground text-sm">
                      Nursery: 3+ years | LKG: 4+ years | UKG: 5+ years<br />
                      Class I: 6+ years (as on 31st March of admission year)
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Academic Requirements</h4>
                    <p className="text-muted-foreground text-sm">
                      For Classes II and above: Must have passed the previous class from a recognized school
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Transfer Cases</h4>
                    <p className="text-muted-foreground text-sm">
                      Valid Transfer Certificate from previous school is mandatory
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Required Documents</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Fee Structure</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our fee structure is designed to be affordable while maintaining the highest standards of education.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold">Class</th>
                  <th className="px-6 py-4 text-center font-semibold">Admission Fee</th>
                  <th className="px-6 py-4 text-center font-semibold">Monthly Tuition</th>
                  <th className="px-6 py-4 text-center font-semibold">Annual Total*</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                    <td className="px-6 py-4 font-medium text-foreground">{row.class}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      <span className="inline-flex items-center">
                        <IndianRupee className="w-4 h-4" />{row.admission}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      <span className="inline-flex items-center">
                        <IndianRupee className="w-4 h-4" />{row.tuition}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-foreground">
                      <span className="inline-flex items-center">
                        <IndianRupee className="w-4 h-4" />{row.annual}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            *Annual total includes tuition, books, uniform, and activity fees. Transport fees extra.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Important Dates</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between bg-background rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item.event}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our admission team is here to help. Reach out to us for any queries regarding 
            the admission process, eligibility, or fee structure.
          </p>
          <Card className="max-w-md mx-auto bg-primary-foreground/10 border-none">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-6 h-6" />
                <span className="text-xl font-semibold">+91 11 2345 6790</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Admission Office Hours: Mon - Sat, 9:00 AM - 3:00 PM
              </p>
              <Button variant="secondary" asChild>
                <Link to="/contact">
                  <ClipboardCheck className="mr-2 h-5 w-5" />
                  Contact Admission Office
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notice */}
      <section className="py-8 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertCircle className="w-6 h-6 text-accent-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-accent-foreground">
              <strong>Note:</strong> Admission is subject to availability of seats and completion of all formalities. 
              The school reserves the right to refuse admission without assigning any reason. 
              For the most updated information, please contact the admission office directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
