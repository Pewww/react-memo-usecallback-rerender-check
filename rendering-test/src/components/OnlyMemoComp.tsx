import React, { useEffect, useRef } from 'react';

import * as S from './styles/comp.styles';

interface OnlyMemoCompProps {
  onTrigger: () => void;
}

const OnlyMemoComp = ({ onTrigger }: OnlyMemoCompProps) => {
  const rerenderStackRef = useRef<boolean[]>([]);

  useEffect(() => {
    rerenderStackRef.current.push(true);
  });

  return (
    <>
      <S.Title>React.memo is only applied here.</S.Title>
      {rerenderStackRef.current?.map((_, index) => (
        <S.RerenderStack key={index}>
          Rerendered
        </S.RerenderStack>
      ))}
    </>
  );
};

export default React.memo(OnlyMemoComp);
