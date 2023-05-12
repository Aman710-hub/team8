import { QueryClient, QueryClientProvider } from "react-query";
import Task1 from "./components/Task 1/Task1";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Task1 />
    </QueryClientProvider>
  );
}

export default App;
