import React from 'react';

interface ActivityCardProps {
  title: string;
  value: string;
  goal: string;
  unit: string;
  icon: React.ReactNode;
  progress: number; // Value between 0 and 100
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  value,
  goal,
  unit,
  icon,
  progress,
}) => {
  const circumference = 2 * Math.PI * 28; // Assuming radius of 28 for a 60x60 SVG viewbox center
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl motion-reduce:transition-none"
      style={{ backgroundColor: '#1e40af', color: '#f8fafc' }} // secondary-bg, text
    >
      <div className="flex items-center justify-between w-full mb-3">
        <h3 className="font-heading text-lg font-medium" style={{ color: '#f8fafc' }}>{title}</h3>
        <div style={{ color: '#93c5fd' }}> {/* primary light blue for icon */}
          {icon}
        </div>
      </div>

      <div className="relative w-32 h-32 mb-3">
        <svg className="w-full h-full" viewBox="0 0 60 60">
          {/* Background Circle */}
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="none"
            strokeWidth="4"
            style={{ stroke: '#3b82f6', opacity: 0.3 }} // accent blue for track
          />
          {/* Progress Circle */}
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="none"
            strokeWidth="4"
            style={{ stroke: '#93c5fd' }} // primary light blue for progress
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 30 30)"
            className="transition-all duration-700 ease-out motion-reduce:transition-none"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading text-3xl font-bold" style={{ color: '#f8fafc' }}>{value}</span>
          <span className="font-sans text-xs" style={{ color: '#f8fafc', opacity: 0.8 }}>{unit}</span>
        </div>
      </div>

      <p className="font-sans text-sm" style={{ color: '#f8fafc', opacity: 0.7 }}>
        Goal: {goal} {unit}
      </p>
    </div>
  );
};

export default ActivityCard;
