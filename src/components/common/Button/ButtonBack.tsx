import Link from 'next/link';
import { TbArrowBackUp } from 'react-icons/tb';

function ButtonBack({ href, children }: { href: string; children: string }) {
  return (
    <button
      type="button"
      className="class-link-icon p-0 bg-mediumBlueGray rounded-md"
    >
      <Link href={href} target="_self">
        <p className="px-4 py-2 flex flex-row text-nowrap gap-1 items-center justify-center text-white">
          {children}
          <TbArrowBackUp />
        </p>
      </Link>
    </button>
  );
}

export default ButtonBack;
