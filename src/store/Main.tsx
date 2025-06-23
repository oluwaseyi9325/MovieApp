import { MainNavigation } from "../navigation"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const Main = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
    </>
  )
}

export default Main

