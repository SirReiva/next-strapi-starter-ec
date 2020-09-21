import Link from 'next/link';
import { FC } from 'react';
import { IHomeCategories } from '../interfaces';
import config from '../config';

type HomeCategoriesType = {
    info: IHomeCategories[];
};

export const HomeCategories: FC<HomeCategoriesType> = ({ info }) => (
    <section className="category-area section-padding30">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-85">
                        <h2>Categorías</h2>
                    </div>
                </div>
            </div>
            <div className="row row-category">
                {info.map((infoCat) => (
                    <div key={infoCat.id} className="col-xl-4 col-lg-6">
                        <div className="single-category mb-30">
                            <div className="category-img">
                                <img
                                    src={
                                        config.BACKEND_ULR +
                                        infoCat.image[0].url
                                    }
                                />
                                <div className="category-caption">
                                    <h2>{infoCat.title}</h2>
                                    <span className="best">
                                        <Link
                                            href={infoCat.buttonLink}
                                            as={infoCat.buttonLink}
                                        >
                                            <a>{infoCat.buttonText}</a>
                                        </Link>
                                    </span>
                                    <span className="collection">
                                        {infoCat.subtitle}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
