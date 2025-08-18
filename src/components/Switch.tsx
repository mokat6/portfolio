"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: React.ReactNode;
}

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <div className="flex items-center space-x-3">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium ">
          {label}
        </label>
      )}
      <SwitchPrimitive.Root
        id={props.id}
        className={`
          relative h-6 w-11 rounded-full bg-gray-200 transition-colors
          focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 data-[state=checked]:bg-gray-400
          ${className}`}
        {...props}
      >
        <SwitchPrimitive.Thumb className="block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5" />
      </SwitchPrimitive.Root>
    </div>
  );
}
