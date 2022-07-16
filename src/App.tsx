import { QueryClient, QueryClientProvider } from 'react-query';
import { PokedexContainer } from './components/pokedex-container/podekex-container';
 
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PokedexContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
