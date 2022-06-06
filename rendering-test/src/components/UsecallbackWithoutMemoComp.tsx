import { useEffect, useRef } from 'react';

import * as S from './styles/comp.styles';

interface UsecallbackWithoutMemoCompProps {
  onTrigger: () => void;
}

const UsecallbackWithoutMemoComp = ({ onTrigger }: UsecallbackWithoutMemoCompProps) => {
  const rerenderStackRef = useRef<boolean[]>([]);

  useEffect(() => {
    rerenderStackRef.current.push(true);
  });

  return (
    <>
      <S.Title>Function with useCallback is passed to props, but React.memo is not applied here.</S.Title>
      {rerenderStackRef.current?.map((_, index) => (
        <S.RerenderStack key={index}>
          Rerendered
        </S.RerenderStack>
      ))}
    </>
  );
};

export default UsecallbackWithoutMemoComp;
