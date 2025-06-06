import TeamCard from './TeamCard'
import { teamMembers } from './teamData'

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-10">
      <h1 className="text-3xl font-bold text-center mb-12">Meet the Team</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </main>
  )
}
