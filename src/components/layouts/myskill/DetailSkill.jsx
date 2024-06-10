import { useState } from "react";
import { Skill } from "../../data/Skill"

export function DetailSkill() {
    const [selectedCategory, setSelectedCategory] = useState(Skill[0]);

    return (
        <>
            <div className="w-full bg-gradient-to-bl from-util to-gray-900 p-5 flex flex-col rounded-2xl gap-5">
                <div className="flex gap-2">
                    {Skill.map((category) => (
                        <button
                            key={category.id}
                            className={`px-4 py-2 font-medium rounded-lg ${selectedCategory.id === category.id ? 'bg-span text-white' : 'border border-span text-white'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
                    {selectedCategory.skill.map((skill) => (
                        <div key={skill.id} className="hover-container justify-between flex flex-col items-center py-3 px-5 border border-span rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={skill.image} alt={skill.title} className="w-12 h-12 mb-2" />
                            <p>{skill.title}</p>
                            <p className="hidden-hover absolute">{skill.skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}