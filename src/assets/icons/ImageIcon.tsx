import React from 'react';

type Props = {
  className: string;
};

export default function ImageIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
      width="24px"
      fill="#b3b3b3"
    >
      <path d="M215.45-147.27q-28.35 0-48.26-19.92-19.92-19.91-19.92-48.26v-529.1q0-28.35 19.92-48.26 19.91-19.92 48.26-19.92h529.1q28.35 0 48.26 19.92 19.92 19.91 19.92 48.26v529.1q0 28.35-19.92 48.26-19.91 19.92-48.26 19.92h-529.1Zm.09-55.96h528.92q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-528.92q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H215.54q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v528.92q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Zm60.92-89.19h410.96l-127.5-169.73-110.69 143.73-78.38-99.08-94.39 125.08Zm-73.23 89.19v-553.54 553.54Zm136.82-368.89q19.91 0 33.97-14.01 14.06-14.01 14.06-33.92 0-19.91-14.06-33.97-14.05-14.06-34.02-14.06-19.96 0-33.92 14.06-13.96 14.05-13.96 34.02 0 19.96 14.01 33.92t33.92 13.96Z" />
    </svg>
  );
}