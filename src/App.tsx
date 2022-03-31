import { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { TodoListProvider, MobilMenuProvider, TodoSearchProvider } from './contexts';
import { HomePage, NotFoundPage } from './pages';
import { GlobalStyles } from './components';

export const App: FC = (): JSX.Element => {
 return (
  <>
   <GlobalStyles />
   <TodoListProvider>
    <MobilMenuProvider>
     <TodoSearchProvider>
      <HashRouter>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
       </Routes>
      </HashRouter>
     </TodoSearchProvider>
    </MobilMenuProvider>
   </TodoListProvider>
  </>
 );
};
