import logo from './logo.svg';
import './App.css';
import Name from "./Name"
import Photo from './Photo';
import Price from './Price';
import Description from './Description';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardBody,CardTitle,Card,CardText,CardSubtitle} from "reactstrap"
function App() {
  return (
  
     <Card
  style={{
    width: '18rem',
    marginLeft:"500px"
  }}
>
<Photo/>
  <CardBody>
    <CardTitle tag="h5">
    <Name />
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
           <Price/>
    </CardSubtitle>
    <CardText>
    <Description/> 
        </CardText>
   
  </CardBody>
</Card>
    
  );
}

export default App;
