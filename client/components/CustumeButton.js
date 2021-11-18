import React from 'react ';

class CustumeButton extends React.Component {
    render(){
        return (
           <div className = "submitButton">
                 <button 
                 className = 'btn'
                 onClick = {() => console.log('clicked')}
                 >
                  {'button'}
                 </button>
</div>

        );
    }
}
export default CustumeButton;