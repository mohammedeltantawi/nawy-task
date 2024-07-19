"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
export const ReactQueryProvider = ({ children }: { children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}