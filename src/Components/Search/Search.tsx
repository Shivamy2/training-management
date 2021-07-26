import React from "react";
import { FormEvent } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onSubmit?: (event: FormEvent) => void;
}

const Search: React.FC<Props> = ({ className, onSubmit, ...rest }) => {
  return (
    <form
      className={
        "relative rounded-md place-self-center bg-search-box max-w-420 h-9 " +
        className
      }
      onSubmit={onSubmit}
    >
      <div className="absolute flex top-2 left-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-search-icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search..."
        {...rest}
        className="w-full h-full pl-8 text-sm font-semibold tracking-wider bg-transparent focus:outline-none text-search-icon"
      />
    </form>
  );
};

Search.defaultProps = {};

export default React.memo(Search);
