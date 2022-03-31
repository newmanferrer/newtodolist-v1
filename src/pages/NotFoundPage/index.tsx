import { FC } from 'react';
import { MainContainer, ContentWrapper, Title, SubTitle } from './StyledComponents';

export const NotFoundPage: FC = (): JSX.Element => {
 return (
  <MainContainer>
   <ContentWrapper>
    <Title>ERROR 404</Title>
    <SubTitle>Page Not Found</SubTitle>
   </ContentWrapper>
  </MainContainer>
 );
};
