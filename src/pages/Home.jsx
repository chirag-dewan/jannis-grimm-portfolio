icon={
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h4V7h2v4h4v2h-4v4h-2v-4H7z" />
                    </svg>
                  }
                />

                <ProjectCard
                  title="FlightLogBook"
                  description="An app for aviation enthusiasts to record and manage flight details. Achieved thousands of downloads and 4.8+ user satisfaction ratings."
                  tags={["Swift", "MapKit", "CloudKit"]}
                  darkMode={darkMode}
                  delay={0.2}
                  icon={
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  }
                />
              </div>
              
              {/* View More Projects Button */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="https://github.com/iamjannisgrimm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-all duration-300 group"
                >
                  View More on GitHub
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section 
            ref={sectionRefs.skills}
            id="skills" 
            className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader>Technical Skills</SectionHeader>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
              >
                A comprehensive overview of my technical expertise and capabilities.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Programming Languages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16.5 15.5V7.5h-2v7.51l-5-5.01-5 5.01V7.5H5.5v11h14z" />
                      </svg>
                    </span>
                    Programming Languages
                  </h3>
                  
                  <div className="space-y-4">
                    <SkillBar skill="Swift" level={95} darkMode={darkMode} />
                    <SkillBar skill="Java" level={85} darkMode={darkMode} />
                    <SkillBar skill="Go" level={80} darkMode={darkMode} />
                    <SkillBar skill="C/C++" level={85} darkMode={darkMode} />
                    <SkillBar skill="Python" level={90} darkMode={darkMode} />
                    <SkillBar skill="JavaScript" level={85} darkMode={darkMode} />
                    <SkillBar skill="SQL" level={80} darkMode={darkMode} />
                  </div>
                </motion.div>

                {/* Databases & Back-End */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.5 6h-1.75L14.62 7H12V5.5h5.5v1.5zm-8 6.5H7.5v-1.5h2v1.5zm.5-2.5H6.75L5.62 11H3V9.5h5.5v1.5zM12.5 17h-2v-1.5h2V17zm.5-2.5H11.5v-1.75L10.38 14H8v-1.5h5v1.5zM7 6.5h2V8H7V6.5zm12 10.5h-1.75L16.12 18H13.5v-1.5H19V17z" />
                      </svg>
                    </span>
                    Databases & Back-End
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Databases</h4>
                    <div className="flex flex-wrap gap-3">
                      {['MongoDB', 'Cloud Firestore', 'MySQL'].map((db) => (
                        <span key={db} className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Back-End Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {['RESTful APIs', 'OpenAI API', 'Spring Boot', 'Node.JS'].map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Front-End Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                      </svg>
                    </span>
                    Front-End Technologies
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {[
                      'SwiftUI', 'UIKit', 'AngularJS', 'ReactJS', 
                      'Bootstrap', 'HTML', 'CSS', 'MaterialUI'
                    ].map((tech) => (
                      <motion.span 
                        key={tech} 
                        className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        whileHover={{ y: -5, x: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Additional Tools & Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`mt-8 p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                    </svg>
                  </span>
                  Additional Tools & Frameworks
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    'Firebase', 'MapKit', 'CoreLocation', 'CloudKit', 
                    'SwiftData', 'CoreData', 'Combine', 'Foundation', 
                    'Cocoa', 'MLKit', 'D3', 'Git', 'GitHub', 'GitLab', 
                    'XCTest', 'Swift Testing', 'Bash', 'JSON', 'AWS', 
                    'Docker', 'Kubernetes', 'Sketch', 'Figma'
                  ].map((tool, index) => (
                    <motion.span 
                      key={tool} 
                      className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * (index % 10) }}
                      whileHover={{ y: -5 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`mt-8 p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl relative overflow-hidden`}
              >
                {/* Certificate background illustration */}
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-yellow-200 dark:bg-yellow-900/30 rounded-full opacity-10 blur-3xl"></div>
                
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                  </span>
                  Certifications
                </h3>
                
                <div className="relative z-10">
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/30"
                  >
                    <svg className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Oracle Certified Associate Java SE 8 Programmer
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            ref={sectionRefs.contact}
            id="contact" 
            className="py-24 px-6"
          >
            <div className="max-w-5xl mx-auto">
              <SectionHeader>Get In Touch</SectionHeader>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
              >
                Interested in working together? Feel free to reach out using the contact form below or via email.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                {/* Contact Information */}
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10"></div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 mr-4">
                          <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <a 
                            href="mailto:jannis@grimm.me" 
                            className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                          >
                            jannis@grimm.me
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 mr-4">
                          <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Phone</p>
                          <a 
                            href="tel:4809377321" 
                            className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                          >
                            (480) 937-7321
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 mr-4">
                          <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zm6.613 4.614a8.523 8.523 0 011.93 5.32 20.094 20.094 0 00-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 00-.566-1.239 11.41 11.41 0 004.769-3.366zM8 1.707a8.821 8.821 0 012-.238 8.5 8.5 0 015.664 2.152 9.608 9.608 0 00-4.476 3.087A45.758 45.758 0 008 1.707zM1.642 8.262a8.57 8.57 0 014.73-5.981A53.998 53.998 0 018.53 7.256a37.618 37.618 0 00-4.922 2.372 6.684 6.684 0 01-1.966-1.366zm.856 3.45a8.758 8.758 0 00-1.042-1.986c.708-.352 1.687-.686 2.863-1.023a4.109 4.109 0 00-.13.889 36.742 36.742 0 00-1.691 2.12zm.648 5.788a8.524 8.524 0 01-1.589-5.109c.3-.029 3.934-.605 8.092-2.203.411 1.02.556 2.07.596 3.055a1.86 1.86 0 00-1.006.979c-4.285 1.423-6.605 4.245-7.093 4.865zM8 18.33a8.822 8.822 0 01-2.84-.478 11.44 11.44 0 003.143-2.132 3.89 3.89 0 012.286-1.036 3.703 3.703 0 013.1 1.279 8.389 8.389 0 01-5.689 2.367zm7.345-3.773a5.63 5.63 0 00-2.033-1.593 3.072 3.072 0 00-.56-.214 23.42 23.42 0 00-.243-4.074 22.937 22.937 0 016.639.225 8.4 8.4 0 01-3.803 5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Connect Online</p>
                          <div className="flex flex-col space-y-2">
                            <a 
                              href="https://www.linkedin.com/in/iamjannisgrimm" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              LinkedIn
                            </a>
                            <a 
                              href="https://github.com/iamjannisgrimm" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              GitHub
                            </a>
                            <a 
                              href="https://www.iamjannisgrimm.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              Website
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10"></div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors duration-300"
                          placeholder="Your email"
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="message" 
                          className="block mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Message
                        </label>
                        <textarea 
                          id="message" 
                          rows="5" 
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors duration-300"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      
                      <motion.button 
                        type="submit" 
                        className="w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div 
                className="mb-6 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl font-semibold">Jannis Grimm</p>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
              </motion.div>
              
              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a 
                  href="https://www.linkedin.com/in/iamjannisgrimm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </motion.svg>
                </a>
                
                <a 
                  href="https://github.com/iamjannisgrimm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                  </motion.svg>
                </a>
                
                <a 
                  href="https://www.iamjannisgrimm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm9.5 12c0 .5-.063 1-.125 1.5h-3.625c.063-.5.063-1 .063-1.5s0-1-.063-1.5h3.625c.063.5.125 1 .125 1.5zM12 22c-2.625 0-4.938-1.188-6.5-3.063.25-.063.5-.188.688-.313.438-.25.875-.563 1.25-.938.375-.438.688-.938.938-1.5.25-.5.438-1.063.563-1.688h6.125c.125.625.313 1.188.563 1.688.25.563.563 1.063.938 1.5.375.375.813.688 1.25.938.188.125.438.25.688.313C16.938 20.813 14.625 22 12 22zm-1.563-9c0-.5.063-1.063.188-1.5h2.75c.125.438.188.938.188 1.5s-.063 1.063-.188 1.5h-2.75c-.125-.438-.188-.938-.188-1.5zm-8.312 0c0-.5.063-1 .125-1.5h3.625c-.063.5-.063 1-.063 1.5s0 1 .063 1.5H2.25c-.063-.5-.125-1-.125-1.5zm15.813-4.5h-3c-.188-1.313-.625-2.563-1.25-3.688 1.938 1 3.5 2.563 4.25 4.5V8.5zm-5.438 0h-4c.188-.625.375-1.25.625-1.813.25-.563.563-1.063.938-1.5.375-.375.813-.688 1.25-.938.188-.125.438-.25.688-.313.25.063.5.188.688.313.438.25.875.563 1.25.938.375.438.688.938.938 1.5.25.563.438 1.188.625 1.813zM6.063 4.813c-.625 1.125-1.063 2.375-1.25 3.688h-3c.75-1.938 2.25-3.5 4.25-4.5V4.813zM1.75 14h3c.188 1.313.625 2.563 1.25 3.688-1.938-1-3.5-2.563-4.25-4.5V14zm14.188 3.688c.625-1.125 1.063-2.375 1.25-3.688h3c-.75 1.938-2.25 3.5-4.25 4.5v-.813z" />
                  </motion.svg>
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Jannis Grimm. All rights reserved.
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Define CSS for background grid pattern
const gridPattern = `
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .gradient-animation {
    animation: gradient-shift 8s ease infinite;
    background-size: 200% auto;
  }

  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -10px) scale(1.05); }
    50% { transform: translate(0, 10px) scale(1); }
    75% { transform: translate(-20px, -10px) scale(0.95); }
  }

  .animate-blob {
    animation: blob 10s infinite ease;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .bg-grid-pattern {
    background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .dark .bg-grid-pattern {
    background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  }
`;

// Inject the CSS into the document head
const injectCSS = () => {
  const style = document.createElement('style');
  style.textContent = gridPattern;
  document.head.appendChild(style);
};

// Call injectCSS when the component mounts
React.useEffect(() => {
  injectCSS();
  return () => {
    // Cleanup logic if needed
  };
}, []);

// Export the component
export default Home;import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom component for section headers with gradient animation
const SectionHeader = ({ children, align = "center", className = "" }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7 }}
    className={`text-4xl md:text-5xl font-semibold mb-6 ${
      align === "center" ? "text-center" : ""
    } tracking-tight ${className}`}
  >
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 gradient-animation">
      {children}
    </span>
  </motion.h2>
);

// Interactive pill button component
const PillButton = ({ children, primary, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md ${
      primary 
        ? "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500" 
        : "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white focus:ring-gray-500"
    }`}
    whileHover={{ y: -3 }}
    whileTap={{ y: 0 }}
  >
    {children}
  </motion.button>
);

// Animated skill bar
const SkillBar = ({ skill, level, darkMode }) => (
  <motion.div 
    className="mb-4"
    initial={{ opacity: 0, width: 0 }}
    whileInView={{ opacity: 1, width: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="flex justify-between mb-1">
      <span className={`${level >= 90 ? 'font-medium' : ''}`}>{skill}</span>
      <span className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium`}>{level}%</span>
    </div>
    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <motion.div 
        className={`h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500`}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  </motion.div>
);

// Experience card with parallax effect
const ExperienceCard = ({ company, position, period, location, responsibilities, darkMode, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-8 relative overflow-hidden`}
  >
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/5 dark:to-blue-900/5 pointer-events-none" />
    
    <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 relative z-10">
      <div>
        <h3 className="text-2xl font-semibold">{company}</h3>
        <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{position}</p>
      </div>
      <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
        <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{period}</p>
        <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{location}</p>
      </div>
    </div>
    
    <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} relative z-10`}>
      {responsibilities.map((item, index) => (
        <motion.li 
          key={index} 
          className="flex items-start"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 * index + delay }}
        >
          <span className={`mr-2 pt-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>•</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
    
    {/* Decorative element */}
    <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-transparent ${darkMode ? 'to-blue-500/10' : 'to-blue-500/5'} blur-xl pointer-events-none`} />
  </motion.div>
);

// Project card with hover effects
const ProjectCard = ({ title, description, tags, icon, darkMode, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -8 }}
    className={`rounded-3xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl h-full group`}
  >
    <div className={`h-48 flex items-center justify-center ${
      darkMode 
        ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    } relative overflow-hidden`}>
      {/* Animated icon */}
      <motion.div
        className={`z-10 ${darkMode ? 'text-blue-400' : 'text-blue-500'} transition-all duration-500`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-grid-pattern transform rotate-12 scale-150" />
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/10 group-hover:to-indigo-600/10 transition-all duration-500" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className={`px-3 py-1 rounded-full text-sm ${
              darkMode 
                ? 'bg-gray-700 text-gray-300' 
                : 'bg-gray-200 text-gray-700'
            } transition-colors duration-300`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Main Home component
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Refs for each section to enable smooth scrolling
  const sectionRefs = {
    home: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  // Handle dark mode
  useEffect(() => {
    // Check system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    
    // Apply dark mode class to html
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check each section's position to determine which is active
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (!ref.current) return;
        
        const sectionTop = ref.current.offsetTop;
        const sectionHeight = ref.current.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  // Smooth scroll function
  const smoothScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (sectionRefs[id] && sectionRefs[id].current) {
      window.scrollTo({
        top: sectionRefs[id].current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(e, 'home');
              }}
              className="text-2xl font-semibold"
            >
              Jannis Grimm
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={(e) => smoothScroll(e, item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-500 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400'
                  } hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={toggleDarkMode}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800"
              >
                <div className="p-6 pb-8 flex flex-col space-y-4">
                  {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={(e) => smoothScroll(e, item.toLowerCase())}
                      className={`${
                        activeSection === item.toLowerCase() 
                          ? 'text-blue-500 dark:text-blue-400' 
                          : 'text-gray-500 dark:text-gray-400'
                      } text-lg`}
                    >
                      {item}
                    </button>
                  ))}
                  <div className="pt-4 flex items-center">
                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                      {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    <button 
                      onClick={toggleDarkMode}
                      className={`w-12 h-6 rounded-full ${
                        darkMode ? 'bg-blue-500' : 'bg-gray-300'
                      } transition flex items-center ${
                        darkMode ? 'justify-end' : 'justify-start'
                      } p-1`}
                      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                      <motion.div 
                        layout
                        className="w-4 h-4 rounded-full bg-white"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          {/* Hero Section */}
          <section 
            ref={sectionRefs.home}
            id="home" 
            className="pt-32 pb-20 md:pt-40 md:pb-32 px-6"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative"
              >
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"
                  animate={{ 
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 right-1/4 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                  animate={{ 
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.h1 
                  className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 gradient-animation">
                    Jannis Grimm
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Exceptional Software Engineer with a strong Computer Science background 
                  and over four years of experience developing innovative apps for Apple platforms.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Specialized in creating user-centric, highly scalable experiences, 
                  having led projects recognized by Microsoft.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <PillButton 
                    primary 
                    onClick={(e) => smoothScroll(e, 'contact')}
                  >
                    Get in Touch
                  </PillButton>
                  <PillButton 
                    onClick={(e) => smoothScroll(e, 'projects')}
                  >
                    View Projects
                  </PillButton>
                </motion.div>
                
                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                    className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-1"
                  >
                    <motion.div
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="w-1.5 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"
                    />
                  </motion.div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">Scroll Down</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section 
            ref={sectionRefs.experience}
            id="experience" 
            className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader>Professional Experience</SectionHeader>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
              >
                Over four years of professional experience developing innovative applications 
                for various platforms.
              </motion.p>

              <div className="space-y-8">
                <ExperienceCard
                  company="Synechron Inc"
                  position="Jr. Developer, Project Manager"
                  period="03/2024 - Present"
                  location="New York City, NY"
                  darkMode={darkMode}
                  delay={0}
                  responsibilities={[
                    "Migrated critical parts of Synchrony Financials banking app codebase to SwiftUI, significantly improving code efficiency and maintainability, reducing friction and responsiveness by 30%.",
                    "Implemented comprehensive accessibility features across the entire application, increasing user inclusivity by 20%.",
                    "Optimized code base, reducing code by up to a factor of 3 through the use of native elements and declarative code patterns.",
                    "Resolved user-critical tickets, enhancing the reliability and performance of the application.",
                    "Prototyped, designed, and implemented concept features for US Bank allowing customers with small and medium enterprises to view their business metrics alongside their personal finances. Led to their business to be expanded by up to 30%"
                  ]}
                />

                <ExperienceCard
                  company="SeeMe Ltd"
                  position="iOS Engineer"
                  period="11/2021 - 03/2024"
                  location="Tempe, AZ"
                  darkMode={darkMode}
                  delay={0.1}
                  responsibilities={[
                    "Spearheaded the iOS-centric development of SeeMe, a cross-platform digital life coach app, leveraging SwiftUI for front-end and Firebase with a Node.js backend for scalable real-time data processing.",
                    "Enhanced user engagement by 300% through AI-driven feedback, utilizing the OpenAI API for personalized insights.",
                    "Focused on crafting a seamless UI/UX focused on efficiency and performance that adheres to Apple's Human Interface Guidelines, ensuring a visually appealing and intuitive experience.",
                    "Directed and collaborated with an agile team in designing a multi-threaded architecture, achieving Microsoft's endorsement and a pre-product valuation of 2.1 Million USD, demonstrating significant market potential and innovation in personal growth technology."
                  ]}
                />

                <ExperienceCard
                  company="Lufthansa AG"
                  position="Software Engineer Intern"
                  period="05/2022 - 11/2022"
                  location="Hamburg, Germany"
                  darkMode={darkMode}
                  delay={0.2}
                  responsibilities={[
                    "Conceived and developed from scratch a data management microservice, which enhanced the visualization, editing, and updating of internal databases addressing the need for efficient data handling and manipulation for Lufthansa's clients.",
                    "Integrated backend database interactions, boosting service efficiency and opening access to a new online market.",
                    "Implemented Docker and Kubernetes for a resilient deployment and scaling strategy, bolstering enterprise readiness and directly contributing to Lufthansa securing two new clients."
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section 
            ref={sectionRefs.projects}
            id="projects" 
            className="py-24 px-6"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader>Projects</SectionHeader>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
              >
                A collection of personal projects and professional accomplishments.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="AI Cover Letter Creator"
                  description="A Python terminal application that generates tailored cover letters by analyzing job descriptions via a pasted URL, utilizing the OpenAI API."
                  tags={["Python", "OpenAI API", "NLP"]}
                  darkMode={darkMode}
                  delay={0}
                  icon={
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                      <path d="M10 8.5h1v1h-1zM12.5 8.5h1v1h-1zM15 8.5h1v1h-1zM10 11h1v1h-1zM15 11h1v1h-1zM10 13.5h1v1h-1zM12.5 13.5h1v1h-1zM15 13.5h1v1h-1z" />
                    </svg>
                  }
                />

                <ProjectCard
                  title="LifeLine & MyLife"
                  description="Lifestyle apps designed to help users gain insights into their personal achievements. Built entirely in Swift with a focus on intuitive UX."
                  tags={["Swift", "UIKit", "CoreData"]}
                  darkMode={darkMode}
                  delay={0.1}
                  icon={
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0
