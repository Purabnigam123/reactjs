import Appname from "./components/AppName";
import Input from "./components/input";
import Todoitem1 from "./components/todoitem1";
import Todoitem2 from "./components/todoitem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <Appname></Appname>
      <Input></Input>
      <center class="todo-items">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </center>
    </center>
  );
}
export default App;
