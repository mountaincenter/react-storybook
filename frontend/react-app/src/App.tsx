import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import CommonRoutes from './Routes';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <CommonRoutes />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
