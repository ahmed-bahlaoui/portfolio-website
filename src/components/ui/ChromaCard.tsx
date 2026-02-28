import React from "react";
import "./chroma.css";

export interface ChromaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ChromaCard = React.forwardRef<HTMLDivElement, ChromaCardProps>(
  ({ children, className = "", onMouseMove, ...props }, ref) => {
    const handleCardMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      
      if (onMouseMove) {
        onMouseMove(e);
      }
    };

    return (
      <div
        ref={ref}
        className={`chroma-card ${className}`}
        onMouseMove={handleCardMove}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ChromaCard.displayName = "ChromaCard";
