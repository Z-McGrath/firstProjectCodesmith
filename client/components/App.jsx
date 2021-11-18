import React,{Component} from 'react';
//import {Header } from  './components'
//import LoginForm from  './LoginForm';
//inport InputField from  './inputField';
//import {CustumeButton} from  './CustumeButton';

class App extends Component {
render(){
  return ( 
    <div>
      <div className='naveBar' key="1" style={{ backgroundColor: '#8a2be252', padding: '10px', display: 'flex', justifyContent: 'space-between'}}> 
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
            <img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyFnR4r43AqLyvqDXXe5K6tv1yAVslNzhnA&usqp=CAU"/>
            Night Life
          </a>
        </div>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}><a href=""><img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://legacy.travelnoire.com/wp-content/uploads/2021/04/166477606_10158447085224032_1180985183457707825_n.jpg" />Insta Worthy Spots</a></div>
        <div className="img-container" style={{display: 'flex', padding: '20px', width: '300px', height:' 300px'}}><a href=""><img style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="https://381184-1196166-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/06/YachtWeekEA.kenya-3.jpeg" />Best Beaches In Town</a></div>
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