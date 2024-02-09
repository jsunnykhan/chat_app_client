import { jwtDecode } from 'jwt-decode';
import { TokenInfo } from './tokenInfo';

export const getJwtPayload = (token: string): Partial<TokenInfo> => {
  return jwtDecode(token);
};
