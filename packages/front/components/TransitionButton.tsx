import { FC, MouseEvent } from 'react';
import { XOR } from '../interfaces';
import Link from 'next/link';

type TrasitionBttunType = XOR<
    { href: string; text: string },
    {
        onClick:
            | ((
                  event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
              ) => void)
            | undefined;
        text: string;
    }
>;

export const TransitionButton: FC<TrasitionBttunType> = ({
    href,
    onClick,
    text,
}) => {
    if (href)
        return (
            <Link href={href} as={href}>
                <a className="btn header-btn">{text}</a>
            </Link>
        );
    return (
        <a onClick={onClick} className="btn header-btn">
            {text}
        </a>
    );
};
