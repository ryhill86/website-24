import React from 'react';

interface SkillPillProps {
  skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
  return (
    <div className="border-primary border text-primary px-3 py-1 rounded-full text-xs mx-2 text-center hover:bg-white hover:text-inverse cursor-pointer">
      {skill}
    </div>
  );
};

export default SkillPill;
