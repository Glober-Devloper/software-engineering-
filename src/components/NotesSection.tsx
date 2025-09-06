import React, { useState } from 'react';
import { Book, Clock, CheckCircle, ArrowRight, FileText, Download, Bookmark, Search } from 'lucide-react';

interface NotesSectionProps {
  selectedUnit: number;
  units: Array<{ id: number; title: string; hours: number; topics: string[] }>;
  onSelectUnit: (unit: number) => void;
}

const NotesSection: React.FC<NotesSectionProps> = ({ selectedUnit, units, onSelectUnit }) => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('intro');

  const getUnitContent = (unitId: number) => {
    switch (unitId) {
      case 1:
        return {
          title: "Software Engineering Concepts",
          sections: [
            {
              id: 'intro',
              title: 'Introduction to Software Engineering',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">What is Software Engineering?</h3>
                  <p class="text-gray-700 leading-relaxed">Software Engineering is a systematic, disciplined, and measurable approach to the development, operation, and maintenance of software systems. It involves applying engineering principles to software development to create high-quality, reliable, and maintainable software products.</p>
                  
                  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h4 class="text-lg font-semibold text-blue-900 mb-3">Key Characteristics:</h4>
                    <ul class="space-y-2 text-blue-800">
                      <li class="flex items-start"><span class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span><strong>Systematic Approach:</strong> Following well-defined methodologies and processes</li>
                      <li class="flex items-start"><span class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span><strong>Disciplined:</strong> Adhering to standards and best practices</li>
                      <li class="flex items-start"><span class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span><strong>Measurable:</strong> Using metrics to track progress and quality</li>
                    </ul>
                  </div>
                  
                  <h4 class="text-xl font-semibold text-gray-900 mb-3">Software Components:</h4>
                  <p class="text-gray-700 mb-4">Software systems consist of various components that work together:</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 class="font-semibold text-purple-600 mb-2">Programs</h5>
                      <p class="text-sm text-gray-600">Computer instructions that perform specific tasks</p>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 class="font-semibold text-green-600 mb-2">Documentation</h5>
                      <p class="text-sm text-gray-600">User manuals, technical specifications, and maintenance guides</p>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 class="font-semibold text-orange-600 mb-2">Data</h5>
                      <p class="text-sm text-gray-600">Information processed by the software</p>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 class="font-semibold text-red-600 mb-2">Configuration Files</h5>
                      <p class="text-sm text-gray-600">Settings and parameters that control software behavior</p>
                    </div>
                  </div>
                  
                  <h4 class="text-xl font-semibold text-gray-900 mb-3">Software Quality Attributes:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                      <h5 class="font-semibold text-blue-700 mb-3 text-lg">Functional Attributes</h5>
                      <ul class="space-y-2 text-blue-600">
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Correctness</li>
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Completeness</li>
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Consistency</li>
                      </ul>
                    </div>
                    <div class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                      <h5 class="font-semibold text-green-700 mb-3 text-lg">Non-Functional Attributes</h5>
                      <ul class="space-y-2 text-green-600">
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Reliability</li>
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Performance</li>
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Usability</li>
                        <li class="flex items-center"><CheckCircle class="w-4 h-4 mr-2" /> Maintainability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              `
            },
            {
              id: 'crisis',
              title: 'Software Crisis',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Understanding Software Crisis</h3>
                  <p class="text-gray-700 leading-relaxed">The Software Crisis refers to the difficulties encountered in developing large, complex software systems within time and budget constraints while maintaining quality. This crisis emerged in the 1960s and continues to affect software development today.</p>
                  
                  <div class="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                    <h4 class="text-lg font-semibold text-red-900 mb-4">Causes of Software Crisis:</h4>
                    <div class="space-y-3">
                      <div class="flex items-start">
                        <span class="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong class="text-red-800">Larger Problems:</strong>
                          <p class="text-red-700 text-sm">Increased complexity of software systems beyond traditional engineering approaches</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <span class="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong class="text-red-800">Progress in Hardware:</strong>
                          <p class="text-red-700 text-sm">Hardware advances outpacing software development methodologies</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <span class="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong class="text-red-800">Lack of Adequate Training:</strong>
                          <p class="text-red-700 text-sm">Insufficient skilled developers and proper training programs</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <span class="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong class="text-red-800">Increasing Demand:</strong>
                          <p class="text-red-700 text-sm">Growing need for software in various domains and industries</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <span class="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong class="text-red-800">Low Productivity:</strong>
                          <p class="text-red-700 text-sm">Inefficient development processes and lack of standardization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                    <h4 class="text-lg font-semibold text-green-900 mb-4">Solutions to Software Crisis:</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-2">Organized Development Process</h5>
                        <p class="text-sm text-green-600">Following structured methodologies like SDLC models</p>
                      </div>
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-2">Use of CASE Tools</h5>
                        <p class="text-sm text-green-600">Computer-Aided Software Engineering tools for automation</p>
                      </div>
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-2">Reusable Components</h5>
                        <p class="text-sm text-green-600">Building modular, reusable code libraries</p>
                      </div>
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-2">Better Training</h5>
                        <p class="text-sm text-green-600">Improving developer skills and knowledge</p>
                      </div>
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-2">Quality Assurance</h5>
                        <p class="text-sm text-green-600">Implementing comprehensive testing strategies</p>
                      </div>
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-2">Project Management</h5>
                        <p class="text-sm text-green-600">Better planning, monitoring, and control techniques</p>
                      </div>
                    </div>
                  </div>
                </div>
              `
            },
            {
              id: 'sdlc',
              title: 'Software Development Life Cycle (SDLC)',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">SDLC Models Overview</h3>
                  <p class="text-gray-700 leading-relaxed">SDLC models provide a structured approach to software development, defining phases and activities for creating high-quality software. Each model has its own advantages and is suitable for different types of projects.</p>
                  
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-blue-900 mb-4">1. Classical Waterfall Model</h4>
                    <p class="text-blue-800 mb-4">A linear sequential approach where each phase must be completed before the next begins.</p>
                    
                    <div class="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                      <h5 class="font-semibold text-blue-700 mb-3">Phases:</h5>
                      <div class="space-y-3">
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                          <div>
                            <strong class="text-blue-900">Requirement Analysis:</strong>
                            <p class="text-sm text-blue-700">Gathering and documenting user requirements</p>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                          <div>
                            <strong class="text-blue-900">System Design:</strong>
                            <p class="text-sm text-blue-700">Creating system architecture and detailed design</p>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                          <div>
                            <strong class="text-blue-900">Implementation:</strong>
                            <p class="text-sm text-blue-700">Writing code based on design specifications</p>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                          <div>
                            <strong class="text-blue-900">Testing:</strong>
                            <p class="text-sm text-blue-700">Verifying software functionality and quality</p>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</div>
                          <div>
                            <strong class="text-blue-900">Deployment:</strong>
                            <p class="text-sm text-blue-700">Installing software in production environment</p>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</div>
                          <div>
                            <strong class="text-blue-900">Maintenance:</strong>
                            <p class="text-sm text-blue-700">Ongoing support, updates, and enhancements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h6 class="font-semibold text-green-700 mb-2">Advantages:</h6>
                        <ul class="text-sm text-green-600 space-y-1">
                          <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-2" /> Simple and easy to understand</li>
                          <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-2" /> Well-defined phases and deliverables</li>
                          <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-2" /> Good for small, well-understood projects</li>
                          <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-2" /> Easy to manage and track progress</li>
                        </ul>
                      </div>
                      <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h6 class="font-semibold text-red-700 mb-2">Disadvantages:</h6>
                        <ul class="text-sm text-red-600 space-y-1">
                          <li class="flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> No early prototypes or feedback</li>
                          <li class="flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> High risk and uncertainty</li>
                          <li class="flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Not suitable for complex projects</li>
                          <li class="flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Difficult to accommodate changes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-purple-900 mb-4">2. Iterative Waterfall Model</h4>
                    <p class="text-purple-800 mb-4">An enhancement of the classical waterfall model that allows feedback between phases.</p>
                    <div class="bg-white border border-purple-200 rounded-lg p-4">
                      <h5 class="font-semibold text-purple-700 mb-2">Key Features:</h5>
                      <ul class="text-sm text-purple-600 space-y-1">
                        <li class="flex items-center"><ArrowRight class="w-3 h-3 mr-2" /> Feedback loops between phases</li>
                        <li class="flex items-center"><ArrowRight class="w-3 h-3 mr-2" /> Allows revisiting previous phases</li>
                        <li class="flex items-center"><ArrowRight class="w-3 h-3 mr-2" /> Better error detection and correction</li>
                        <li class="flex items-center"><ArrowRight class="w-3 h-3 mr-2" /> More flexible than classical waterfall</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-orange-900 mb-4">3. Prototype Model</h4>
                    <p class="text-orange-800 mb-4">Involves building a working model of the system to better understand requirements.</p>
                    <div class="bg-white border border-orange-200 rounded-lg p-4">
                      <h5 class="font-semibold text-orange-700 mb-3">Process Steps:</h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <div class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                          <span class="text-sm text-orange-700">Requirement gathering and analysis</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                          <span class="text-sm text-orange-700">Quick design and prototype development</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                          <span class="text-sm text-orange-700">Customer evaluation and feedback</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
                          <span class="text-sm text-orange-700">Refine requirements based on feedback</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">5</div>
                          <span class="text-sm text-orange-700">Final system development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `
            },
            {
              id: 'management',
              title: 'Software Project Management',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Software Project Management</h3>
                  <p class="text-gray-700 leading-relaxed">Managing software projects involves planning, organizing, and controlling resources to achieve specific software development goals within time, budget, and quality constraints.</p>
                  
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-blue-900 mb-4">Size Estimation Techniques</h4>
                    
                    <div class="space-y-6">
                      <div class="bg-white border border-blue-200 rounded-lg p-4">
                        <h5 class="font-semibold text-blue-700 mb-3">1. Lines of Code (LOC)</h5>
                        <p class="text-blue-600 text-sm mb-3">A simple metric that counts the number of lines of source code in a program.</p>
                        
                        <div class="bg-gray-50 border rounded p-3 mb-3">
                          <h6 class="font-semibold text-gray-700 mb-2">Calculation Example:</h6>
                          <div class="font-mono text-sm text-gray-600">
                            <div>Total LOC = Blank Lines + Comment Lines + Source Lines</div>
                            <div>Effective LOC = Source Lines only</div>
                            <div class="mt-2 border-t pt-2">
                              <div>Example:</div>
                              <div>- Total lines: 1000</div>
                              <div>- Blank lines: 100</div>
                              <div>- Comment lines: 200</div>
                              <div>- Effective LOC: 700</div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div class="bg-green-50 border border-green-200 rounded p-3">
                            <h6 class="font-semibold text-green-700 text-sm mb-2">Advantages:</h6>
                            <ul class="text-xs text-green-600 space-y-1">
                              <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-1" /> Easy to measure and calculate</li>
                              <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-1" /> Widely used in industry</li>
                              <li class="flex items-center"><CheckCircle class="w-3 h-3 mr-1" /> Simple to understand</li>
                            </ul>
                          </div>
                          <div class="bg-red-50 border border-red-200 rounded p-3">
                            <h6 class="font-semibold text-red-700 text-sm mb-2">Disadvantages:</h6>
                            <ul class="text-xs text-red-600 space-y-1">
                              <li class="flex items-center"><span class="w-3 h-3 bg-red-400 rounded-full mr-1"></span> Language dependent</li>
                              <li class="flex items-center"><span class="w-3 h-3 bg-red-400 rounded-full mr-1"></span> Doesn't reflect complexity</li>
                              <li class="flex items-center"><span class="w-3 h-3 bg-red-400 rounded-full mr-1"></span> Not available early in project</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-3">2. Function Point (FP) Method</h5>
                        <p class="text-green-600 text-sm mb-3">Measures software size based on functionality provided to users, independent of programming language.</p>
                        
                        <div class="bg-gray-50 border rounded p-3 mb-3">
                          <h6 class="font-semibold text-gray-700 mb-2">FP Components:</h6>
                          <div class="overflow-x-auto">
                            <table class="w-full text-xs border-collapse border border-gray-300">
                              <thead>
                                <tr class="bg-gray-100">
                                  <th class="border border-gray-300 p-2 text-left">Component</th>
                                  <th class="border border-gray-300 p-2 text-center">Simple</th>
                                  <th class="border border-gray-300 p-2 text-center">Average</th>
                                  <th class="border border-gray-300 p-2 text-center">Complex</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="border border-gray-300 p-2">External Inputs</td>
                                  <td class="border border-gray-300 p-2 text-center">3</td>
                                  <td class="border border-gray-300 p-2 text-center">4</td>
                                  <td class="border border-gray-300 p-2 text-center">6</td>
                                </tr>
                                <tr>
                                  <td class="border border-gray-300 p-2">External Outputs</td>
                                  <td class="border border-gray-300 p-2 text-center">4</td>
                                  <td class="border border-gray-300 p-2 text-center">5</td>
                                  <td class="border border-gray-300 p-2 text-center">7</td>
                                </tr>
                                <tr>
                                  <td class="border border-gray-300 p-2">External Inquiries</td>
                                  <td class="border border-gray-300 p-2 text-center">3</td>
                                  <td class="border border-gray-300 p-2 text-center">4</td>
                                  <td class="border border-gray-300 p-2 text-center">6</td>
                                </tr>
                                <tr>
                                  <td class="border border-gray-300 p-2">Internal Files</td>
                                  <td class="border border-gray-300 p-2 text-center">7</td>
                                  <td class="border border-gray-300 p-2 text-center">10</td>
                                  <td class="border border-gray-300 p-2 text-center">15</td>
                                </tr>
                                <tr>
                                  <td class="border border-gray-300 p-2">External Interfaces</td>
                                  <td class="border border-gray-300 p-2 text-center">5</td>
                                  <td class="border border-gray-300 p-2 text-center">7</td>
                                  <td class="border border-gray-300 p-2 text-center">10</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-yellow-900 mb-4">Cost Estimation Models</h4>
                    
                    <div class="bg-white border border-yellow-200 rounded-lg p-4">
                      <h5 class="font-semibold text-yellow-700 mb-3">COCOMO (COnstructive COst MOdel)</h5>
                      <p class="text-yellow-600 text-sm mb-3">A procedural software cost estimation model developed by Barry Boehm for estimating effort, time, and team size.</p>
                      
                      <div class="bg-gray-50 border rounded p-3 mb-3">
                        <h6 class="font-semibold text-gray-700 mb-2">Basic COCOMO Formula:</h6>
                        <div class="font-mono text-sm text-gray-600">
                          <div>Effort = a × (KLOC)^b person-months</div>
                          <div>Time = c × (Effort)^d months</div>
                          <div>People = Effort / Time</div>
                        </div>
                      </div>
                      
                      <div class="overflow-x-auto">
                        <h6 class="font-semibold text-yellow-700 mb-2">Project Types:</h6>
                        <table class="w-full text-xs border-collapse border border-gray-300">
                          <thead>
                            <tr class="bg-gray-100">
                              <th class="border border-gray-300 p-2 text-left">Project Type</th>
                              <th class="border border-gray-300 p-2 text-center">a</th>
                              <th class="border border-gray-300 p-2 text-center">b</th>
                              <th class="border border-gray-300 p-2 text-center">c</th>
                              <th class="border border-gray-300 p-2 text-center">d</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border border-gray-300 p-2">Organic</td>
                              <td class="border border-gray-300 p-2 text-center">2.4</td>
                              <td class="border border-gray-300 p-2 text-center">1.05</td>
                              <td class="border border-gray-300 p-2 text-center">2.5</td>
                              <td class="border border-gray-300 p-2 text-center">0.38</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2">Semi-detached</td>
                              <td class="border border-gray-300 p-2 text-center">3.0</td>
                              <td class="border border-gray-300 p-2 text-center">1.12</td>
                              <td class="border border-gray-300 p-2 text-center">2.5</td>
                              <td class="border border-gray-300 p-2 text-center">0.35</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2">Embedded</td>
                              <td class="border border-gray-300 p-2 text-center">3.6</td>
                              <td class="border border-gray-300 p-2 text-center">1.20</td>
                              <td class="border border-gray-300 p-2 text-center">2.5</td>
                              <td class="border border-gray-300 p-2 text-center">0.32</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="bg-blue-50 border border-blue-200 rounded p-3">
                          <h6 class="font-semibold text-blue-700 text-sm">Organic</h6>
                          <p class="text-xs text-blue-600">Small teams, familiar environment, simple projects</p>
                        </div>
                        <div class="bg-purple-50 border border-purple-200 rounded p-3">
                          <h6 class="font-semibold text-purple-700 text-sm">Semi-detached</h6>
                          <p class="text-xs text-purple-600">Medium teams, mixed experience, moderate complexity</p>
                        </div>
                        <div class="bg-red-50 border border-red-200 rounded p-3">
                          <h6 class="font-semibold text-red-700 text-sm">Embedded</h6>
                          <p class="text-xs text-red-600">Large teams, complex systems, tight constraints</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `
            }
          ]
        };
      case 2:
        return {
          title: "Requirements Analysis and Specification",
          sections: [
            {
              id: 'srs',
              title: 'Software Requirements Specification (SRS)',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Software Requirements Specification (SRS)</h3>
                  <p class="text-gray-700 leading-relaxed">SRS is a comprehensive description of the intended purpose and environment for software under development. It fully describes what the software will do and how it will perform, serving as a contract between developers and stakeholders.</p>
                  
                  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h4 class="text-lg font-semibold text-blue-900 mb-4">Purpose of SRS:</h4>
                    <ul class="space-y-2 text-blue-800">
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Provides a clear understanding of system requirements</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Serves as a basis for system design and development</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Acts as a contract between client and developer</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Helps in project planning and cost estimation</li>
                    </ul>
                  </div>
                  
                  <h4 class="text-xl font-semibold text-gray-900 mb-4">Characteristics of Good SRS:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                      <h5 class="font-semibold text-blue-700 mb-3 text-lg">Quality Attributes</h5>
                      <div class="space-y-3">
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />
                          <div>
                            <strong class="text-blue-800">Unambiguous:</strong>
                            <p class="text-sm text-blue-700">Clear and precise statements with single interpretation</p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />
                          <div>
                            <strong class="text-blue-800">Complete:</strong>
                            <p class="text-sm text-blue-700">All requirements included with no missing information</p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />
                          <div>
                            <strong class="text-blue-800">Consistent:</strong>
                            <p class="text-sm text-blue-700">No contradictory requirements or conflicts</p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />
                          <div>
                            <strong class="text-blue-800">Verifiable:</strong>
                            <p class="text-sm text-blue-700">Requirements can be tested and validated</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                      <h5 class="font-semibold text-green-700 mb-3 text-lg">Documentation Attributes</h5>
                      <div class="space-y-3">
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />
                          <div>
                            <strong class="text-green-800">Modifiable:</strong>
                            <p class="text-sm text-green-700">Easy to change and update when needed</p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />
                          <div>
                            <strong class="text-green-800">Traceable:</strong>
                            <p class="text-sm text-green-700">Requirements can be tracked throughout development</p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />
                          <div>
                            <strong class="text-green-800">Ranked:</strong>
                            <p class="text-sm text-green-700">Requirements prioritized by importance</p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />
                          <div>
                            <strong class="text-green-800">Readable:</strong>
                            <p class="text-sm text-green-700">Easy to understand by all stakeholders</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-gray-900 mb-4">SRS Document Organization:</h4>
                    <div class="space-y-4">
                      <div class="bg-white border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                          <h5 class="font-semibold text-gray-800">Introduction</h5>
                        </div>
                        <ul class="ml-11 text-sm text-gray-600 space-y-1">
                          <li>• Purpose and scope of the document</li>
                          <li>• Definitions, acronyms, and abbreviations</li>
                          <li>• References to other documents</li>
                          <li>• Overview of the document structure</li>
                        </ul>
                      </div>
                      <div class="bg-white border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                          <h5 class="font-semibold text-gray-800">Overall Description</h5>
                        </div>
                        <ul class="ml-11 text-sm text-gray-600 space-y-1">
                          <li>• Product perspective and context</li>
                          <li>• Product functions and features</li>
                          <li>• User characteristics and classes</li>
                          <li>• Constraints and assumptions</li>
                        </ul>
                      </div>
                      <div class="bg-white border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                          <h5 class="font-semibold text-gray-800">Specific Requirements</h5>
                        </div>
                        <ul class="ml-11 text-sm text-gray-600 space-y-1">
                          <li>• Functional requirements in detail</li>
                          <li>• Non-functional requirements</li>
                          <li>• Interface requirements</li>
                          <li>• Design constraints</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h4 class="text-xl font-semibold text-gray-900 mb-4">Types of Requirements:</h4>
                  <div class="space-y-4">
                    <div class="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                      <h5 class="font-semibold text-purple-700 text-lg mb-2">Functional Requirements</h5>
                      <p class="text-purple-600 text-sm mb-3">Define what the system should do - the specific behaviors, functions, and services.</p>
                      <div class="bg-white border border-purple-200 rounded p-3">
                        <strong class="text-purple-700">Examples:</strong>
                        <ul class="text-sm text-purple-600 mt-2 space-y-1">
                          <li>• The system shall validate user credentials before granting access</li>
                          <li>• The system shall generate monthly sales reports in PDF format</li>
                          <li>• The system shall process payment transactions within 30 seconds</li>
                          <li>• The system shall send email notifications for order confirmations</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                      <h5 class="font-semibold text-orange-700 text-lg mb-2">Non-Functional Requirements</h5>
                      <p class="text-orange-600 text-sm mb-3">Define how the system should perform - quality attributes and constraints.</p>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="bg-white border border-orange-200 rounded p-3">
                          <strong class="text-orange-700">Performance:</strong>
                          <ul class="text-sm text-orange-600 mt-1">
                            <li>• Response time < 2 seconds</li>
                            <li>• Support 1000 concurrent users</li>
                          </ul>
                        </div>
                        <div class="bg-white border border-orange-200 rounded p-3">
                          <strong class="text-orange-700">Security:</strong>
                          <ul class="text-sm text-orange-600 mt-1">
                            <li>• 256-bit SSL encryption</li>
                            <li>• Multi-factor authentication</li>
                          </ul>
                        </div>
                        <div class="bg-white border border-orange-200 rounded p-3">
                          <strong class="text-orange-700">Usability:</strong>
                          <ul class="text-sm text-orange-600 mt-1">
                            <li>• Intuitive user interface</li>
                            <li>• WCAG 2.1 compliance</li>
                          </ul>
                        </div>
                        <div class="bg-white border border-orange-200 rounded p-3">
                          <strong class="text-orange-700">Reliability:</strong>
                          <ul class="text-sm text-orange-600 mt-1">
                            <li>• 99.9% uptime availability</li>
                            <li>• Automatic backup systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `
            },
            {
              id: 'process',
              title: 'Requirement Engineering Process',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Requirement Engineering Process</h3>
                  <p class="text-gray-700 leading-relaxed">A systematic approach to discovering, analyzing, documenting, and maintaining software requirements throughout the development lifecycle.</p>
                  
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-blue-900 mb-4">Process Activities Overview</h4>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                      <div class="text-center">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                        <div class="text-sm font-medium text-blue-800">Elicitation</div>
                      </div>
                      <div class="text-center">
                        <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                        <div class="text-sm font-medium text-green-800">Analysis</div>
                      </div>
                      <div class="text-center">
                        <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                        <div class="text-sm font-medium text-purple-800">Documentation</div>
                      </div>
                      <div class="text-center">
                        <div class="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                        <div class="text-sm font-medium text-orange-800">Review</div>
                      </div>
                      <div class="text-center">
                        <div class="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">5</div>
                        <div class="text-sm font-medium text-red-800">Management</div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-white border border-blue-200 rounded-lg p-4">
                        <h5 class="font-semibold text-blue-800 text-lg mb-3">1. Requirements Elicitation</h5>
                        <p class="text-blue-700 text-sm mb-4">Gathering requirements from stakeholders through various techniques and methods.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="bg-blue-50 border border-blue-200 rounded p-3">
                            <h6 class="font-semibold text-blue-700 mb-2">Interview Techniques:</h6>
                            <ul class="text-xs text-blue-600 space-y-1">
                              <li>• Structured interviews with predefined questions</li>
                              <li>• Unstructured interviews for open discussion</li>
                              <li>• Focus group discussions with multiple stakeholders</li>
                              <li>• One-on-one sessions with key users</li>
                            </ul>
                          </div>
                          <div class="bg-green-50 border border-green-200 rounded p-3">
                            <h6 class="font-semibold text-green-700 mb-2">Observation Methods:</h6>
                            <ul class="text-xs text-green-600 space-y-1">
                              <li>• Ethnographic studies of user behavior</li>
                              <li>• Work shadowing and job observation</li>
                              <li>• Protocol analysis of current processes</li>
                              <li>• Task analysis and workflow mapping</li>
                            </ul>
                          </div>
                          <div class="bg-purple-50 border border-purple-200 rounded p-3">
                            <h6 class="font-semibold text-purple-700 mb-2">Document Analysis:</h6>
                            <ul class="text-xs text-purple-600 space-y-1">
                              <li>• Existing system documentation review</li>
                              <li>• Business process documentation</li>
                              <li>• Form and report analysis</li>
                              <li>• Regulatory and compliance documents</li>
                            </ul>
                          </div>
                          <div class="bg-orange-50 border border-orange-200 rounded p-3">
                            <h6 class="font-semibold text-orange-700 mb-2">Collaborative Techniques:</h6>
                            <ul class="text-xs text-orange-600 space-y-1">
                              <li>• Brainstorming sessions for idea generation</li>
                              <li>• JAD (Joint Application Development) workshops</li>
                              <li>• Prototyping and mockup reviews</li>
                              <li>• Requirements workshops and facilitated sessions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-800 text-lg mb-3">2. Requirements Analysis</h5>
                        <p class="text-green-700 text-sm mb-4">Examining requirements for completeness, consistency, feasibility, and clarity.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="bg-green-50 border border-green-200 rounded p-3">
                            <h6 class="font-semibold text-green-700 mb-2">Analysis Activities:</h6>
                            <ul class="text-xs text-green-600 space-y-1">
                              <li>• Requirement classification and categorization</li>
                              <li>• Conflict identification and resolution</li>
                              <li>• Gap analysis and missing requirement identification</li>
                              <li>• Feasibility assessment and risk analysis</li>
                              <li>• Priority assignment and ranking</li>
                            </ul>
                          </div>
                          <div class="bg-blue-50 border border-blue-200 rounded p-3">
                            <h6 class="font-semibold text-blue-700 mb-2">Analysis Models:</h6>
                            <ul class="text-xs text-blue-600 space-y-1">
                              <li>• Data flow diagrams (DFD)</li>
                              <li>• Entity-relationship diagrams (ERD)</li>
                              <li>• Use case diagrams and scenarios</li>
                              <li>• State transition diagrams</li>
                              <li>• Object-oriented models</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-purple-200 rounded-lg p-4">
                        <h5 class="font-semibold text-purple-800 text-lg mb-3">3. Requirements Documentation</h5>
                        <p class="text-purple-700 text-sm mb-4">Recording requirements in a structured format for stakeholder review and development use.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="bg-purple-50 border border-purple-200 rounded p-3">
                            <h6 class="font-semibold text-purple-700 mb-2">Documentation Formats:</h6>
                            <ul class="text-xs text-purple-600 space-y-1">
                              <li>• Natural language specifications</li>
                              <li>• Structured templates and forms</li>
                              <li>• Use case descriptions and scenarios</li>
                              <li>• Formal mathematical specifications</li>
                              <li>• Visual models and diagrams</li>
                            </ul>
                          </div>
                          <div class="bg-gray-50 border border-gray-200 rounded p-3">
                            <h6 class="font-semibold text-gray-700 mb-2">Documentation Standards:</h6>
                            <ul class="text-xs text-gray-600 space-y-1">
                              <li>• IEEE 830 standard for SRS</li>
                              <li>• ISO/IEC 29148 requirements engineering</li>
                              <li>• Company-specific templates</li>
                              <li>• Industry best practices</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-orange-200 rounded-lg p-4">
                        <h5 class="font-semibold text-orange-800 text-lg mb-3">4. Requirements Review</h5>
                        <p class="text-orange-700 text-sm mb-4">Validating requirements with stakeholders to ensure accuracy and completeness.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="bg-orange-50 border border-orange-200 rounded p-3">
                            <h6 class="font-semibold text-orange-700 mb-2">Review Types:</h6>
                            <ul class="text-xs text-orange-600 space-y-1">
                              <li>• Formal inspection meetings</li>
                              <li>• Walkthrough sessions with stakeholders</li>
                              <li>• Peer review by team members</li>
                              <li>• Customer acceptance reviews</li>
                            </ul>
                          </div>
                          <div class="bg-red-50 border border-red-200 rounded p-3">
                            <h6 class="font-semibold text-red-700 mb-2">Review Criteria:</h6>
                            <ul class="text-xs text-red-600 space-y-1">
                              <li>• Completeness and coverage</li>
                              <li>• Consistency and clarity</li>
                              <li>• Testability and verifiability</li>
                              <li>• Feasibility and realizability</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-red-200 rounded-lg p-4">
                        <h5 class="font-semibold text-red-800 text-lg mb-3">5. Requirements Management</h5>
                        <p class="text-red-700 text-sm mb-4">Managing changes to requirements throughout the software development lifecycle.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="bg-red-50 border border-red-200 rounded p-3">
                            <h6 class="font-semibold text-red-700 mb-2">Management Activities:</h6>
                            <ul class="text-xs text-red-600 space-y-1">
                              <li>• Version control and change tracking</li>
                              <li>• Change impact analysis</li>
                              <li>• Requirements traceability management</li>
                              <li>• Status tracking and reporting</li>
                            </ul>
                          </div>
                          <div class="bg-gray-50 border border-gray-200 rounded p-3">
                            <h6 class="font-semibold text-gray-700 mb-2">Management Tools:</h6>
                            <ul class="text-xs text-gray-600 space-y-1">
                              <li>• Requirements management systems</li>
                              <li>• Configuration management tools</li>
                              <li>• Traceability matrices</li>
                              <li>• Change control boards</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-yellow-900 mb-4">Feasibility Study</h4>
                    <p class="text-yellow-800 mb-4">Assessment of whether the proposed system is achievable given the constraints and available resources.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div class="bg-white border border-red-200 rounded-lg p-4">
                        <h5 class="font-semibold text-red-700 mb-3">Technical Feasibility</h5>
                        <p class="text-red-600 text-sm mb-3">Can the system be built with current technology and expertise?</p>
                        <ul class="text-xs text-red-600 space-y-1">
                          <li>• Hardware and software requirements</li>
                          <li>• Technical expertise availability</li>
                          <li>• Technology maturity and stability</li>
                          <li>• Integration with existing systems</li>
                          <li>• Performance and scalability requirements</li>
                        </ul>
                      </div>
                      
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h5 class="font-semibold text-green-700 mb-3">Economic Feasibility</h5>
                        <p class="text-green-600 text-sm mb-3">Is the project economically viable and cost-effective?</p>
                        <ul class="text-xs text-green-600 space-y-1">
                          <li>• Development and implementation costs</li>
                          <li>• Operational and maintenance costs</li>
                          <li>• Expected benefits and ROI</li>
                          <li>• Cost-benefit analysis</li>
                          <li>• Budget constraints and funding</li>
                        </ul>
                      </div>
                      
                      <div class="bg-white border border-blue-200 rounded-lg p-4">
                        <h5 class="font-semibold text-blue-700 mb-3">Operational Feasibility</h5>
                        <p class="text-blue-600 text-sm mb-3">Will the system work effectively in the target environment?</p>
                        <ul class="text-xs text-blue-600 space-y-1">
                          <li>• User acceptance and adoption</li>
                          <li>• Organizational impact and change</li>
                          <li>• Legal and regulatory constraints</li>
                          <li>• Social and cultural factors</li>
                          <li>• Training and support requirements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              `
            },
            {
              id: 'modeling',
              title: 'Function Oriented Modeling',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Function Oriented Modeling</h3>
                  <p class="text-gray-700 leading-relaxed">A modeling approach that focuses on the functions performed by the system and the flow of data between these functions. It helps in understanding system behavior from a functional perspective.</p>
                  
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-blue-900 mb-4">1. Data Flow Diagrams (DFD)</h4>
                    <p class="text-blue-800 mb-4">DFDs show how data moves through a system and what processing is performed on that data. They provide a graphical representation of system functionality.</p>
                    
                    <div class="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                      <h5 class="font-semibold text-blue-700 mb-3">DFD Components:</h5>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-4">
                          <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center bg-blue-50">
                              <span class="text-xs font-bold text-blue-600">P</span>
                            </div>
                            <div>
                              <strong class="text-blue-800">Process (Circle):</strong>
                              <p class="text-xs text-blue-600">Transforms input data into output data</p>
                            </div>
                          </div>
                          
                          <div class="flex items-center space-x-3">
                            <div class="w-12 h-6 border-2 border-green-600 flex items-center justify-center bg-green-50">
                              <span class="text-xs font-bold text-green-600">D</span>
                            </div>
                            <div>
                              <strong class="text-green-800">Data Store (Open Rectangle):</strong>
                              <p class="text-xs text-green-600">Repository of data at rest</p>
                            </div>
                          </div>
                        </div>
                        
                        <div class="space-y-4">
                          <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 border-2 border-purple-600 flex items-center justify-center bg-purple-50">
                              <span class="text-xs font-bold text-purple-600">E</span>
                            </div>
                            <div>
                              <strong class="text-purple-800">External Entity (Rectangle):</strong>
                              <p class="text-xs text-purple-600">Source or destination of data</p>
                            </div>
                          </div>
                          
                          <div class="flex items-center space-x-3">
                            <div class="w-16 h-0 border-t-2 border-gray-600 relative">
                              <div class="absolute right-0 top-0 transform -translate-y-1">
                                <div class="w-0 h-0 border-l-4 border-l-gray-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                              </div>
                            </div>
                            <div>
                              <strong class="text-gray-800">Data Flow (Arrow):</strong>
                              <p class="text-xs text-gray-600">Movement of data between components</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-white border border-blue-200 rounded-lg p-4">
                      <h5 class="font-semibold text-blue-700 mb-3">DFD Levels:</h5>
                      <div class="space-y-3">
                        <div class="bg-blue-50 border border-blue-200 rounded p-3">
                          <strong class="text-blue-800">Level 0 (Context Diagram):</strong>
                          <p class="text-xs text-blue-700 mt-1">Shows the system as a single process with external entities and major data flows. Provides the highest level view of the system.</p>
                        </div>
                        <div class="bg-green-50 border border-green-200 rounded p-3">
                          <strong class="text-green-800">Level 1 (Overview Diagram):</strong>
                          <p class="text-xs text-green-700 mt-1">Shows the major processes within the system and their interactions. Breaks down the context diagram into major functional areas.</p>
                        </div>
                        <div class="bg-purple-50 border border-purple-200 rounded p-3">
                          <strong class="text-purple-800">Level 2 and beyond (Detailed Diagrams):</strong>
                          <p class="text-xs text-purple-700 mt-1">Provides increasing levels of detail for each process, showing sub-processes and detailed data flows.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-green-900 mb-4">2. Entity Relationship Diagrams (ERD)</h4>
                    <p class="text-green-800 mb-4">ERDs model the data structure and relationships between entities in the system, focusing on what data is stored and how entities relate to each other.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div class="bg-white border border-blue-200 rounded-lg p-4">
                        <h6 class="font-semibold text-blue-700 mb-3">Entities</h6>
                        <p class="text-xs text-blue-600 mb-3">Objects or concepts about which data is stored</p>
                        <div class="bg-blue-50 border border-blue-200 rounded p-2">
                          <strong class="text-xs text-blue-700">Examples:</strong>
                          <ul class="text-xs text-blue-600 mt-1 space-y-1">
                            <li>• Customer</li>
                            <li>• Order</li>
                            <li>• Product</li>
                            <li>• Employee</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-green-200 rounded-lg p-4">
                        <h6 class="font-semibold text-green-700 mb-3">Attributes</h6>
                        <p class="text-xs text-green-600 mb-3">Properties or characteristics of entities</p>
                        <div class="bg-green-50 border border-green-200 rounded p-2">
                          <strong class="text-xs text-green-700">Types:</strong>
                          <ul class="text-xs text-green-600 mt-1 space-y-1">
                            <li>• Simple/Composite</li>
                            <li>• Single/Multi-valued</li>
                            <li>• Stored/Derived</li>
                            <li>• Key attributes</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="bg-white border border-purple-200 rounded-lg p-4">
                        <h6 class="font-semibold text-purple-700 mb-3">Relationships</h6>
                        <p class="text-xs text-purple-600 mb-3">Associations between entities</p>
                        <div class="bg-purple-50 border border-purple-200 rounded p-2">
                          <strong class="text-xs text-purple-700">Cardinalities:</strong>
                          <ul class="text-xs text-purple-600 mt-1 space-y-1">
                            <li>• One-to-One (1:1)</li>
                            <li>• One-to-Many (1:M)</li>
                            <li>• Many-to-Many (M:N)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-white border border-green-200 rounded-lg p-4">
                      <h5 class="font-semibold text-green-700 mb-3">ERD Example - Library System:</h5>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-blue-50 border border-blue-200 rounded p-3">
                          <h6 class="font-semibold text-blue-700 text-sm">STUDENT Entity</h6>
                          <ul class="text-xs text-blue-600 mt-2 space-y-1">
                            <li>• student_id (Primary Key)</li>
                            <li>• name</li>
                            <li>• email</li>
                            <li>• phone</li>
                          </ul>
                        </div>
                        <div class="bg-green-50 border border-green-200 rounded p-3">
                          <h6 class="font-semibold text-green-700 text-sm">BOOK Entity</h6>
                          <ul class="text-xs text-green-600 mt-2 space-y-1">
                            <li>• book_id (Primary Key)</li>
                            <li>• title</li>
                            <li>• author</li>
                            <li>• isbn</li>
                          </ul>
                        </div>
                        <div class="bg-purple-50 border border-purple-200 rounded p-3">
                          <h6 class="font-semibold text-purple-700 text-sm">BORROWS Relationship</h6>
                          <ul class="text-xs text-purple-600 mt-2 space-y-1">
                            <li>• borrow_date</li>
                            <li>• return_date</li>
                            <li>• fine_amount</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-orange-900 mb-4">3. Data Dictionaries</h4>
                    <p class="text-orange-800 mb-4">Centralized repository that contains definitions of all data elements used in the system, ensuring consistency and clarity.</p>
                    
                    <div class="bg-white border border-orange-200 rounded-lg p-4">
                      <h5 class="font-semibold text-orange-700 mb-3">Data Dictionary Contents:</h5>
                      <div class="overflow-x-auto">
                        <table class="w-full text-xs border-collapse border border-gray-300">
                          <thead>
                            <tr class="bg-gray-100">
                              <th class="border border-gray-300 p-2 text-left">Element</th>
                              <th class="border border-gray-300 p-2 text-left">Description</th>
                              <th class="border border-gray-300 p-2 text-left">Example</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border border-gray-300 p-2 font-medium">Data Element Name</td>
                              <td class="border border-gray-300 p-2">Unique identifier for data item</td>
                              <td class="border border-gray-300 p-2 font-mono">CUSTOMER_ID</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2 font-medium">Description</td>
                              <td class="border border-gray-300 p-2">Detailed explanation of the data</td>
                              <td class="border border-gray-300 p-2">Unique identifier for customer records</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2 font-medium">Data Type</td>
                              <td class="border border-gray-300 p-2">Type and format of data</td>
                              <td class="border border-gray-300 p-2 font-mono">INTEGER, 8 digits</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2 font-medium">Length</td>
                              <td class="border border-gray-300 p-2">Maximum size of data</td>
                              <td class="border border-gray-300 p-2">8 characters</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2 font-medium">Values</td>
                              <td class="border border-gray-300 p-2">Permitted values or ranges</td>
                              <td class="border border-gray-300 p-2 font-mono">10000000-99999999</td>
                            </tr>
                            <tr>
                              <td class="border border-gray-300 p-2 font-medium">Source</td>
                              <td class="border border-gray-300 p-2">Origin of the data</td>
                              <td class="border border-gray-300 p-2">Customer Registration Form</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 class="text-xl font-semibold text-purple-900 mb-4">4. Decision Tables</h4>
                    <p class="text-purple-800 mb-4">Tabular representation of complex business logic with multiple conditions and corresponding actions.</p>
                    
                    <div class="bg-white border border-purple-200 rounded-lg p-4">
                      <h5 class="font-semibold text-purple-700 mb-3">Decision Table Structure:</h5>
                      <div class="overflow-x-auto mb-4">
                        <table class="w-full text-xs border-collapse border border-gray-300">
                          <thead>
                            <tr class="bg-gray-100">
                              <th class="border border-gray-300 p-2" colspan="2">Conditions/Actions</th>
                              <th class="border border-gray-300 p-2">Rule 1</th>
                              <th class="border border-gray-300 p-2">Rule 2</th>
                              <th class="border border-gray-300 p-2">Rule 3</th>
                              <th class="border border-gray-300 p-2">Rule 4</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-blue-50">
                              <td class="border border-gray-300 p-2 font-medium" rowspan="3">Conditions</td>
                              <td class="border border-gray-300 p-2">Age ≥ 18</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">Y</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">Y</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">N</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">N</td>
                            </tr>
                            <tr class="bg-blue-50">
                              <td class="border border-gray-300 p-2">Income ≥ $30K</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">Y</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">N</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">Y</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">N</td>
                            </tr>
                            <tr class="bg-blue-50">
                              <td class="border border-gray-300 p-2">Credit Score ≥ 650</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">Y</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">N</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">-</td>
                              <td class="border border-gray-300 p-2 text-center font-bold">-</td>
                            </tr>
                            <tr class="bg-green-50">
                              <td class="border border-gray-300 p-2 font-medium" rowspan="2">Actions</td>
                              <td class="border border-gray-300 p-2">Approve Loan</td>
                              <td class="border border-gray-300 p-2 text-center font-bold text-green-600">X</td>
                              <td class="border border-gray-300 p-2 text-center"></td>
                              <td class="border border-gray-300 p-2 text-center"></td>
                              <td class="border border-gray-300 p-2 text-center"></td>
                            </tr>
                            <tr class="bg-green-50">
                              <td class="border border-gray-300 p-2">Reject Loan</td>
                              <td class="border border-gray-300 p-2 text-center"></td>
                              <td class="border border-gray-300 p-2 text-center font-bold text-red-600">X</td>
                              <td class="border border-gray-300 p-2 text-center font-bold text-red-600">X</td>
                              <td class="border border-gray-300 p-2 text-center font-bold text-red-600">X</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div class="bg-gray-50 border border-gray-200 rounded p-3">
                        <p class="text-xs text-gray-600">
                          <strong>Legend:</strong> Y = Yes, N = No, X = Action taken, - = Don't care condition
                        </p>
                        <p class="text-xs text-gray-600 mt-1">
                          This example shows loan approval logic based on age, income, and credit score criteria.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              `
            }
          ]
        };
      case 3:
        return {
          title: "Software Design",
          sections: [
            {
              id: 'design-approaches',
              title: 'Software Design Approaches',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Software Design Approaches</h3>
                  <p class="text-gray-700 leading-relaxed">Software design is the process of defining the architecture, components, interfaces, and other characteristics of a system. It bridges the gap between requirements and implementation.</p>
                  
                  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h4 class="text-lg font-semibold text-blue-900 mb-3">Design Principles:</h4>
                    <ul class="space-y-2 text-blue-800">
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Modularity and separation of concerns</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />High cohesion and low coupling</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Abstraction and information hiding</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Reusability and maintainability</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              id: 'cohesion-coupling',
              title: 'Cohesion and Coupling',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Cohesion and Coupling</h3>
                  <p class="text-gray-700 leading-relaxed">Two fundamental concepts in software design that measure the quality of module design and system architecture.</p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 class="text-xl font-semibold text-green-900 mb-4">Cohesion (High is Good)</h4>
                      <p class="text-green-800 mb-4">Measures how closely related elements within a module are to each other.</p>
                      <div class="space-y-3">
                        <div class="bg-white border border-green-200 rounded p-3">
                          <h5 class="font-semibold text-green-700">Functional Cohesion</h5>
                          <p class="text-xs text-green-600">All elements work together for a single task</p>
                        </div>
                        <div class="bg-white border border-green-200 rounded p-3">
                          <h5 class="font-semibold text-green-700">Sequential Cohesion</h5>
                          <p class="text-xs text-green-600">Output of one element is input to another</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 class="text-xl font-semibold text-red-900 mb-4">Coupling (Low is Good)</h4>
                      <p class="text-red-800 mb-4">Measures the degree of interdependence between modules.</p>
                      <div class="space-y-3">
                        <div class="bg-white border border-red-200 rounded p-3">
                          <h5 class="font-semibold text-red-700">Data Coupling</h5>
                          <p class="text-xs text-red-600">Modules share only data parameters</p>
                        </div>
                        <div class="bg-white border border-red-200 rounded p-3">
                          <h5 class="font-semibold text-red-700">Control Coupling</h5>
                          <p class="text-xs text-red-600">One module controls another's execution</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `
            }
          ]
        };
      case 4:
        return {
          title: "Coding and Testing of Software",
          sections: [
            {
              id: 'coding-standards',
              title: 'Coding Standards and Guidelines',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Coding Standards and Guidelines</h3>
                  <p class="text-gray-700 leading-relaxed">Coding standards ensure consistency, readability, and maintainability of source code across development teams.</p>
                  
                  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h4 class="text-lg font-semibold text-blue-900 mb-3">Benefits of Coding Standards:</h4>
                    <ul class="space-y-2 text-blue-800">
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Improved code readability and maintainability</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Reduced development time and costs</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Better team collaboration</li>
                      <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Easier debugging and testing</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              id: 'testing-types',
              title: 'Software Testing Types',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Software Testing Types</h3>
                  <p class="text-gray-700 leading-relaxed">Different types of testing ensure comprehensive validation of software functionality, performance, and quality.</p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 class="text-xl font-semibold text-purple-900 mb-4">Unit Testing</h4>
                      <p class="text-purple-800 mb-4">Testing individual components or modules in isolation.</p>
                      <ul class="space-y-2 text-purple-700">
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-purple-600" />Tests smallest testable parts</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-purple-600" />Usually automated</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-purple-600" />Fast execution</li>
                      </ul>
                    </div>
                    
                    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 class="text-xl font-semibold text-green-900 mb-4">Integration Testing</h4>
                      <p class="text-green-800 mb-4">Testing the interfaces between integrated components.</p>
                      <ul class="space-y-2 text-green-700">
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />Tests module interactions</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />Identifies interface defects</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-green-600" />Big Bang or Incremental</li>
                      </ul>
                    </div>
                  </div>
                </div>
              `
            }
          ]
        };
      case 5:
        return {
          title: "Software Maintenance",
          sections: [
            {
              id: 'maintenance-types',
              title: 'Types of Software Maintenance',
              content: `
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Types of Software Maintenance</h3>
                  <p class="text-gray-700 leading-relaxed">Software maintenance involves modifying and updating software after delivery to correct faults, improve performance, or adapt to changing requirements.</p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 class="text-xl font-semibold text-red-900 mb-4">Corrective Maintenance</h4>
                      <p class="text-red-800 mb-4">Fixing bugs and errors discovered after deployment.</p>
                      <ul class="space-y-2 text-red-700">
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-red-600" />Bug fixes</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-red-600" />Error corrections</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-red-600" />Fault repairs</li>
                      </ul>
                    </div>
                    
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 class="text-xl font-semibold text-blue-900 mb-4">Adaptive Maintenance</h4>
                      <p class="text-blue-800 mb-4">Modifying software to work in new or changed environments.</p>
                      <ul class="space-y-2 text-blue-700">
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />OS updates</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Hardware changes</li>
                        <li class="flex items-start"><CheckCircle class="w-4 h-4 mt-1 mr-3 text-blue-600" />Platform migration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              `
            }
          ]
        };
      default:
        return {
          title: "Unit Content Coming Soon",
          sections: [
            {
              id: 'placeholder',
              title: 'Content Under Development',
              content: `
                <div class="text-center py-12">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">This section is being developed</h3>
                  <p class="text-gray-600">Detailed notes for this unit will be available soon. Please check back later or explore other units.</p>
                </div>
              `
            }
          ]
        };
    }
  };

  const currentUnit = getUnitContent(selectedUnit);

  return (
    <div className="space-y-6">
      {/* Unit Selection Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Study Notes</h1>
            <p className="text-gray-600">Comprehensive notes for Software Engineering</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        {/* Unit Selection Tabs */}
        <div className="flex flex-wrap gap-2">
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => onSelectUnit(unit.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedUnit === unit.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Unit {unit.id}: {unit.title}
            </button>
          ))}
        </div>
      </div>

      {/* Unit Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Table of Contents */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-blue-600" />
              Contents
            </h3>
            
            <nav className="space-y-2">
              {currentUnit.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setExpandedTopic(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    expandedTopic === section.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{currentUnit.title}</h2>
                <p className="text-gray-600 flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  Unit {selectedUnit} • {units.find(u => u.id === selectedUnit)?.hours} hours
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="prose max-w-none">
              {currentUnit.sections.map((section) => (
                <div
                  key={section.id}
                  className={`transition-all duration-300 ${
                    expandedTopic === section.id ? 'block' : 'hidden'
                  }`}
                >
                  <div 
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    className="space-y-4"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>Previous Topic</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">Topic completed</span>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-md transition-shadow">
                <span>Next Topic</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesSection;