import { MainLayout } from '../layout/main.layout';

export const withLayout = (Component: any) => {
    const _withLayout = (props: any) => {
        return (
            <MainLayout>
                <Component {...props} />
            </MainLayout>
        );
    };
    return _withLayout;
};
