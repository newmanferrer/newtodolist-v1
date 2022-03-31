//* ///////////////////////////////////////////////////////////////////////////
//* NotFoundPage
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- MainContainer
//* ---------------------------------------------------------------------------
const MainContainer = styled(Container)`
 width: 100vw;
 height: 100vh;
 padding: 1rem;

 background-color: ${COLORS.backgroundDark};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.2.- Content Info Wrapper
//* ---------------------------------------------------------------------------
const ContentWrapper = styled(Container)`
 width: 90vw;
 max-width: 40rem;
 height: 30vh;
 padding: 1rem;

 border: none;
 border-radius: 0.25rem;
 background-color: ${COLORS.white};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.3.- Title
//* ---------------------------------------------------------------------------
const Title = styled.h1`
 margin-bottom: 1rem;
 font-size: 2rem;
 color: ${COLORS.error};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.4.- SubTitle
//* ---------------------------------------------------------------------------
const SubTitle = styled.h2`
 margin-bottom: 1rem;
 color: ${COLORS.error};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export { MainContainer, ContentWrapper, Title, SubTitle };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////