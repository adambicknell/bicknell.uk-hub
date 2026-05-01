import { useCallback, useEffect, useRef, useState } from "react";

export function useEqualCardDescriptionHeights<T>(items: T[]) {
  const descriptionRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const [descriptionHeight, setDescriptionHeight] = useState(0);

  const setDescriptionRef = useCallback(
    (index: number) => (node: HTMLParagraphElement | null) => {
      descriptionRefs.current[index] = node;
    },
    [],
  );

  useEffect(() => {
    const descriptions = descriptionRefs.current.filter(
      (description): description is HTMLParagraphElement => Boolean(description),
    );

    if (!descriptions.length) return undefined;

    const updateHeight = () => {
      descriptions.forEach((description) => {
        description.style.minHeight = "0px";
      });

      const tallestHeight = Math.ceil(
        Math.max(...descriptions.map((description) => description.scrollHeight)),
      );

      setDescriptionHeight(tallestHeight);
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    descriptions.forEach((description) => {
      resizeObserver.observe(description);
    });

    updateHeight();

    return () => resizeObserver.disconnect();
  }, [items]);

  return { descriptionHeight, setDescriptionRef };
}
