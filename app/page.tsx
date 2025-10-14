import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClockIcon, UsersIcon, VideoIcon } from "lucide-react"

export default function CapstonePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold tracking-tight text-balance"> Husky Rover Sensor Data - Capstone Project</h1>
          <p className="mt-2 text-lg text-muted-foreground">Team 5 • Fall 2025</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-balance">Project Overview</h2>
          <Card>
            <CardHeader>
              <CardTitle>Husky Rover Sensor Data</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Autonomous vehicles depend on accurate sensor data to navigate safely. When this data is corrupted or falsified—a problem known as data poisoning—vehicles can make unsafe decisions. 

Our project focuses on improving the reliability of the ClearPath Husky Unmanned Ground Vehicle (UGV), which operates on the Robot Operating System (ROS). Using datasets that include ROS bag files, CAN bus logs, and system outputs, we will reconstruct vehicle behavior, identify anomalies, and explore methods to detect and correct false sensor inputs. 

The goal is to ensure the Husky can continue operating based on the true state of its environment, even when faced with corrupted or misleading data. Because many autonomous systems use ROS, the methods we develop can also be applied to other unmanned vehicles, contributing to safer and more trustworthy autonomy.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">PyTorch</Badge>
                <Badge variant="secondary">Pandas</Badge>
                <Badge variant="secondary">Scikit-learn</Badge>
                <Badge variant="secondary">Tesnorflow</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Numpy</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-balance">Team Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative w-full h-64 bg-muted overflow-hidden rounded-t-lg">
                <img 
                    src="./IMG_3094.JPG"
                  alt="Team Member 1" 
                  className="w-full h-full object-contain object-center" 
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Joseph Tshisau</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data Analysis/ UI & UX
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full h-64 bg-muted overflow-hidden rounded-t-lg">
                <img 
                    src="./IMG_4538.jpg"
                  alt="Team Member 2" 
                  className="w-full h-full object-contain object-center" 
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Delphin Iradukunda</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data Analysis Research
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full h-64 bg-muted overflow-hidden rounded-t-lg">
                <img 
                    src="./profile-picture.jpg"
                  alt="Team Member 3" 
                  className="w-full h-full object-contain object-center" 
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Noah Keung</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI/ML Engineer
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full h-64 bg-muted overflow-hidden rounded-t-lg">
                <img 
                    src="./F11D9EF8-6526-4E4E-BAD1-D5B69C5BDDFBScreenshot (59).JPEG"
                  alt="Team Member 4" 
                  className="w-full h-full object-contain object-center" 
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Omotoyosi Adams</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data Engineer
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full h-64 bg-muted overflow-hidden rounded-t-lg">
                <img 
                    src="./1744594149201.jpg"
                  alt="Team Member 5" 
                  className="w-full h-full object-contain object-center" 
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Max Heitzman</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI Integration & Communications Lead
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-balance">Progress Updates</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {/* Update 1 */}
                <div className="relative pl-8 border-l-2 border-primary pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold">Stage 1: Project Kickoff</h3>
                      <Badge>Current</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">August - October 2025</p>
                    <p className="text-foreground leading-relaxed pt-2">
                      Initial project planning, team formation, and requirements gathering. 
                      Conducting interviews and discovery to understand the project. 
                      Collecting and analyzing information, discussing findings, and identifying objectives from documentation and datasets.
                    </p>
                  </div>
                </div>

                {/* Update 2 - Placeholder */}
                <div className="relative pl-8 border-l-2 border-border pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-muted-foreground">Stage 2: Development Phase 1</h3>
                    <p className="text-sm text-muted-foreground">October 2025</p>
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      Updates will be added here as the project progresses.
                    </p>
                  </div>
                </div>

                {/* Update 3 - Placeholder */}
                <div className="relative pl-8 border-l-2 border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-muted-foreground">Stage 3: Development Phase 2</h3>
                    <p className="text-sm text-muted-foreground">TO BE DECIDED</p>
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      Updates will be added here as the project progresses.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interview Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-balance">Interview Schedule</h2>
          <div className="space-y-4">
              {/* Interview 1 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Interview with CoNetrix Security Professional Jaedon Pachicano</CardTitle>
                    <Badge variant="secondary">Sep 25</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>September 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <VideoIcon className="h-4 w-4" />
                    <span>Zoom Meeting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewee:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Jaedon Pachicano (Security Support Technician, CoNetrix / Security Researcher, AC's Red Team)</li>
                    </ul>
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewers:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Max Heitzman (Student Interviewer, Texas Tech University)</li>
                      <li>• Noah (Student Interviewer, Texas Tech University)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interview 5 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Interview with Ynes Ineza & Courtney Baker</CardTitle>
                    <Badge variant="secondary">Oct 3</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>October 3, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <VideoIcon className="h-4 w-4" />
                    <span>Zoom Meeting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewees:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Ynes Ineza — PhD Student</li>
                      <li>• Courtney Baker — PhD Student; Drone attack/defense research</li>
                    </ul>
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewers:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Joseph Tshisau</li>
                      <li>• Delphin Iradukunda</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interview 2 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Interview with Abdurrhman Suliman</CardTitle>
                    <Badge variant="secondary">Sep 25</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>September 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <VideoIcon className="h-4 w-4" />
                    <span>Zoom Meeting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewee:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Abdurrhman Suliman, Security Technician</li>
                    </ul>
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewers:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Max Heitzman & Noah</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interview 3 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Interview with Dr. Stas Tiomkin</CardTitle>
                    <Badge variant="outline">Sep 25</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>Interview completed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewee:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Dr. Stas Tiomkin</li>
                    </ul>
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewers:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Noah & Max Heitzman</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interview 4 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Interview with Bipin Chhetri</CardTitle>
                    <Badge variant="outline">Sep 25</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>Interview completed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewee:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Bipin Chhetri, TTU CS (NLP + security/data privacy)</li>
                    </ul>
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Interviewers:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Noah & Max Heitzman</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
          </div>
        </section>

        {/* Resources/Links */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-balance">Resources</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">GitHub Repository</p>
                    <p className="text-sm text-muted-foreground">View source code</p>
                  </div>
                </a>


                <a
                  href="https://github.com/joMusangu/capstone_website/blob/main/public/IEEE_Conference_Template.pdf"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Project Documentation (SRS)</p>
                    <p className="text-sm text-muted-foreground">Technical specs for the Husky Rover Sensor </p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Capstone Project 2025 
          </p>
        </div>
      </footer>
    </div>
  )
}
