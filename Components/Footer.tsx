import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className="w-screen p-2 bg-gray-300 overflow-y-scroll">
      <p className="font-mono text-sm text-center">&copy; 2023, Matthew Stoney</p>
    </div>
  );
}
