import { useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface teamMember {
    name: string;
    role: string;
    socials: {
        linkedin: string;
        instagram: string;
    };
    bio: string;
    fullBio: string;
    image: string;
}

const teamMembers: teamMember[] = [
    {
        name: 'Manish Yadav (Grownlad)',
        role: 'Founder',
        socials: { linkedin: '#', instagram: '#' },
        bio: '8+ years in the industry, worked with famous clients like Amazing Anseen & Apareemita.',
        fullBio: 'Manish Yadav, also known as Grownlad, has been shaping the social media industry for over 8 years. He has worked with high-profile clients such as Amazing Anseen & Apareemita, helping brands establish a powerful online presence. His expertise in digital strategy and content growth has set new benchmarks in the industry.',
        image: '/manish.jpeg'
    },
    {
        name: 'Avinash Kumar Singh',
        role: 'Tech Guy & Project Manager',
        socials: { linkedin: '#', instagram: '#' },
        bio: 'Tech enthusiast and project manager ensuring smooth execution of technical aspects.',
        fullBio: 'Avinash Kumar Singh is a dedicated tech expert and project manager at Grow-Key. With a strong background in managing complex technical projects, he ensures seamless execution and innovation. His problem-solving skills and leadership play a crucial role in the company’s success.',
        image: '/avinash.jpeg'
    },
];

const otherMembers = [
    { name: 'Ranjan Raj', role: 'Team Member' },
    { name: 'Subham Kumar', role: 'Team Member' },
    { name: 'Raushan Kumar', role: 'Team Member' },
    { name: 'Piyush Kumar', role: 'Team Member' },
    { name: 'Aman Kumar', role: 'Team Member' },
    { name: 'Abhay Poddar', role: 'Team Member' },
];

const TeamPage = () => {
    const [showFullBio, setShowFullBio] = useState<{ Manish: boolean; Avinash: boolean }>({ Manish: false, Avinash: false });

    const toggleBio = (key: 'Manish' | 'Avinash') => {
        setShowFullBio((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-500 text-center">We are a passionate team dedicated to delivering excellence in social media growth.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
                {teamMembers.map((member, index) => {
                    const key = member.name.includes('Manish') ? 'Manish' : 'Avinash';
                    return (
                        <div key={index} className={`${index === 1 ? 'bg-purple-50' : 'bg-white'} border border-purple-500 p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105`}>
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                            <h2 className="text-2xl text-gray-800 font-semibold">{member.name}</h2>
                            <p className="text-sm text-gray-400">{member.role}</p>
                            {member.bio && (
                                <p className="mt-2 text-gray-500">
                                    {showFullBio[key] ? member.fullBio : member.bio}
                                    {member.fullBio && (
                                        <button
                                            className="text-blue-600 text-xs ml-2"
                                            onClick={() => toggleBio(key)}
                                        >
                                            {showFullBio[key] ? 'Read Less' : 'Read More'}
                                        </button>
                                    )}
                                </p>
                            )}
                            {member.socials && (
                                <div className="mt-3 flex justify-center gap-3">
                                    {member.socials.linkedin && <a href={member.socials.linkedin} className="text-blue-600"><Linkedin size={20} /></a>}
                                    {member.socials.instagram && <a href={member.socials.instagram} className="text-pink-600"><Instagram size={20} /></a>}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                {otherMembers.map((member, index) => (
                    <div key={index} className={` ${index % 2 === 0 ? 'bg-purple-50' : 'bg-white border border-purple-500'} p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105`}>
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;