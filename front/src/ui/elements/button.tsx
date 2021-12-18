import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

type Props = {
  color?: string;
  size?: string;
  type?: string;
};

export function Button({
  color,
  size,
  type,
  children,
}: PropsWithChildren<Props>): ReactElement {
  const className = classNames('btn', {
    [`btn-${type}`]: type,
    [`btn--${size}`]: size,
    [`btn--${color}`]: color,
  });

  return <button className={className}>{children}</button>;
}
