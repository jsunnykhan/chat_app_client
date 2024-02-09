"use client";

import { LoginSchemaResolver, loginDefaultValues } from "@/lib/schema/login";
import clsx from "clsx";
import { SignInResponse, signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

const LoginPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: LoginSchemaResolver,
    defaultValues: loginDefaultValues,
    reValidateMode: "onChange",
  });
  const onSubmit = async (values: FieldValues) => {
    const response: SignInResponse | undefined = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-[30vw] min-h-[40vh] h-2/4 bg-white shadow-md rounded border border-gray-100 px-7 py-8 space-y-10">
        <h3 className="text-xl font-semibold text-primary text-center">
          Welcome to Chit-Chat
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <div className="space-y-7 items-center justify-center flex-col">
            <input
              {...register("username")}
              type="email"
              placeholder="Enter email"
              className={clsx(
                "w-full outline-none ring-0 bg-white px-5 py-2  rounded shadow-md drop-shadow-sm shadow-secondary-100 border",
                "text-sm placeholder:text-sm text-primary-900 placeholder:text-primary-300",
                errors.username?.message
                  ? "border-red-400"
                  : "border-secondary-50"
              )}
              autoComplete="false"
            />

            <input
              {...register("password")}
              type="password"
              placeholder="Enter Password"
              className={clsx(
                "w-full outline-none ring-0 bg-white px-5 py-2  rounded shadow-md drop-shadow-sm shadow-secondary-100 border",
                "text-sm placeholder:text-sm text-primary-900 placeholder:text-primary-300",
                errors.password?.message
                  ? "border-red-400"
                  : "border-secondary-50"
              )}
              autoComplete="false"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary py-3 text-secondary-50 text-sm font-semibold rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
