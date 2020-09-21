import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavigationItemType = {
    href: string;
    simple?: boolean;
    //hot??
};

export const NavigationItem: FC<NavigationItemType> = ({
    children,
    href,
    simple = false,
}) => {
    const router = useRouter();

    return (
        <>
            {simple ? (
                <Link href={href} as={href}>
                    <a
                        className={
                            router.pathname === href ? 'active' : undefined
                        }
                    >
                        {children}
                    </a>
                </Link>
            ) : (
                <li>
                    <Link href={href} as={href}>
                        <a
                            className={
                                router.pathname === href ? 'active' : undefined
                            }
                        >
                            {children}
                        </a>
                    </Link>
                </li>
            )}
        </>
    );
};
