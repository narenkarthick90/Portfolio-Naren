import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, Code2 } from "lucide-react";

export default function MiniProjects() {
  const miniProjects = [
    {
      title: "Password Generator",
      description: "A secure password generator with customizable options for length, character sets, and complexity requirements.",
      technologies: ["JavaScript", "CSS", "HTML"],
      duration: "2 hours",
      features: ["Customizable length", "Character options", "Strength meter", "Copy to clipboard"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Color Palette Generator",
      description: "Generate beautiful color palettes for design projects with various color harmony rules and export options.",
      technologies: ["React", "CSS", "Color Theory"],
      duration: "4 hours",
      features: ["Multiple color schemes", "Export formats", "Accessibility check", "Random generation"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "QR Code Generator",
      description: "Simple QR code generator for URLs, text, and contact information with customizable styling options.",
      technologies: ["JavaScript", "QR.js", "CSS"],
      duration: "3 hours",
      features: ["Multiple data types", "Custom styling", "Download options", "Error correction"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Unit Converter",
      description: "Multi-unit converter supporting length, weight, temperature, and currency with real-time calculations.",
      technologies: ["React", "API Integration", "CSS"],
      duration: "5 hours",
      features: ["Multiple categories", "Real-time conversion", "History tracking", "API integration"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Widget",
      description: "Clean weather widget showing current conditions and 5-day forecast with location detection.",
      technologies: ["JavaScript", "Weather API", "Geolocation"],
      duration: "6 hours",
      features: ["Current weather", "5-day forecast", "Location detection", "Multiple cities"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Pomodoro Timer",
      description: "Productivity timer following the Pomodoro Technique with custom intervals and progress tracking.",
      technologies: ["React", "Local Storage", "CSS Animations"],
      duration: "4 hours",
      features: ["Custom intervals", "Progress tracking", "Sound notifications", "Session history"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Markdown Previewer",
      description: "Real-time markdown editor and previewer with syntax highlighting and export functionality.",
      technologies: ["React", "Marked.js", "CodeMirror"],
      duration: "5 hours",
      features: ["Real-time preview", "Syntax highlighting", "Export options", "Template library"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Expense Tracker",
      description: "Simple expense tracking app with categorization, charts, and local data persistence.",
      technologies: ["React", "Chart.js", "Local Storage"],
      duration: "8 hours",
      features: ["Expense categorization", "Visual charts", "Data persistence", "Budget tracking"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Image Resizer",
      description: "Client-side image resizer with batch processing and multiple output formats.",
      technologies: ["JavaScript", "Canvas API", "File API"],
      duration: "4 hours",
      features: ["Batch processing", "Multiple formats", "Quality control", "Drag & drop"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6">Quick Builds</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mini Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Small, focused projects that solve specific problems or explore interesting concepts. 
            Each one built quickly to test ideas and practice new technologies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{miniProjects.length}</div>
            <div className="text-muted-foreground">Mini Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">42</div>
            <div className="text-muted-foreground">Total Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Open Source</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Code2 className="h-4 w-4 mr-1" />
                    Key Features
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                These mini projects are constantly evolving. Check out my GitHub for the latest updates 
                and feel free to contribute or suggest new ideas!
              </p>
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}