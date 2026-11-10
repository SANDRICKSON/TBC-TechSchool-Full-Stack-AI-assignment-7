import React from 'react';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';

/**
 * Skills section
 */
export default function Skills() {
  return (
    <section id="skills" className="space-y-6 sm:space-y-8">
      <div className="border-b border-slate-800 pb-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span>ჩემი უნარ-ჩვევები და ტექნოლოგიები</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          ტექნოლოგიური სტეკი, ჩარჩოები და პროფესიული ხელსაწყოები:
        </p>
      </div>

      {/* Reusable SkillCard list using .map() */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.id}
            number={skill.number}
            title={skill.title}
            description={skill.description}
            items={skill.items}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}

