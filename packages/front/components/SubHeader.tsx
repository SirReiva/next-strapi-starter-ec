import { FC } from 'react';

type SubHeaderType = {
    text: string;
};

export const SubHeader: FC<SubHeaderType> = ({ text }) => (
    <div className="slider-area ">
        <div
            className="single-slider slider-height2 d-flex align-items-center"
            style={{
                background: 'url(img/hero/category.jpg)',
                backgroundPositionX: 'center',
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap text-center">
                            <h2>{text}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
