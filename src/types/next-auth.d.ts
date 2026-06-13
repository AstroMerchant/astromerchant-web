import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      merchantId: string;
    };
  }

  interface User {
    accessToken: string;
    merchantId: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    merchantId: string;
    id: string;
  }
}
