import { useEffect, useRef, useState } from 'react';

/* Utility component that collapses or expands children based on isExpanded. Solves having to use
fixed height for animations, thanks to automatically calculating the content height in JS. */

const Collapse = ({ isExpanded, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setContentHeight(ref.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [children]);

  return (
    <div
      className="overflow-hidden transition-[max-height] duration-250 ease-in-out"
      style={{
        maxHeight: isExpanded ? contentHeight : 0,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Collapse;
