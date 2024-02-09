import { NextPageContext } from 'next';
import { AxiosRequestConfig } from 'axios';
import { Session } from 'next-auth';

declare module 'axios' {
  interface AxiosRequestConfig {
    session?: Session | null;
    useAuth?: boolean;
  }
}
