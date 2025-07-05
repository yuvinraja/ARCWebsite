# Voltaero Technologies Private Limited.

Welcome to the official website repository for Voltaero Technologies, a cutting-edge platform showcasing innovative drone technologies, autonomous systems, and robotics research. Built with modern web technologies, this website serves as a comprehensive showcase for drone projects, experimental research, team expertise, and company insights.

## 🚀 Project Overview

This is a sophisticated Next.js application that demonstrates the intersection of advanced robotics and modern web development. The platform features an elegant, responsive design that highlights autonomous drone projects, research experiments, team achievements, and company milestones through interactive galleries, detailed project showcases, and dynamic content management.

The website serves multiple audiences - from potential investors and research collaborators to students and technology enthusiasts interested in autonomous systems and drone technologies. Through its intuitive interface and comprehensive content management system, visitors can explore cutting-edge projects ranging from GPS-denied navigation solutions to autonomous swarm technologies.

## 📋 Project Requirements

### System Requirements
- **Node.js**: Version 18.17 or higher
- **npm**: Version 9.0 or higher (or equivalent package manager)
- **Git**: For version control and deployment

### Browser Compatibility
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Development Environment
- VS Code or similar modern code editor
- Terminal access for command-line operations

## 🛠 Dependencies

### Core Framework
- **Next.js 15.1.7**: React-based framework with App Router for modern web applications
- **React 19.0.0**: Component-based UI library with latest features
- **TypeScript 5**: Type-safe development environment

### Content Management
- **Sanity 3.93.0**: Headless CMS for blog posts and dynamic content
- **@sanity/client**: API client for Sanity integration
- **next-sanity**: Seamless Next.js and Sanity integration

### UI Components & Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Framer Motion**: Smooth animations and transitions

### Form Handling & Communication
- **Resend**: Email service for contact forms
- **React Hook Form**: Efficient form management

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Turbopack**: Fast development server and bundler

## 🚦 Getting Started

### Initial Setup

Ensure you have Node.js installed on your system. You can verify your installation:

```bash
node --version
npm --version
```

### Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Email Configuration (for contact forms)
RESEND_API_KEY=your_resend_api_key
```

### Installing Dependencies

Install all required packages using npm:

```bash
npm install
```

This command will install all dependencies listed in `package.json`, including development dependencies needed for building and testing the application.

## 🏃‍♂️ How to Run the Application

### Development Mode

Start the development server with hot reloading and Turbopack for optimal performance:

```bash
npm run dev
```

The development server will start on `http://localhost:3000`. The application automatically reloads when you make changes to the source code, providing an efficient development experience.

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Production Server

After building, start the production server:

```bash
npm start
```

### Code Quality Checks

Run ESLint to check for code quality issues:

```bash
npm run lint
```

### Sanity Studio

Access the content management system at `http://localhost:3000/studio` when the development server is running. This provides a user-friendly interface for managing blog posts, team information, and other dynamic content.

## 💻 Relevant Code Examples

### Dynamic Project Showcase

The project showcase demonstrates advanced data management and component composition:

```typescript
// app/projects/ProjectsPage.tsx
const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Category filtering and project grid */}
    </motion.div>
  );
};
```

### Sanity CMS Integration

Blog posts are dynamically fetched from Sanity CMS with proper TypeScript typing:

```typescript
// sanity/lib/blogQuery.ts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{
      name,
      image
    },
    mainImage,
    categories[]->{
      title
    }
  }
`;

// Usage in component
const BlogPostList = async () => {
  const posts = await client.fetch(blogPostsQuery);
  
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPostCard key={post._id} post={post} />
      ))}
    </div>
  );
};
```

### Responsive Image Gallery

Interactive image galleries with Next.js Image optimization:

```typescript
// components/ProjectViewer.tsx
const ProjectViewer = ({ project }) => {
  const [selectedMedia, setSelectedMedia] = useState(0);
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-video">
        <Image
          src={project.gallery.images[selectedMedia]}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {project.gallery.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedMedia(index)}
            className={`relative aspect-video rounded-lg overflow-hidden
              ${selectedMedia === index ? 'ring-2 ring-purple-500' : ''}`}
          >
            <Image
              src={image}
              alt={`${project.title} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
```

### Contact Form with Email Integration

Secure contact form handling with server-side email processing:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const emailData = await resend.emails.send({
      from: 'contact@voltaerotech.com',
      to: 'team@voltaerotech.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

## 📁 Project Structure Deep Dive

### Application Architecture

The project follows Next.js 13+ App Router conventions with a clean, scalable architecture:

- **`app/`**: Main application directory with route-based file organization
- **`components/`**: Reusable UI components with clear separation of concerns
- **`sanity/`**: Content management system configuration and schema definitions
- **`lib/`**: Shared utilities and helper functions
- **`public/`**: Static assets including images, videos, and documents

### Key Features

- **Dynamic Routing**: Project and experiment detail pages with slug-based navigation
- **Content Management**: Full-featured CMS integration for blog posts and team updates
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimization**: Image optimization, code splitting, and lazy loading
- **Type Safety**: Comprehensive TypeScript implementation across all components

## 🎯 Conclusion

The Voltaero Technologies Website represents a sophisticated blend of cutting-edge web technologies and autonomous robotics showcase. This platform successfully demonstrates how modern web development can effectively communicate complex technical concepts while maintaining an engaging user experience.

Whether you're exploring drone technologies, reviewing research experiments, or learning about autonomous systems, this website provides a comprehensive window into the future of robotics. The codebase serves as an excellent example of modern React development practices, showcasing everything from advanced state management to seamless CMS integration.

We encourage developers to explore the code, experiment with the features, and contribute to the advancement of both web technologies and autonomous systems. The intersection of these fields continues to create exciting opportunities for innovation and real-world impact.

Ready to dive into autonomous robotics and modern web development? Start your development server and explore the future of technology today!
