import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './Theme';

// import CommonRoutes from './routes/CommonRoutes';
import CommonRoutes from './routes/Routes';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={customTheme}>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <CommonRoutes />
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
