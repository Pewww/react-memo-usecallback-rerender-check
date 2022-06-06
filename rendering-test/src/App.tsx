import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import {
  NormalComp,
  UsecallbackWithoutMemoComp,
  OnlyMemoComp,
  BothAppliedComp
} from './components';

import usePrevious from './hooks/usePrevious';

const App = () => {
  const intervalRef = useRef<number | null>(null);

  const [randomNumber, setRandomNumber] = useState(0);

  const prevRandomNumber = usePrevious(randomNumber);

  const normalFunc = () => {
    // Do something..
  };

  const memoizedFunc = useCallback(() => {
    // Do something..
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setRandomNumber(Math.random());
    }, 3500);

    return () => {
      clearInterval(intervalRef.current as number);
    };
  }, []);

  return (
    <Wrapper>
      <InfoWrapper>
        <Link
          href="https://github.com/Pewww/react-memo-usecallback-rerender-check"
          target="_blank"
        >See code in GitHub</Link>
        {prevRandomNumber !== undefined && (
          <>
            <Info>Parent Component's state is changed.</Info>
            <RandomNumber>Before: {prevRandomNumber}</RandomNumber>
            <RandomNumber>Changed to: {randomNumber}</RandomNumber>
          </>
        )}
      </InfoWrapper>
      <ChildCompOuterWrapper>
        <ChildCompWrapper>
          <NormalComp onTrigger={normalFunc} />
        </ChildCompWrapper>
        <ChildCompWrapper>
          <UsecallbackWithoutMemoComp onTrigger={memoizedFunc} />
        </ChildCompWrapper>
        <ChildCompWrapper>
          <OnlyMemoComp onTrigger={normalFunc} />
        </ChildCompWrapper>
        <ChildCompWrapper>
          <BothAppliedComp onTrigger={memoizedFunc} />
        </ChildCompWrapper>
      </ChildCompOuterWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #fff;
`;

const InfoWrapper = styled.div`
  min-height: 112px;
  padding: 60px 0;
  border-bottom: 1px solid #ddd;
`;

const Info = styled.p`
  margin: 0 0 20px 0;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const RandomNumber = styled.p`
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 0;
`;

const Link = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ChildCompOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 16px;
`;

const ChildCompWrapper = styled.div`
  width: 25%;
  float: left;
  height: 100%;
  border-right: 1px solid #ddd;
  text-align: center;
  overflow-y: auto;

  &:last-of-type {
    border-right: none;
  }
`;
