import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubContributions = ({ username = 'iamjannisgrimm', darkMode }) => {
  const [contributionData, setContributionData] = useState({
    totalContributions: 0,
    weeks: [],
    loading: true,
    error: null
  });

  // Instead of making a real API call (which would require authentication),
  // we'll create simulated data for demonstration purposes
  useEffect(() => {
    const generateMockContributions = () => {
      // Generate 52 weeks (1 year) of contribution data
      const weeks = Array.from({ length: 52 }, (_, weekIndex) => {
        // Generate 7 days per week
        const days = Array.from({ length: 7 }, (_, dayIndex) => {
          // Generate a random contribution count, weighted towards 0-2
          const rand = Math.random();
          let count = 0;
          
          if (rand > 0.7) count = Math.floor(Math.random() * 3) + 1; // 30% chance of 1-3
          if (rand > 0.9) count = Math.floor(Math.random() * 5) + 3; // 10% chance of 3-7
          if (rand > 0.98) count = Math.floor(Math.random() * 10) + 5; // 2% chance of 5-14
          
          return {
            date: new Date(2023, 0, 1 + (weekIndex * 7 + dayIndex)),
            count
          };
        });
        
        return { days };
      });
      
      // Calculate total contributions
      const totalContributions = weeks.reduce((total, week) => {
        return total + week.days.reduce((weekTotal, day) => weekTotal + day.count, 0);
      }, 0);
      
      setContributionData({
        totalContributions,
        weeks,
        loading: false,
        error: null
      });
    };
    
    // Simulate API delay
    const timer = setTimeout(() => {
      generateMockContributions();
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to determine the color based on contribution count
  const getContributionColor = (count) => {
    if (count === 0) return darkMode ? 'bg-gray-800' : 'bg-gray-100';
    if (count <= 2) return darkMode ? 'bg-blue-900' : 'bg-blue-200';
    if (count <= 5) return darkMode ? 'bg-blue-700' : 'bg-blue-300';
    if (count <= 10) return darkMode ? 'bg-blue-500' : 'bg-blue-400';
    return darkMode ? 'bg-blue-400' : 'bg-blue-500';
  };

  // Format date as MMM D, YYYY
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  // Render loading state
  if (contributionData.loading) {
    return (
      <div className="w-full flex items-center justify-center p-8">
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin mb-4`}></div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading contributions...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (contributionData.error) {
    return (
      <div className="w-full p-8 flex justify-center">
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'}`}>
          <p>Failed to load GitHub contributions: {contributionData.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {/* Contribution summary */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold">
          {contributionData.totalContributions} contributions in the last year
        </h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          GitHub activity for {username}
        </p>
      </motion.div>
      
      {/* Contribution grid */}
      <motion.div 
        className="overflow-x-auto pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="min-w-[800px]">
          {/* Month labels */}
          <div className="flex text-xs mb-2">
            <div className="w-10"></div>
            {Array.from({ length: 12 }, (_, i) => {
              // Get month name (short)
              const date = new Date(2023, i, 1);
              const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
              // Position each month label approximately at the right spot
              const style = { marginLeft: i === 0 ? '0' : (i === 1 ? '8px' : '28px') };
              return (
                <div key={month} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} style={style}>
                  {month}
                </div>
              );
            })}
          </div>
          
          {/* Day labels and contribution cells */}
          <div className="flex">
            {/* Day of week labels */}
            <div className="w-10 flex flex-col justify-around text-xs mr-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                i % 2 === 0 && (
                  <div key={day} className={`h-[11px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {day}
                  </div>
                )
              ))}
            </div>
            
            {/* Contribution grid cells */}
            <div className="flex">
              {contributionData.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col mr-[2px]">
                  {week.days.map((day, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      className={`w-[10px] h-[10px] rounded-sm mb-[2px] cursor-pointer ${getContributionColor(day.count)}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                      whileHover={{ scale: 1.5 }}
                      data-tip={`${day.count} contributions on ${formatDate(day.date)}`}
                      title={`${day.count} contributions on ${formatDate(day.date)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Contribution legend */}
      <motion.div 
        className="flex items-center justify-end text-xs mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Less</span>
        {[0, 2, 5, 10, 15].map((level) => (
          <div 
            key={level} 
            className={`w-[10px] h-[10px] rounded-sm mx-1 ${getContributionColor(level)}`}
          />
        ))}
        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>More</span>
      </motion.div>
      
      {/* Contribution stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} text-center`}>
          <div className="text-2xl font-bold text-blue-500">{contributionData.totalContributions}</div>
          <div className="text-sm">Total Contributions</div>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} text-center`}>
          <div className="text-2xl font-bold text-blue-500">42</div>
          <div className="text-sm">Repositories</div>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} text-center`}>
          <div className="text-2xl font-bold text-blue-500">156</div>
          <div className="text-sm">Pull Requests</div>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} text-center`}>
          <div className="text-2xl font-bold text-blue-500">78</div>
          <div className="text-sm">Code Reviews</div>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubContributions;
