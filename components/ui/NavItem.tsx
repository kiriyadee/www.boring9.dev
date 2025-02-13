'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import LinksNav, { navItemsSelected } from './LinksNav';

const NavItem = () => {
  let pathname = usePathname() as string;

  if (pathname.includes('/blog/')) pathname = '/blog';

  return (
    <>
      {navItemsSelected[pathname] ? (
        <>
          <div className="hidden lg:block">
            <div className="absolute z-[-1]">
              <motion.div
                layoutId="id_1"
                initial={{
                  opacity: 0,
                  x: navItemsSelected[pathname].x,
                  y: navItemsSelected[pathname].y
                }}
                animate={{
                  opacity: 1,
                  x: navItemsSelected[pathname].x,
                  width: navItemsSelected[pathname].w
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30
                }}
              />
            </div>
          </div>
        </>
      ) : null}

      {<LinksNav />}
    </>
  );
};

export default NavItem;
