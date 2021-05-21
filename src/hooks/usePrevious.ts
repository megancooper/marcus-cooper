import {useRef, useEffect} from 'react';

function usePrevious<T>(value: T): T | undefined;
function usePrevious<T>(value: T, initialValue: T): T;
function usePrevious<T>(value: T, initialValue?: T): T | undefined {
  const ref = useRef<T | undefined>(initialValue);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
