import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'Bookmarks', path: '/bookmarks' },
    { name: 'Papershelf', path: '/papershelf' },
    { name: 'Uses', path: '/uses' },
  ];

  return (
    <div className="w-full fixed top-0 z-50 px-4 py-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative px-4 py-2 rounded-xl bg-black/20 backdrop-blur-md border border-white/10">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent -z-10" />
          
          <div className="flex items-center justify-between">
            {/* Logo/Home */}
            <Link href="/">
              <motion.div
                className="text-emerald-400 font-medium relative group px-3 py-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">HK</span>
                <div className="absolute inset-0 bg-emerald-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
              </motion.div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <motion.div
                    className={`px-3 py-1 rounded-lg relative group ${
                      pathname === item.path 
                        ? 'text-white' 
                        : 'text-gray-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 text-sm">{item.name}</span>
                    <div className={`absolute inset-0 rounded-lg transition-all duration-200 -z-10 
                      ${pathname === item.path 
                        ? 'bg-white/10' 
                        : 'bg-white/0 group-hover:bg-white/5'
                      }`} 
                    />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* GitHub Link */}
            <Link href="https://github.com/hrithikkoduri" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="text-gray-400 relative group px-3 py-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-sm">GitHub</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}