import { redirect } from "next/navigation";
import { Suspense } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import { LoginButtons } from "@/components/auth/login-buttons";

const LoginPage = async () => {
  const session = await getSession();

  if(session) redirect("/home");

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Using your preferred login method</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div className="h-9" />}>
            <LoginButtons/>
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;