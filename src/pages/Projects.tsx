import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with modern technologies, featuring user authentication, payment processing, inventory management, and an admin dashboard.",
      longDescription: "This comprehensive e-commerce platform was developed to help small businesses establish their online presence. It includes features like user registration and authentication, product catalog management, shopping cart functionality, secure payment processing through Stripe, order tracking, and a comprehensive admin dashboard for business owners.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"],
      duration: "3 months",
      teamSize: "4 developers",
      status: "Completed",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing",
        "Order management and tracking",
        "Admin dashboard with analytics",
        "Responsive design",
        "Email notifications"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for large product catalogs",
        "Creating a real-time inventory management system"
      ],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business data visualization and decision-making.",
      longDescription: "This project combines data science with web development to create an intelligent dashboard that not only displays data but also provides AI-powered insights and predictions. The system processes large datasets, applies machine learning algorithms, and presents the results in an intuitive, interactive interface.",
      technologies: ["Python", "React", "TensorFlow", "FastAPI", "PostgreSQL", "D3.js", "Docker"],
      duration: "4 months",
      teamSize: "3 developers",
      status: "Completed",
      features: [
        "Real-time data processing",
        "Machine learning predictions",
        "Interactive data visualizations",
        "Custom report generation",
        "API integration",
        "User role management",
        "Export functionality",
        "Mobile responsive design"
      ],
      challenges: [
        "Processing large datasets efficiently",
        "Implementing real-time ML predictions",
        "Creating intuitive data visualizations"
      ],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "Task Management Mobile App",
      description: "A cross-platform mobile application for team collaboration and project management with real-time synchronization and offline capabilities.",
      longDescription: "Developed as a solution for remote teams, this mobile app provides comprehensive task management features with real-time collaboration. The app works offline and syncs when connectivity is restored, ensuring teams can stay productive regardless of their internet connection status.",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage", "Push Notifications"],
      duration: "2 months",
      teamSize: "2 developers",
      status: "Completed",
      features: [
        "Cross-platform compatibility",
        "Real-time collaboration",
        "Offline functionality",
        "Push notifications",
        "File sharing",
        "Time tracking",
        "Progress visualization",
        "Team chat integration"
      ],
      challenges: [
        "Implementing offline-first architecture",
        "Optimizing performance for mobile devices",
        "Managing real-time synchronization conflicts"
      ],
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "IoT Home Automation System",
      description: "A complete IoT solution for smart home automation with web interface, mobile app, and hardware integration for controlling various home devices.",
      longDescription: "This Internet of Things project creates a complete ecosystem for home automation. It includes custom hardware integration, a web-based control panel, mobile application, and cloud services for remote access and data analytics.",
      technologies: ["React", "Node.js", "Arduino", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
      duration: "6 months",
      teamSize: "5 developers",
      status: "In Progress",
      features: [
        "Device control and monitoring",
        "Energy usage analytics",
        "Automated scheduling",
        "Voice control integration",
        "Security system integration",
        "Weather-based automation",
        "Remote access",
        "Real-time alerts"
      ],
      challenges: [
        "Integrating diverse hardware components",
        "Ensuring system security and privacy",
        "Creating reliable wireless communication"
      ],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "Social Learning Platform",
      description: "An educational platform that combines video content, interactive exercises, and peer-to-peer learning with gamification elements.",
      longDescription: "This platform revolutionizes online learning by incorporating social elements and gamification. Students can learn through videos, practice with interactive exercises, collaborate with peers, and earn achievements while tracking their progress.",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Socket.io", "AWS S3"],
      duration: "5 months",
      teamSize: "6 developers",
      status: "Completed",
      features: [
        "Video streaming and player",
        "Interactive coding exercises",
        "Peer collaboration tools",
        "Progress tracking",
        "Achievement system",
        "Discussion forums",
        "Live video sessions",
        "Content creation tools"
      ],
      challenges: [
        "Implementing scalable video streaming",
        "Creating real-time collaboration features",
        "Designing effective gamification mechanics"
      ],
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "A secure, transparent voting system built on blockchain technology with cryptographic verification and real-time result tracking.",
      longDescription: "This innovative voting system leverages blockchain technology to ensure transparency, security, and immutability in the voting process. The system provides cryptographic verification of votes while maintaining voter privacy and enabling real-time result tracking.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "IPFS"],
      duration: "4 months",
      teamSize: "3 developers",
      status: "Completed",
      features: [
        "Blockchain-based vote storage",
        "Cryptographic vote verification",
        "Anonymous voting",
        "Real-time result tracking",
        "Voter authentication",
        "Audit trail",
        "Mobile compatibility",
        "Result visualization"
      ],
      challenges: [
        "Ensuring voter privacy on public blockchain",
        "Optimizing gas costs for transactions",
        "Creating user-friendly blockchain interactions"
      ],
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6">Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my most significant projects showcasing different technologies, 
            problem-solving approaches, and collaboration experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
            <div className="text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2 Years</div>
            <div className="text-muted-foreground">Development Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Lines of Code</div>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-card p-8 flex items-center justify-center min-h-[300px]">
                    <div className="text-8xl opacity-30">🚀</div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {project.teamSize}
                          </div>
                          <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <Award className="h-8 w-8 text-primary" />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.teamSize}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
