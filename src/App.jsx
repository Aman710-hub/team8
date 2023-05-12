import { QueryClient, QueryClientProvider } from "react-query";
import Task2 from "./Task2";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Task2 />
    </QueryClientProvider>
  );
}

export default App;
