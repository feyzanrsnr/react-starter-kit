import {Title} from "./Components";
import Tailwind from "./Tailwind"
import './tailwind.css'
import logo from './logo.svg';

function Styles(){
return(
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <Title>Hello React</Title>
      <Title theme="dark">Hello React</Title>
      <img src="/logo192.png" alt=""/>
      <img src={logo} alt="" />

      <Tailwind></Tailwind>
    </div>
)
}

export default Styles