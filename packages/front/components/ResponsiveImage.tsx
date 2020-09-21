import { FC, memo } from 'react';
import config from '../config';

type ReponsiveImageType = {
    src: string;
    className?: string;
};

const _ResponsiveImage: FC<ReponsiveImageType> = ({ src, className }) => {
    const name = src.split('/').pop() || '';
    return (
        <img
            className={className}
            srcSet={`${config.BACKEND_ULR}${src.replace(
                name,
                'medium_' + name
            )} 750w, ${config.BACKEND_ULR}${src.replace(
                name,
                'small_' + name
            )} 480w`}
            src={config.BACKEND_ULR + src}
        />
    );
};

export const ResponsiveImage = memo(_ResponsiveImage);
