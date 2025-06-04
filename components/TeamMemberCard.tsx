
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl p-6 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <img 
        className="mx-auto h-32 w-32 rounded-full object-cover mb-4 border-4 border-red-500/50" 
        src={member.imageUrl} 
        alt={member.name} 
      />
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="text-red-400 text-sm">{member.title}</p>
      <p className="mt-3 text-sm text-slate-400 flex-grow">{member.bio}</p>
    </div>
  );
};
