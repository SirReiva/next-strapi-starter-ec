import { createContext, Dispatch } from 'react';
import { IAUth } from '../interfaces';

export const AuthContext = createContext<{
    stateAuth: IAUth | null;
    setAuth: Dispatch<IAUth | null>;
}>({} as any);
