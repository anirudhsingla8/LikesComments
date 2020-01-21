import React,{Component} from "react";

class LikeComponent extends Component{
    constructor(){
        super()
        this.state={
            likes:0
        }
    }

    change =() =>{
        this.setState({
            likes:this.state.likes+1
        })
    }

    render(){
        return(
            <div>
                <span>{this.state.likes}</span>
                <button onClick={this.change}>Like</button>
            </div>
        )
    }
}

export default LikeComponent