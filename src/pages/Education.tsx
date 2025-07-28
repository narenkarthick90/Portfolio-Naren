import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MapPin, Award, Book, Users, Trophy, ExternalLink } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "2021",
      endDate: "2023",
      gpa: "3.9/4.0",
      status: "Graduated",
      description: "Advanced coursework in AI/ML with focus on deep learning, natural language processing, and computer vision. Thesis on 'Efficient Neural Architecture Search for Edge Computing'.",
      coursework: [
        "Deep Learning & Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "Machine Learning Systems",
        "Reinforcement Learning",
        "Data Mining & Analytics"
      ],
      achievements: [
        "Dean's List - All Semesters",
        "Graduate Research Assistant",
        "Outstanding Thesis Award",
        "AI Conference Paper Publication"
      ],
      projects: [
        "Neural Architecture Search Framework",
        "Real-time Object Detection System",
        "Sentiment Analysis for Social Media"
      ],
      honors: ["Magna Cum Laude", "Phi Beta Kappa"],
      type: "Graduate",
      featured: true
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      specialization: "Full-Stack Development",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2017",
      endDate: "2021",
      gpa: "3.8/4.0",
      status: "Graduated",
      description: "Comprehensive software engineering program with emphasis on full-stack development, software design patterns, and project management.",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering Principles",
        "Database Systems",
        "Web Development",
        "Operating Systems",
        "Computer Networks"
      ],
      achievements: [
        "Dean's List - 6 Semesters",
        "Programming Contest Winner",
        "Student Body Vice President",
        "Undergraduate Research Scholar"
      ],
      projects: [
        "Campus Event Management System",
        "Mobile Learning Platform",
        "Distributed File Storage System"
      ],
      honors: ["Summa Cum Laude", "Golden Key Honor Society"],
      type: "Undergraduate",
      featured: true
    },
    {
      degree: "High School Diploma",
      specialization: "STEM Focus",
      institution: "Lincoln High School",
      location: "San Francisco, CA",
      startDate: "2013",
      endDate: "2017",
      gpa: "4.0/4.0",
      status: "Graduated",
      description: "Rigorous STEM-focused curriculum with advanced placement courses in mathematics, computer science, and physics.",
      coursework: [
        "AP Computer Science A",
        "AP Calculus BC",
        "AP Physics C",
        "AP Statistics",
        "AP Chemistry",
        "Advanced Programming"
      ],
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "Science Fair State Champion",
        "Math Olympiad Regional Winner"
      ],
      projects: [
        "School Management Web App",
        "Physics Simulation Software",
        "Computer Science Tutoring Program"
      ],
      honors: ["National Honor Society", "California Scholarship Federation"],
      type: "High School",
      featured: false
    }
  ];

  const additionalEducation = [
    {
      title: "Full-Stack Web Development Bootcamp",
      provider: "General Assembly",
      duration: "12 weeks",
      year: "2020",
      description: "Intensive program covering modern web development technologies and best practices.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Git"]
    },
    {
      title: "Machine Learning Engineering",
      provider: "Coursera Specialization",
      duration: "6 months",
      year: "2022",
      description: "Comprehensive ML engineering curriculum from data preprocessing to model deployment.",
      skills: ["Python", "TensorFlow", "MLOps", "Docker", "Kubernetes"]
    },
    {
      title: "AWS Solutions Architecture",
      provider: "AWS Training",
      duration: "8 weeks",
      year: "2023",
      description: "Cloud architecture design patterns and AWS service implementation strategies.",
      skills: ["AWS", "Cloud Architecture", "DevOps", "Serverless", "Security"]
    }
  ];

  const skills = {
    programming: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "R"],
    frameworks: ["React", "Node.js", "Django", "Spring Boot", "TensorFlow", "PyTorch"],
    tools: ["Git", "Docker", "Kubernetes", "AWS", "GCP", "Jenkins", "MongoDB"],
    concepts: ["Machine Learning", "Data Structures", "Algorithms", "System Design", "DevOps"]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6">Academic Journey</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Education & Learning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive educational foundation in computer science and software engineering, 
            complemented by continuous learning and professional development.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Degrees Earned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3.85</div>
            <div className="text-muted-foreground">Overall GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Courses Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Academic Awards</div>
          </div>
        </div>

        {/* Formal Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            Formal Education
          </h2>
          <div className="space-y-8">
            {education.filter(edu => edu.featured).map((edu, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 bg-gradient-card p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">{edu.specialization}</p>
                      <p className="text-lg font-semibold mb-1">{edu.institution}</p>
                      <div className="flex items-center justify-center text-muted-foreground text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center justify-center text-muted-foreground text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                      <Badge className="mb-2">GPA: {edu.gpa}</Badge>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {edu.honors.map((honor) => (
                          <Badge key={honor} variant="outline" className="text-xs">
                            {honor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium mb-3 flex items-center">
                          <Book className="h-4 w-4 mr-2" />
                          Key Coursework
                        </h4>
                        <div className="space-y-1">
                          {edu.coursework.map((course) => (
                            <div key={course} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 flex items-center">
                          <Trophy className="h-4 w-4 mr-2" />
                          Achievements
                        </h4>
                        <div className="space-y-1">
                          {edu.achievements.map((achievement) => (
                            <div key={achievement} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Notable Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.projects.map((project) => (
                          <Badge key={project} variant="secondary" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Continuing Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalEducation.map((course, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.provider}</span>
                    <span>{course.year}</span>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {course.duration}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills Developed</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-1 mb-1 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-card border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground mb-6">
                My educational journey has provided a strong foundation in computer science principles, 
                software engineering practices, and emerging technologies. This academic background, 
                combined with practical experience, enables me to tackle complex technical challenges.
              </p>
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Academic Transcripts
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}