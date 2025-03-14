'use client';

import React from 'react';

type Props = {
  className: string;
  shouldRender?: boolean;
};

export default function AddIcon({ className, shouldRender }: Props) {
  if (shouldRender) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden
        fill="var(--icon-color-render-add)"
      >
        <path
          d="m16.19 2h-8.38c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81v-8.38c.01-3.64-2.16-5.81-5.8-5.81zm-.19 10.75h-3.25v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25h-3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25v-3.25c0-.41.34-.75.75-.75s.75.34.75.75v3.25h3.25c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="var(--icon-color-render-add)"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
    >
      <g
        stroke="var(--icon-color-add)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="m8 12h8" />
        <path d="m12 16v-8" />
        <path d="m9 22h6c5 0 7-2 7-7v-6c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7z" />
      </g>
    </svg>
  );
}
