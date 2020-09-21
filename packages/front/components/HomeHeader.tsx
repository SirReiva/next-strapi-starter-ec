import { FC } from 'react';
import { ResponsiveImage } from './ResponsiveImage';
import { TransitionButton } from './TransitionButton';
import { IHomeHeader } from '../interfaces';

type HomeHeaderType = {
    info: IHomeHeader;
};

export const HomeHeader: FC<HomeHeaderType> = ({ info }) => (
    <div className="slider-area" style={{ backgroundColor: '#C7ECFF' }}>
        <div className="slider-active">
            <div className="single-slider slider-height">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                            <div className="hero__img animate__animated animate__bounceIn animate__delay-.4s">
                                <ResponsiveImage src={info.image[0].url} />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                            <div className="hero__caption">
                                <span className="animate__animated animate__fadeInRight animate__delay-.4s">
                                    {info.subtitle}
                                </span>
                                <h1 className="animate__animated animate__fadeInRight animate__delay-.6s">
                                    {info.title}
                                </h1>
                                <p className="animate__animated animate__fadeInRight animate__delay-.8s">
                                    {info.capchaphase}
                                </p>
                                {info.buttonLink && info.buttonText && (
                                    <div className="hero__btn animate__animated animate__fadeInRight animate__delay-1s">
                                        <TransitionButton
                                            text={info.buttonText}
                                            href={info.buttonLink}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
