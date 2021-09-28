import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Button variant = "danger">Click me</Button>
      <br/>
      <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
    </div>
  );
};

export default App;
