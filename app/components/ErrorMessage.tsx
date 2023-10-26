import React, { PropsWithChildren, ReactNode } from "react";
import { Text } from "@radix-ui/themes";

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};
