import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className="w-screen p-2 bg-gray-800 border-t-2 border-gray-500">
      <p className="font-mono text-sm text-center text-gray-300">&copy; 2023, Matthew Stoney</p>
    </div>
  );
}
