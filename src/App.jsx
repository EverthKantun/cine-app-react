import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <AppRoutes />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;