import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillRadar = ({ skills, darkMode }) => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  // Calculate positions in a circular pattern
  const getPosition = (index, total, radius) => {
    const angle = (index / total) * Math.PI * 2; // Full circle in radians
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };
  
  // Calculate node size based on skill level
  const getNodeSize = (level) => {
    const minSize = 40;
    const maxSize = 80;
    return minSize + ((maxSize - minSize) * level / 100);
  };
  
  // Get color based on category
  const getColor = (category) => {
    const colors = {
      language: { bg: 'bg-blue-500', border: 'border-blue-400', text: 'text-blue-100' },
      framework: { bg: 'bg-purple-500', border: 'border-purple-400', text: 'text-purple-100' },
      tool: { bg: 'bg-green-500', border: 'border-green-400', text: 'text-green-100' },
      concept: { bg: 'bg-amber-500', border: 'border-amber-400', text: 'text-amber-100' },
      default: { bg: 'bg-gray-500', border: 'border-gray-400', text: 'text-gray-100' }
    };
    
    return colors[category] || colors.default;
  };
  
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Central hub */}
      <motion.div 
        className={`absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full flex items-center justify-center z-10 ${
          darkMode ? 'bg-indigo-900 text-indigo-100' : 'bg-indigo-500 text-indigo-50'
        } shadow-lg text-center`}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <div className="font-medium">Core Skills</div>
      </motion.div>
      
      {/* Radar grid background */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid meet"
      >
        <circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke={darkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 
          strokeWidth="0.5" 
        />
        <circle 
          cx="50" cy="50" r="35" 
          fill="none" 
          stroke={darkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 
          strokeWidth="0.5" 
        />
        <circle 
          cx="50" cy="50" r="25" 
          fill="none" 
          stroke={darkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 
          strokeWidth="0.5" 
        />
        <circle 
          cx="50" cy="50" r="15" 
          fill="none" 
          stroke={darkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 
          strokeWidth="0.5" 
        />
        
        {/* Radial lines */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x2 = 50 + 45 * Math.cos(angle);
          const y2 = 50 + 45 * Math.sin(angle);
          
          return (
            <line 
              key={i}
              x1="50" y1="50" 
              x2={x2} y2={y2} 
              stroke={darkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
      
      {/* Skill nodes */}
      {skills.map((skill, index) => {
        const { x, y } = getPosition(index, skills.length, 35);
        const nodeSize = getNodeSize(skill.level);
        const colors = getColor(skill.category);
        const isActive = activeSkill === skill.name;
        
        return (
          <motion.div
            key={skill.name}
            className={`absolute flex items-center justify-center rounded-full cursor-pointer border-2 ${
              isActive ? 'z-20' : 'z-0'
            } ${colors.bg} ${colors.border}`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              marginLeft: -nodeSize / 2,
              marginTop: -nodeSize / 2,
              width: nodeSize,
              height: nodeSize
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              boxShadow: isActive ? '0 0 15px rgba(99, 102, 241, 0.5)' : 'none'
            }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: 'spring'
            }}
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <div className={`text-center ${colors.text} px-2 text-sm font-medium`}>
              {skill.name}
            </div>
            
            {/* Connection line to center */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ zIndex: -1 }}
            >
              <line
                x1="50%" y1="50%"
                x2="50%" y2="100%"
                stroke={darkMode ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.5)'}
                strokeWidth="1"
                strokeDasharray={isActive ? "0" : "3,3"}
              />
            </svg>
            
            {/* Skill detail tooltip */}
            {isActive && (
              <motion.div
                className={`absolute p-3 rounded-lg ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                } shadow-xl w-48 z-30`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  top: y > 0 ? '120%' : 'auto',
                  bottom: y < 0 ? '120%' : 'auto',
                  left: x > 0 ? 'auto' : '120%',
                  right: x < 0 ? 'auto' : '120%',
                }}
              >
                <div className="text-sm font-semibold">{skill.name}</div>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs">{skill.level}%</span>
                </div>
                <p className="mt-2 text-xs">{skill.description}</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
      
      {/* Skill details panel - shows more info on active skill */}
      {activeSkill && (
        <motion.div
          className={`absolute bottom-4 left-4 right-4 p-4 rounded-lg ${
            darkMode ? 'bg-gray-800/80 backdrop-blur-md text-white' : 'bg-white/80 backdrop-blur-md text-gray-800'
          } shadow-xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-lg font-semibold">
            {skills.find(s => s.name === activeSkill)?.name}
          </div>
          <p className="text-sm mt-1">
            {skills.find(s => s.name === activeSkill)?.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SkillRadar;
