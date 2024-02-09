export class TokenInfo {
  access: string;
  refresh: string;
  email: string;
  id: string;
  iat: number | null;
  exp: number | null;
  iss: string;

  constructor(data: Partial<TokenInfo>) {
    this.access = data.access ?? '';
    this.refresh = data.refresh ?? '';
    this.email = data.email ?? '';
    this.id = data.id ?? '';
    this.iat = data.iat ?? null;
    this.iss = data.iss ?? '';
    this.exp = data.exp ?? null;
  }
}
