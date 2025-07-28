import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Lightbulb, Users, Rocket, Globe } from "lucide-react";

export default function Vision() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6">My Philosophy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What I Stand For</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technology should serve humanity, create meaningful connections, and solve real-world problems.
            Here's what drives me every day.
          </p>
        </div>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Human-Centered Design",
                description: "Every solution should prioritize user experience and accessibility, ensuring technology serves everyone regardless of background or ability."
              },
              {
                icon: Lightbulb,
                title: "Innovation with Purpose",
                description: "I believe in pushing boundaries not just for the sake of innovation, but to create meaningful impact and solve genuine problems."
              },
              {
                icon: Users,
                title: "Collaborative Growth",
                description: "The best solutions emerge from diverse perspectives. I value teamwork, mentorship, and learning from others."
              },
              {
                icon: Target,
                title: "Quality & Excellence",
                description: "Attention to detail and commitment to best practices ensures that every project meets the highest standards."
              },
              {
                icon: Globe,
                title: "Sustainable Technology",
                description: "Building for the future means considering environmental impact and creating solutions that stand the test of time."
              },
              {
                icon: Rocket,
                title: "Continuous Learning",
                description: "Technology evolves rapidly, and staying curious and adaptable is essential for creating cutting-edge solutions."
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <value.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">My Mission</h2>
              <p className="text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                "To leverage technology as a force for positive change, creating digital experiences that are not only 
                functional and beautiful, but also accessible, sustainable, and meaningful. I strive to bridge the gap 
                between complex technical solutions and human needs, ensuring that every line of code I write contributes 
                to a better, more connected world."
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Goals */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Goals & Aspirations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  Short-term Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Master advanced AI/ML technologies and integrate them into practical applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Contribute to open-source projects that promote accessibility and inclusion</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Build a network of like-minded developers focused on ethical technology</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Develop expertise in sustainable software development practices</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="h-6 w-6 text-primary mr-3" />
                  Long-term Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Lead a team developing technology solutions for social impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Establish a consultancy focused on ethical AI and sustainable tech</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Mentor the next generation of developers in responsible technology practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Create technology that helps address climate change and social inequality</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Let's Build Something Meaningful Together</h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                If you share similar values and are looking for a developer who cares about the impact of their work,
                I'd love to connect and explore how we can create positive change through technology.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}