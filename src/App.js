import './App.css';
import MyFunction from './MyFunction';
import MyHook from './MyHook';
import MyClass from './MyClass';

function App() {
  return (
    <div className="App">
      <h1>My React Example</h1>
      <p>Some text</p>
      <MyFunction fname="Teppo" lname="Testi"/>
      <MyFunction fname="Lisa" lname="Smith"/>
      <MyHook fname="Bob"/>
      <MyClass fname="Matt"/>
    </div>
  );
}

export default App;
