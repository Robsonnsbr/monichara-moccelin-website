import ButtonLink from './ButtonLink';
import { CiSquareMore } from 'react-icons/ci';

interface PropsBtnClickHere {
  className?: string;
  href: string;
  target: '_blank' | '_self' | '_parent' | '_top';
  rel: string;
}

function ButtonClickHere({ className, href, target, rel }: PropsBtnClickHere) {
  return (
    <ButtonLink
      target={target}
      href={href}
      rel={rel}
      className={`border-0 sm:hover:text-lightApricotSalmon ${className}`}
    >
      <span className="flex items-center justify-center flex-nowrap">
        <CiSquareMore />
        Clique aqui
      </span>
    </ButtonLink>
  );
}

export default ButtonClickHere;
