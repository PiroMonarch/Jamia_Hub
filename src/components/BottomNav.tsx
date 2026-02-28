import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { name: 'Home', icon: 'home', path: '/' },
    { name: 'Map', icon: 'map', path: '/map' },
    { name: 'Saved', icon: 'favorite', path: '/saved' }, // Added Saved based on HTML
    { name: 'Roommates', icon: 'group', path: '/roommates' },
    { name: 'Profile', icon: 'person', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 px-4 py-2 flex items-center justify-between z-50 safe-area-bottom">
      {navItems.map((item) => {
        const isActive = path === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={clsx(
              "flex flex-col items-center gap-1 transition-colors",
              isActive ? "text-primary" : "text-slate-400 dark:text-slate-500 hover:text-primary"
            )}
          >
            <span className={clsx("material-symbols-outlined text-2xl", isActive && "fill-current")}>
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
