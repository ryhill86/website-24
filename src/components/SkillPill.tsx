import React from 'react';

interface SkillPillProps {
  dark?: boolean;
  skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill, dark = false }) => {
  const classes = dark
    ? 'border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white'
    : 'border-primary dark border text-primary hover:bg-white hover:text-inverse';
  return (
    <div
      className={`border px-3 py-1 rounded-full text-xs m-2 text-center transition-colors ease-in-out cursor-default ${classes}`}
    >
      {skill}
    </div>
  );
};

export default SkillPill;
