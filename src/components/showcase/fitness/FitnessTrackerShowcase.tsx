import React from 'react';
import ActivityCard from './ActivityCard';
import { FiTrendingUp, FiZap, FiClock, FiTarget, FiEdit, FiPlusCircle, FiCheckCircle, FiPlayCircle, FiRepeat, FiHeart, FiCalendar, FiType, FiBarChart2, FiList, FiBell, FiSettings } from 'react-icons/fi'; // Added FiBell, FiSettings

interface WorkoutLogItem {
  id: string;
  icon: React.ReactNode;
  type: string;
  stats: string;
  dateTime: string;
}

const mockWorkoutLog: WorkoutLogItem[] = [
  { id: 'w1', icon: <FiTrendingUp className="w-5 h-5" />, type: 'Morning Run', stats: '5.2 km - 32 min', dateTime: 'Today, 7:15 AM' },
  { id: 'w2', icon: <FiRepeat className="w-5 h-5" />, type: 'Gym Session - Strength', stats: '1 hour - 350 kcal', dateTime: 'Yesterday, 6:30 PM' },
  { id: 'w3', icon: <FiPlayCircle className="w-5 h-5" />, type: 'Evening Yoga', stats: '45 min - 120 kcal', dateTime: '2 days ago, 8:00 PM' },
];

const activityTypes = [
  { id: 'run', name: 'Running', icon: <FiTrendingUp className="w-6 h-6" /> },
  { id: 'walk', name: 'Walking', icon: <FiZap className="w-6 h-6" /> }, // Using FiZap as placeholder
  { id: 'cycle', name: 'Cycling', icon: <FiRepeat className="w-6 h-6" /> }, // Using FiRepeat as placeholder
  { id: 'swim', name: 'Swimming', icon: <FiHeart className="w-6 h-6" /> }, // Using FiHeart as placeholder
  { id: 'gym', name: 'Gym', icon: <FiTarget className="w-6 h-6" /> },
  { id: 'yoga', name: 'Yoga', icon: <FiPlayCircle className="w-6 h-6" /> },
];


