import React, { ReactNode } from "react";

type Props = {
  name: string;
  label: string;
  children: ReactNode;
};

export default function FormField({ label, children, name }: Props) {
  return (
    <div className="mt-[1rem] w-full px-2 py-4 bg-white rounded-[6px] shadow-sm border border-gray-100">
      <div className="field-control">{children}</div>
    </div>
  );
}
