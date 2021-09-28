import './App.css';
import Card from './Components/Card/Card';

function App() {
  const items =[
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
  
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    },
  
    {
      name:'first item', description:'jsadhfjhjadsjfdjas', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'
    }
  ]
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {
        items.map(item => <Card
          item = {item}
        ></Card>)
      }
    </div>
  );
}

export default App;
