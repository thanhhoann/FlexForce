import { useEffect, useContext } from 'react';
import { ScrollContext } from './ParallaxContainer';

export default props => {
  const context = useContext(ScrollContext);
  useEffect(() => context.addBlock(props), []);
  return props.children;
};
