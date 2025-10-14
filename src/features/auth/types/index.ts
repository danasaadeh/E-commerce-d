type AuthPayload = {
  email: string;
  password: string;
};

type AuthResponse = {
  access_token: string;
  refresh_token: string;
};

type UserProfile = {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
};
