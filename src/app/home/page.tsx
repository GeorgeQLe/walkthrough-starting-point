import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/trpc/server";
import { getSession, redirectToLogin } from "@/lib/auth";

import { HomePageContents } from "./_ui/home-page-contents";

const HomePage = async () => {
  const session = await getSession();

  if(!session) redirectToLogin("/home");
  
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<div>There was an error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomePageContents/>
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default HomePage;