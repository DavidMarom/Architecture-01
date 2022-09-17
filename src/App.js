import TopNav from './components/TopNav/TopNav'
import PageComp from './components/PageComp/PageComp'

function App() {
  
  return (
    <div className="overall-layout">
      <TopNav />
      <PageComp>
        <h1>Page</h1>
      </PageComp>
    </div>
  );
}

export default App;
