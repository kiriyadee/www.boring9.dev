import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="w-4/12 lg:max-w-screen-md flex flex-row items-center justify-between relative border-gray-700 py-8 sm:pb-8 bg-opacity-60 text-gray-100 gap-5 lg:gap-0">
        <div>
          <h1>
            <Link href="/">
              <strong>Chanthawat</strong>();
            </Link>
          </h1>
        </div>

        <div className="ml-[-0.1rem] pl-[2rem] justify-between flex flex-row items-center gap-5 lg:gap-0">
          <MobileMenuNav />

          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  );
};

export default Header;
