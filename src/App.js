import './App.scss';
import Text from './components/atoms/Text/index';

function App() {
  return (
    <div className="App">
      <Text content='bus-ticket' modifiers={['center', '500', '80x88', 'coolBlack', 'uppercase']}/>
    </div>
  );
}

export default App;
