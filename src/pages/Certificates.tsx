import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building, Star, Download } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      type: "Professional Certification",
      date: "March 2024",
      validUntil: "March 2027",
      credentialId: "AWS-CSA-2024-001",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      description: "Validates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "🏆",
      featured: true
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      type: "Professional Certification",
      date: "January 2024",
      validUntil: "January 2026",
      credentialId: "GCP-PD-2024-001",
      skills: ["Google Cloud Platform", "Kubernetes", "Microservices", "DevOps"],
      description: "Demonstrates ability to build scalable and highly available applications using Google Cloud technologies.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "☁️",
      featured: true
    },
    {
      title: "Meta React Developer Professional Certificate",
      issuer: "Meta via Coursera",
      type: "Professional Certificate",
      date: "December 2023",
      validUntil: "Lifetime",
      credentialId: "META-REACT-2023-001",
      skills: ["React", "JavaScript", "JSX", "React Native", "Testing"],
      description: "Comprehensive program covering React development from fundamentals to advanced concepts including React Native.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "⚛️",
      featured: true
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University via Coursera",
      type: "Specialization",
      date: "October 2023",
      validUntil: "Lifetime",
      credentialId: "STANFORD-ML-2023-001",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
      description: "Deep dive into machine learning algorithms, neural networks, and practical implementation using modern tools.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "🤖",
      featured: false
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      type: "Professional Certification",
      date: "September 2023",
      validUntil: "September 2026",
      credentialId: "CKA-2023-001",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
      description: "Hands-on certification demonstrating skills in Kubernetes administration and troubleshooting.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "🚢",
      featured: false
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      type: "Professional Certification",
      date: "August 2023",
      validUntil: "August 2026",
      credentialId: "MONGO-DEV-2023-001",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      description: "Validates expertise in MongoDB development, including data modeling, indexing, and aggregation pipelines.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "🍃",
      featured: false
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM via edX",
      type: "Professional Certificate",
      date: "July 2023",
      validUntil: "Lifetime",
      credentialId: "IBM-CYBER-2023-001",
      skills: ["Cybersecurity", "Risk Assessment", "Incident Response", "Security Tools"],
      description: "Comprehensive introduction to cybersecurity principles, threat analysis, and security best practices.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "🔒",
      featured: false
    },
    {
      title: "Agile Development Specialization",
      issuer: "University of Virginia via Coursera",
      type: "Specialization",
      date: "June 2023",
      validUntil: "Lifetime",
      credentialId: "UVA-AGILE-2023-001",
      skills: ["Agile Methodology", "Scrum", "Project Management", "Team Collaboration"],
      description: "Complete specialization covering agile principles, scrum framework, and effective project management practices.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "🏃",
      featured: false
    },
    {
      title: "Full-Stack Web Development Bootcamp",
      issuer: "General Assembly",
      type: "Bootcamp Certificate",
      date: "March 2023",
      validUntil: "Lifetime",
      credentialId: "GA-FSWD-2023-001",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "React", "SQL"],
      description: "Intensive 12-week program covering full-stack web development with hands-on projects and industry best practices.",
      verificationUrl: "#",
      certificateUrl: "#",
      badge: "💻",
      featured: false
    }
  ];

  const featuredCertificates = certificates.filter(cert => cert.featured);
  const otherCertificates = certificates.filter(cert => !cert.featured);

  const stats = {
    total: certificates.length,
    professional: certificates.filter(c => c.type === "Professional Certification").length,
    specializations: certificates.filter(c => c.type === "Specialization").length,
    bootcamps: certificates.filter(c => c.type === "Bootcamp Certificate").length
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6">Continuous Learning</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A commitment to continuous learning and professional development through industry-recognized 
            certifications and specialized training programs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.total}</div>
            <div className="text-muted-foreground">Total Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.professional}</div>
            <div className="text-muted-foreground">Professional Certs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.specializations}</div>
            <div className="text-muted-foreground">Specializations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Skills Validated</div>
          </div>
        </div>

        {/* Featured Certificates */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Star className="h-8 w-8 text-primary mr-3" />
            Featured Certifications
          </h2>
          <div className="space-y-8">
            {featuredCertificates.map((cert, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-3 bg-gradient-card p-8 flex flex-col items-center justify-center text-center min-h-[250px]">
                    <div className="text-6xl mb-4">{cert.badge}</div>
                    <div className="text-2xl font-bold mb-2">{cert.title}</div>
                    <div className="text-primary font-medium">{cert.issuer}</div>
                  </div>
                  <div className="lg:col-span-9 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Issued {cert.date}
                          </div>
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {cert.issuer}
                          </div>
                        </div>
                        <Badge className="mb-4">{cert.type}</Badge>
                      </div>
                      <Award className="h-8 w-8 text-primary" />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium mb-3">Skills Validated</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Certificate Details</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div>Credential ID: {cert.credentialId}</div>
                          <div>Valid Until: {cert.validUntil}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Certificates */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCertificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{cert.badge}</div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  <Badge variant="outline" className="w-fit mx-auto mt-2">
                    {cert.type}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Valid until: {cert.validUntil}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" asChild className="flex-1">
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-muted-foreground mb-6">
                These certifications represent my commitment to staying current with technology trends 
                and best practices. I'm always pursuing new learning opportunities to enhance my skills.
              </p>
              <p className="text-sm text-muted-foreground">
                All certificates can be verified through their respective issuing organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
