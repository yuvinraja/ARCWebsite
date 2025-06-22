interface GradientHeadingProps {
  title: string;
  description?: string;
  gradientClass?: string;
  children?: React.ReactNode; // Add this line to support children
}

export default function GradientHeading({
  title,
  description,
  gradientClass = "bg-gradient-to-br from-purple-600 via-pink-500 to-red-500",
  children, // Add this parameter
}: GradientHeadingProps) {
  return (
    <section className={`py-20 px-6 ${gradientClass}`}>
      <div className="max-w-6xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {description && (
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-6">{description}</p>
        )}
        {children} {/* Add this line to render the children */}
      </div>
    </section>
  );
}