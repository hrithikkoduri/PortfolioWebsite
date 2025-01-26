import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 z-50 px-4 py-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl mx-auto relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 blur-xl" />
        
        {/* Triple border effect with smoother colors */}
        <div className="absolute inset-0 rounded-2xl border border-gray-700/50 shadow-lg backdrop-blur-xl" />
        <div className="absolute inset-[1px] rounded-2xl border border-gray-300/50" />
        <div className="absolute inset-[2px] rounded-2xl border border-gray-200/50" />

        {/* Main navigation container */}
        <div className="relative px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            {/* Left side */}
            <Link href="/">
              <motion.span
                className="text-emerald-400 text-sm font-medium relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-emerald-400/10 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.span>
            </Link>

            {/* Center */}
            <div className="flex items-center gap-8">
              {['Blog', 'Bookmarks', 'Papershelf', 'Uses'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}>
                  <motion.span
                    className={`text-sm relative group ${
                      pathname === `/${item.toLowerCase()}` 
                        ? 'text-white' 
                        : 'text-gray-400'
                    } hover:text-white transition-all duration-200`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Right side */}
            <Link href="https://github.com">
              <motion.span
                className="text-gray-400 text-sm hover:text-white transition-all duration-200 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">GitHub</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}