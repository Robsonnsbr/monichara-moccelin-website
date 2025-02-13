'use client';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useScrollButton } from 'src/hooks';

function ButtonScrollUp() {
  const pathName = usePathname();
  const { isVisible } = useScrollButton();
  const isHome = pathName === '/';

  return (
    <button
      className={`fixed bottom-24 right-8 z-50 m-3 ${isVisible ? 'opacity-50' : 'opacity-0'} transition-all ease-linear duration-200`}
      id="button-scroll-up"
    >
      <Link
        to={isHome ? 'top-home' : 'main'}
        href="/#inicio-da-pagina"
        smooth={true}
        duration={500}
        rel="nofollow"
      >
        <div className="class-link-icon ">
          <FaArrowUp className="size-5" />
        </div>
      </Link>
    </button>
  );
}

export default ButtonScrollUp;
