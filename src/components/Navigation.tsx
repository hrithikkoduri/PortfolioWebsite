import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold hover:text-gray-300">
          HK
        </Link>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
}