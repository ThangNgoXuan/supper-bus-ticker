import './App.scss';
import Text from './components/atoms/Text/index';

function App() {
  return (
    <div className="App">
      <Text content='page'/>
      <Text content='ascascsa' type='h1' modifiers={['600', 'red']} />
      <Text type='h1' modifiers={['600', 'red']}>ascascsa</Text>
    </div>
  );
}

export default App;
