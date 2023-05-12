import { QueryClient, QueryClientProvider } from "react-query";
import Task2 from "./Task2";
import Task1 from "./Task 1/Task1";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Task2 />
      <Task1 />
    </QueryClientProvider>
  );
}

export default App;
