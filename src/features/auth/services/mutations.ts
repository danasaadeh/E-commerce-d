import { useMutation, useQuery } from "@tanstack/react-query";
import authServices from "../services/api";

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authServices.signUp(data),
  });

export const useSignUpMutation = () =>
  useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authServices.signUp(data),
  });
