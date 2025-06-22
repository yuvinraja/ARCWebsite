import TeamCard from "./TeamCard";
import { teamMembers } from "./teamData";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          We are a diverse group of professionals dedicated to delivering the
          best solutions for our clients.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </main>
  );
}
