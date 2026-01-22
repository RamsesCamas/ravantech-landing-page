import { useEffect, useMemo, useRef, useState } from "react";

type InViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInView<T extends Element>(options: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const memoOptions = useMemo(
    () => ({
      rootMargin: options.rootMargin ?? "0px",
      threshold: options.threshold ?? 0,
    }),
    [options.rootMargin, options.threshold]
  );

  useEffect(() => {
    if (inView || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, memoOptions);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, memoOptions]);

  return { ref, inView };
}
