import { useMemo, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
};

export function Portal({ children }: PortalProps) {
  const domNode = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    domNode.className = 'portal';
    document.body.appendChild(domNode);

    return () => {
      document.body.removeChild(domNode);
    };
  }, []);

  return createPortal(children, domNode);
}
