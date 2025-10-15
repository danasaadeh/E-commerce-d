import { useMutation, useQueryClient } from "@tanstack/react-query";
import authServices from "../services/api";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authServices.login(data),

    onSuccess: async () => {
      try {
        // ✅ Immediately fetch the logged-in user profile
        const profile = await authServices.getMe();

        // ✅ Prime React Query cache so useIsLoggedIn updates instantly
        queryClient.setQueryData(["auth", "profile"], profile);
      } catch (error) {
        console.error("❌ Failed to prefetch profile after login:", error);
      }
    },
  });
};

export const useSignUpMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authServices.signUp(data),

    onSuccess: async () => {
      try {
        const profile = await authServices.getMe();
        queryClient.setQueryData(["auth", "profile"], profile);
      } catch (error) {
        console.error("❌ Failed to prefetch profile after sign-up:", error);
      }
    },
  });
};
