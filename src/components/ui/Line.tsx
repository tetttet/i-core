import Link from "next/link";
import React from "react";

const Line = ({ href, title }) => {
  return (
    <div className="flex items-center gap-4 py-8">
      <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
      <Link href={href}>
        <span className="text-sm font-medium text-muted-foreground">
          {title}
        </span>
      </Link>
      <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
    </div>
  );
};

export default Line;
