import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
 
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
  }),
  pages: {
    signIn: "/login",
  },
  socialProviders: {
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});

export const getSession = async () => auth.api.getSession({
  headers: await headers(),
});

/**
 * Redirects to login with the current path as returnTo parameter
 *
 * This function is used to redirect unauthenticated users to the login page
 * while preserving their intended destination and any query parameters.
 * After successful login, the user will be redirected back to the original page.
 *
 * @param currentPath - The current page path that user should return to after login
 * @param searchParams - Optional search parameters to preserve in the redirect
 * @returns never - This function always redirects and never returns
 */
export function redirectToLogin(
  currentPath: string,
  searchParams?: { [key: string]: string | string[] | undefined }
): never {
  let fullPath = currentPath;

  // If search parameters are provided, append them to the path
  // This preserves any query string data (e.g., filters, sorting, pagination)
  if (searchParams) {
    const params = new URLSearchParams();

    // Iterate through all search parameters
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined) {
        // Handle array values (e.g., multiple filters)
        // Use append() to allow duplicate keys
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v));
        } else {
          // Handle single string values
          // Use set() to ensure only one value per key
          params.set(key, value);
        }
      }
    });

    // Only append query string if there are actual parameters
    const queryString = params.toString();
    if (queryString) {
      fullPath = `${currentPath}?${queryString}`;
    }
  }

  // URL-encode the full path to safely pass it as a query parameter
  // This ensures special characters don't break the redirect
  const returnTo = encodeURIComponent(fullPath);

  // Redirect to login page with the returnTo parameter
  // After login, the auth system can read this parameter to redirect back
  redirect(`/login?returnTo=${returnTo}`);
};