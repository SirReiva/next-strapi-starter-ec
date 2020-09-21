import { FC } from 'react';
import Link from 'next/link';

type LogoType = {
    extraClass?: string;
};

export const Logo: FC<LogoType> = ({ extraClass }) => (
    <div className={extraClass}>
        <Link href="/">
            <a>
                <img src="img/logo/logo.png" alt="" />
            </a>
        </Link>
    </div>
);
