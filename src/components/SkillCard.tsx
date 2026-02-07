// components/SkillCard.tsx
import React from "react";

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex items-center justify-center w-28 h-28 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition-all">
      {/* Skill Name Only */}
      <span className="text-white text-sm font-medium text-center">{skill}</span>
    </div>
  );
};

export default SkillCard;
