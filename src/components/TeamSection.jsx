import React from 'react';

const teamMembers = [
    {
        name: "Jim Fazio Jr.",
        title: "Founder & Golf Course Architect",
        image: "/images/team/Jimmy-Fazio-BW.jpg",
        description1: `A lifelong passion for golf design began early for Jim Fazio, who was raised among generations of golf course architects. At just twelve years old, he began developing his artistic skills by sketching imagined golf holes under the guidance of mentors. Since then, he has contributed to over 50 projects, many of which have earned national and international recognition—including Top 100 rankings and numerous regional awards.`,
        description2: `Jim possesses an innate ability to visualize compelling golf holes, blending his creative instincts with strategic design to challenge players of all skill levels. His approach incorporates market trends to ensure each course delivers a strong return on investment for clients, drawing in a wide range of golfers while maintaining ecological responsibility and minimizing long-term maintenance needs.`,
        description3: `Having been immersed in the game since childhood, Jim is among the few designers with hands-on experience shaping golf courses from concept to completion. What has always fascinated him most is the artistic aspect of land shaping—an opportunity not every architect has the skill or chance to explore.`,
        description4: `Based in the golf capital of the world—South Florida—Jim has led projects across the United States as well as in Japan, South Korea, Italy, the Bahamas, and the Grenadines, designing for championship, resort, private membership, and daily fee courses.`
    },
    {
        name: "Michael Freeman",
        title: "Design Associate",
        image: "/images/team/michael-freeman.png",
        description1: `Throughout Michael's career, he has been involved in over 100 projects in 12 countries, some that have ranked in the Top 100 in the World and many others hosting professional tournaments. He has worked in virtually every type of terrain and environment golf has to offer as well as tournament, private membership, resort, public and municipal courses.`,
        description2: `He has been involved on projects with architects such as Tom Fazio, Jack Nicklaus, Jim Fazio, Greg Norman, Tom Weiskopf, Gil Hanse, Robert Trent Jones Jr. and a host of of other great designers.`,
        description3: `Michael has experience building golf course from the ground up constructing features, shaping, project management, GIS applications, drone mapping, 3D renderings and specializes in guiding investors through the design and development phases.`,
        description4: `His diverse expertise and global perspective make him a trusted partner for clients seeking innovative, high-quality golf course developments.`
    }
];

const TeamSection = () => {
    return (
        <section className="bg-black-200 text-white px-6 md:px-16 py-10 fade-in">
            <div className="text-center mb-12">
                <h2 className="text-4xl text-white-50 font-extrabold uppercase tracking-wider">Meet the Team</h2>
                <p className="mt-4 text-lg text-white-300">The minds behind our world-class golf course designs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-start text-left hover:bg-white/10 transition">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-41 object-cover rounded-full mb-6 border-4 border-white/20 self-center"
                        />
                        <h3 className="text-2xl font-bold text-white-50">{member.name}</h3>

                        <p className="text-white/70 italic">{member.title}</p>
                        <p className="mt-4 text-lg mb-10 leading-relaxed  text-white/90">{member.description1}</p>
                        <p className="mb-6 text-lg leading-relaxed text-white/90">{member.description2}</p>
                        <p className="mb-6 text-lg leading-relaxed text-white/90">{member.description3}</p>
                        <p className="mb-6 text-lg leading-relaxed text-white/90">{member.description4}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
