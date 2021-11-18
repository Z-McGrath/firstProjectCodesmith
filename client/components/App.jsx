import React,{Component} from 'react';
//import {Header } from  './components'
//import LoginForm from  './LoginForm';
//inport InputField from  './inputField';
//import {CustumeButton} from  './CustumeButton';

class App extends Component {
render(){
  return ( 
    <div>
      <div className='naveBar' key="1" style={{ backgroundColor: 'blueviolet', padding: '10px', display: 'flex', justifyContent: 'space-between'}}> 
        <p>ZM</p> 
        <div><button style={{}}> login</button>
        <a href="#about" style={{ color: 'white', textDecoration:"none"}}> about</a></div>
      </div> 
      <div className='searchBar' style={{ display: 'flex', justifyContent: 'center', padding: '15px'}}>
        <input className = "search" placeHolder="where to" type="text">
        </input>
        <button className='search-btn'> search</button>
      </div>
      <div className="options-container" style={{ display: "flex"}}>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}>
          <a href="">   
            <img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src='https://pemburytours.com/wp-content/uploads/2019/12/Pembury-Tours-Giraffe-Manor-Dining-Room-e1584629092721.png'/>
            Hotels
          </a>
        </div>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}><a href=""><img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/66b70bac7589691df92069bac331102e9772fe0c/big-8b4e7151ceb601f842c3aefe186ad745.jpg" />Things to do</a></div>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}><a href=""><img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://www.kenyatourism.in/images/kenyan-foods.jpeg" />Restaurants</a></div>
      </div>
      <div className="options-container" style={{ display: "flex"}}>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}>
          <a href="">   
            <img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src='https://pemburytours.com/wp-content/uploads/2019/12/Pembury-Tours-Giraffe-Manor-Dining-Room-e1584629092721.png'/>
            Hotels
          </a>
        </div>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}><a href=""><img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/66b70bac7589691df92069bac331102e9772fe0c/big-8b4e7151ceb601f842c3aefe186ad745.jpg" />Things to do</a></div>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}><a href=""><img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://www.kenyatourism.in/images/kenyan-foods.jpeg" />Restaurants</a></div>
      </div>
    
    </div>

  );
}
}
export default App;
//  <div
      //   style = {{
      //     backgroundColor: 'blueviolet'
      //   }}
      //   />
      // <div style = {{
      //   backgroundImage: 
      // }}