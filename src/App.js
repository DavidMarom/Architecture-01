import TopNav from './components/TopNav/TopNav'
import { useSelector } from 'react-redux'

function App() {
  const isDark = useSelector(state => state.settings.dark)
  console.log('isDark, APP: ', isDark)
  
  return (
    <div className="overall-layout">
      <TopNav darkMode={isDark} />
    </div>
  );
}

export default App;
