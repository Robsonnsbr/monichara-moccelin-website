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
      className={`fixed bottom-0 right-0 z-50 m-3 ${isVisible ? 'opacity-1' : 'opacity-0'} transition-all ease-linear duration-200`}
      id="button-scroll-up"
    >
      <Link
        to={isHome ? 'top-home' : 'main'}
        href="inicio-da-pagina"
        smooth={true}
        duration={500}
      >
        <div className="class-link-icon">
          <FaArrowUp className="size-7" />
        </div>
      </Link>
    </button>
  );
}

export default ButtonScrollUp;
