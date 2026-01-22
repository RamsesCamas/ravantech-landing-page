"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useInView } from "@/hooks/useInView";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

type Props = {
  src?: string;
  className?: string;
  height?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  fillY?: number;
  align?: "center" | "bottom" | "top";
  gutterY?: number;
  orbit?: boolean;
  rootMargin?: string;
  placeholderClassName?: string;
};

export default function LazyModelViewer({
  className = "",
  height = 200,
  rootMargin = "200px",
  placeholderClassName = "rounded-xl bg-black/5",
  ...props
}: Props) {
  const options = useMemo(() => ({ rootMargin }), [rootMargin]);
  const { ref, inView } = useInView<HTMLDivElement>(options);

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <ModelViewer {...props} height={height} className="w-full" />
      ) : (
        <div
          className={`w-full ${placeholderClassName}`}
          style={{ height }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
