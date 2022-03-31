import { FC } from 'react';
import { useMobilMenuContext } from '../../contexts';
import {
 HeaderStyled,
 LogoCompanyNameLinkWrapper,
 LogoIcon,
 CompanyName,
 MobilIconsWrapper,
 MobilIconFaBars,
 MobilIconFaTimes
} from './StyledComponents';

export const Header: FC = (): JSX.Element => {
 const { mobilMenuIsOpen, mobilMenuToggle } = useMobilMenuContext();

 return (
  <HeaderStyled>
   <LogoCompanyNameLinkWrapper to='/' replace>
    <LogoIcon />
    <CompanyName>NewTD</CompanyName>
   </LogoCompanyNameLinkWrapper>

   <MobilIconsWrapper onClick={mobilMenuToggle}>
    {mobilMenuIsOpen ? <MobilIconFaTimes /> : <MobilIconFaBars />}
   </MobilIconsWrapper>
  </HeaderStyled>
 );
};
