import React, { useEffect, useRef } from 'react';

import * as S from './styles/comp.styles';

interface BothAppliedCompProps {
  onTrigger: () => void;
}

const BothAppliedComp = ({ onTrigger }: BothAppliedCompProps) => {
  const rerenderStackRef = useRef<boolean[]>([]);

  useEffect(() => {
    rerenderStackRef.current.push(true);
  });

  return (
    <>
      <S.Title>Both applied.</S.Title>
      {rerenderStackRef.current?.map((_, index) => (
        <S.RerenderStack key={index}>
          Rerendered
        </S.RerenderStack>
      ))}
    </>
  );
};

export default React.memo(BothAppliedComp);
