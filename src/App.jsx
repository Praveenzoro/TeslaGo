
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';
import Displaycar from './components/Displaycar.jsx';


function Createbody(data){
    return <Body key={data.id}TITLE = {data.title} DESC = {data.desc} PRICE = {data.price} IMG={data.img} VID={data.vid}/>
 
}




function App() {
return <div  className="App">
      
    <Header />
   
    {Displaycar.map(Createbody)}
    <Footer />
    
</div>


}

export default App;
