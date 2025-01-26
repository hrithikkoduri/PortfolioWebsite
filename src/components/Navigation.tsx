import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'Bookmarks', path: '/bookmarks' },
    { name: 'Papershelf', path: '/papershelf' },
    { name: 'Uses', path: '/uses' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-4 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="relative h-[44px] px-4 rounded-xl bg-card-bg border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20 flex items-center">
            <div className="flex items-center gap-4">
              {/* Logo/Home */}
              <Link href="/">
                <div className={`px-3 py-1 rounded-lg ${pathname === '/' ? 'active-state' : 'hover-effect'}`}>
                  <span className="relative z-10">Home</span>
                </div>
              </Link>

              {/* Navigation Items */}
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.path}>
                    <div className={`px-3 py-1 rounded-lg ${pathname === item.path ? 'active-state' : 'hover-effect'}`}>
                      <span className="relative z-10 text-sm">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* GitHub Link */}
              <Link href="https://github.com/hrithikkoduri" target="_blank" rel="noopener noreferrer">
                <div className="hover-effect px-3 py-1 rounded-lg">
                  <span className="relative z-10 text-sm">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="h-[44px] flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}