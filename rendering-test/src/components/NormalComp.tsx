import { useEffect, useRef } from 'react';

import * as S from './styles/comp.styles';

interface NormalCompProps {
  onTrigger: () => void;
}

const NormalComp = ({ onTrigger }: NormalCompProps) => {
  const rerenderStackRef = useRef<boolean[]>([]);

  useEffect(() => {
    rerenderStackRef.current.push(true);
  });

  return (
    <>
      <S.Title>Nothing applied.</S.Title>
      {rerenderStackRef.current?.map((_, index) => (
        <S.RerenderStack key={index}>
          Rerendered
        </S.RerenderStack>
      ))}
    </>
  );
};

export default NormalComp;