const FitnessTrackerShowcase: React.FC = () => {
  const placeholderActivities = [
    {
      id: '1',
      title: 'Steps',
      value: '8,750',
      goal: '10,000',
      unit: 'steps',
      icon: <FiTrendingUp className="w-6 h-6" />,
      progress: 87.5,
    },
    {
      id: '2',
      title: 'Calories Burned',
      value: '1,230',
      goal: '2,000',
      unit: 'kcal',
      icon: <FiZap className="w-6 h-6" />,
      progress: 61.5,
    },
    {
      id: '3',
      title: 'Active Minutes',
      value: '45',
      goal: '60',
      unit: 'min',
      icon: <FiClock className="w-6 h-6" />,
      progress: 75,
    },
     {
      id: '4',
      title: 'Workouts',
      value: '3',
      goal: '5',
      unit: 'sessions',
      icon: <FiTarget className="w-6 h-6" />,
      progress: 60,
    },
  ];

  return (
    <div style={{ backgroundColor: '#1e3a8a', color: '#f8fafc' }} className="py-12 md:py-20 showcase-fitness">
      <div className="container mx-auto px-4">
        {/* Showcase Header with Profile Snippet */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 md:mb-4">
              Fitness Tracker Showcase
            </h1>
            <p className="text-lg md:text-xl mx-auto md:mx-0 max-w-3xl opacity-80">
              Visualize your journey to a healthier you with our intuitive and motivating fitness tracking interface.
            </p>
          </div>
          {/* Settings/Profile Snippet */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0" style={{color: '#f8fafc'}}>
            <div className="relative">
              <FiBell className="w-6 h-6 hover:opacity-80 cursor-pointer" style={{color: '#93c5fd'}} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1e3a8a]"></span>
            </div>
            <span className="font-sans text-sm">Alex Johnson</span>
            <img
              src="https://via.placeholder.com/40x40/93c5fd/1e3a8a?text=AJ"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2"
              style={{borderColor: '#93c5fd'}}
            />
            <FiSettings className="w-6 h-6 hover:opacity-80 cursor-pointer" style={{color: '#93c5fd'}} />
          </div>
        </div>

        {/* Dashboard Section - Activity Summary */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
            Today's Activity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {placeholderActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                value={activity.value}
                goal={activity.goal}
                unit={activity.unit}
                icon={activity.icon}
                progress={activity.progress}
              />
            ))}
          </div>
        </div>

        {/* Placeholder for other sections like Workout Log, Progress Charts */}
        {/* Workout Log Section */}
        <div className="my-16 md:my-24 pt-12 border-t border-dashed" style={{borderColor: '#0e7490'}}>
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#f8fafc' }}>
              Activity History
            </h2>
          </header>
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            {mockWorkoutLog.map(log => (
              <div key={log.id} className="p-4 rounded-lg flex items-center space-x-4" style={{backgroundColor: '#1e40af'}}>
                <div className="flex-shrink-0" style={{color: '#93c5fd'}}>{log.icon}</div>
                <div className="flex-grow">
                  <h4 className="font-display font-semibold" style={{color: '#f8fafc'}}>{log.type}</h4>
                  <p className="text-sm opacity-80">{log.stats}</p>
                </div>
                <p className="text-xs opacity-60 flex-shrink-0">{log.dateTime}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn font-display font-semibold py-2.5 px-6 rounded-lg transition-opacity text-sm"
              style={{ backgroundColor: '#93c5fd', color: '#1e3a8a' }} // Primary light blue bg, dark blue text for contrast
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              <FiPlusCircle className="inline mr-2 mb-0.5" /> Log New Workout
            </button>
          </div>
        </div>
        {/* END Workout Log Section */}

        {/* New Workout Form Mockup Section */}
        <div className="my-16 md:my-24 pt-12 border-t border-dashed" style={{borderColor: '#0e7490'}}>
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#f8fafc' }}>
              Log a New Activity
            </h2>
          </header>
          <div className="max-w-xl mx-auto p-6 md:p-8 rounded-lg shadow-2xl" style={{ backgroundColor: '#1e40af' }}>
            {/* Activity Type Selection */}
            <div className="mb-6">
              <h4 className="text-lg font-display font-medium mb-3" style={{ color: '#93c5fd' }}>Select Activity Type</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 text-center">
                {activityTypes.map((type, index) => (
                  <button
                    key={type.id}
                    type="button"
                    className={`p-3 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${index === 0 ? 'ring-2 ring-offset-2 ring-offset-[#1e40af]' : 'opacity-70 hover:opacity-100'}`}
                    style={{backgroundColor: '#0e7490', color: index === 0 ? '#67e8f9' : '#f8fafc', ringColor: '#67e8f9'}} // primary cyan for selected
                    aria-pressed={index === 0}
                  >
                    {type.icon}
                    <span className="text-xs font-sans">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields Mockup */}
            <div className="space-y-4">
              <div>
                <label htmlFor="duration" className="block text-sm font-medium mb-1 opacity-90">Duration</label>
                <div className="p-2.5 rounded-md text-sm" style={{backgroundColor: '#0e7490', color: '#f8fafc', opacity: 0.7}}>00:45:00</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="distance" className="block text-sm font-medium mb-1 opacity-90">Distance</label>
                  <div className="p-2.5 rounded-md text-sm" style={{backgroundColor: '#0e7490', color: '#f8fafc', opacity: 0.7}}>5.20 km</div>
                </div>
                <div>
                  <label htmlFor="calories" className="block text-sm font-medium mb-1 opacity-90">Calories Burned</label>
                  <div className="p-2.5 rounded-md text-sm" style={{backgroundColor: '#0e7490', color: '#f8fafc', opacity: 0.7}}>350 kcal</div>
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1 opacity-90">Date & Time</label>
                <div className="p-2.5 rounded-md text-sm" style={{backgroundColor: '#0e7490', color: '#f8fafc', opacity: 0.7}}>July 28, 2024, 7:15 AM</div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1 opacity-90">Notes (Optional)</label>
                <div className="p-2.5 rounded-md text-sm h-20" style={{backgroundColor: '#0e7490', color: '#f8fafc', opacity: 0.7}}>Morning run, felt great...</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                className="btn font-display font-semibold py-3 px-8 rounded-lg transition-opacity text-base"
                style={{ backgroundColor: '#93c5fd', color: '#1e3a8a' }} // Primary light blue bg, dark blue text
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                Save Workout
              </button>
            </div>
          </div>
        </div>
        {/* END New Workout Form Mockup Section */}

        {/* Progress Charts Section */}
        <div className="my-16 md:my-24 pt-12 border-t border-dashed" style={{borderColor: '#0e7490'}}>
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#f8fafc' }}>
              Track Your Growth
            </h2>
          </header>

          {/* Chart Controls Mockup */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="flex space-x-2 p-1 rounded-lg" style={{backgroundColor: '#0e7490'}}>
              <button type="button" className="btn-sm px-3 py-1.5 rounded-md text-xs font-medium" style={{backgroundColor: '#93c5fd', color: '#1e3a8a'}}>Weekly</button>
              <button type="button" className="btn-sm px-3 py-1.5 rounded-md text-xs font-medium opacity-70 hover:opacity-100" style={{color: '#f8fafc'}}>Monthly</button>
              <button type="button" className="btn-sm px-3 py-1.5 rounded-md text-xs font-medium opacity-70 hover:opacity-100" style={{color: '#f8fafc'}}>3 Months</button>
            </div>
            <div className="flex space-x-2 p-1 rounded-lg" style={{backgroundColor: '#0e7490'}}>
              <button type="button" className="btn-sm px-3 py-1.5 rounded-md text-xs font-medium" style={{backgroundColor: '#93c5fd', color: '#1e3a8a'}}>Weight</button>
              <button type="button" className="btn-sm px-3 py-1.5 rounded-md text-xs font-medium opacity-70 hover:opacity-100" style={{color: '#f8fafc'}}>Duration</button>
              <button type="button" className="btn-sm px-3 py-1.5 rounded-md text-xs font-medium opacity-70 hover:opacity-100" style={{color: '#f8fafc'}}>Steps</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Line Chart Mockup for Weight */}
            <div className="p-6 rounded-lg shadow-xl" style={{backgroundColor: '#1e40af'}}>
              <h4 className="text-lg font-display font-semibold mb-4 text-center" style={{color: '#f8fafc'}}>Weight Over Time</h4>
              <div className="h-64 w-full">
                <svg width="100%" height="100%" viewBox="0 0 300 150">
                  {/* Grid lines */}
                  {[30, 60, 90, 120].map(y => <line key={y} x1="20" y1={y} x2="280" y2={y} stroke="#0e7490" strokeWidth="0.5" />)}
                  <line x1="20" y1="120" x2="280" y2="120" stroke="#f0f9ff" strokeWidth="1" /> {/* X-axis */}
                  <line x1="20" y1="20" x2="20" y2="120" stroke="#f0f9ff" strokeWidth="1" /> {/* Y-axis */}

                  {/* Data line */}
                  <polyline points="30,100 90,80 150,90 210,70 270,60" fill="none" style={{stroke: '#93c5fd'}} strokeWidth="2"/>

                  {/* Data points */}
                  {[ {x:30,y:100}, {x:90,y:80}, {x:150,y:90}, {x:210,y:70}, {x:270,y:60} ].map(p =>
                    <circle key={p.x} cx={p.x} cy={p.y} r="3" fill="#93c5fd" />
                  )}

                  {/* X-axis labels */}
                  <text x="30" y="135" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="middle">Jan</text>
                  <text x="90" y="135" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="middle">Feb</text>
                  <text x="150" y="135" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="middle">Mar</text>
                  <text x="210" y="135" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="middle">Apr</text>
                  <text x="270" y="135" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="middle">May</text>

                  {/* Y-axis labels */}
                  <text x="15" y="120" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="end">70kg</text>
                  <text x="15" y="90" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="end">71kg</text>
                  <text x="15" y="60" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="end">72kg</text>
                  <text x="15" y="30" fontSize="10" fill="#f0f9ff" opacity="0.7" textAnchor="end">73kg</text>
                </svg>
              </div>
            </div>

            {/* Bar Chart Mockup for Workout Duration */}
            <div className="p-6 rounded-lg shadow-xl" style={{backgroundColor: '#1e40af'}}>
              <h4 className="text-lg font-display font-semibold mb-4 text-center" style={{color: '#f8fafc'}}>Workout Duration This Week</h4>
              <div className="h-64 w-full flex items-end justify-around px-2" style={{borderBottom: '1px solid #f0f9ff', borderLeft: '1px solid #f0f9ff'}}>
                {/* Bars */}
                {[60, 75, 45, 90, 30, 70, 50].map((height, i) => (
                  <div key={i} className="w-1/12 flex flex-col items-center">
                     <div className="text-xs mb-0.5 opacity-70" style={{color: '#93c5fd'}}>{height}m</div>
                    <div style={{height: `${height}%`, backgroundColor: '#3b82f6', width: '100%'}} className="rounded-t hover:opacity-80 transition-opacity"></div>
                    <div className="text-xs mt-1 opacity-70">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</div>
                  </div>
                ))}
                 {/* Y-axis labels (conceptual) */}
                <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-xs opacity-70" style={{height: 'calc(100% - 1rem)'}}>
                  <span>90m</span><span>60m</span><span>30m</span><span>0m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Progress Charts Section */}

      </div>
    </div>
  );
};

export default FitnessTrackerShowcase;
