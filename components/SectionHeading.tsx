type SectionHeadingProps = {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-12 -mb-6">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-700 mb-8">{subtitle}</p>}
    </div>
  )
}
