import React,{Component} from "react";
import ResultComponent from "./ResultComponent";

class InputComponent extends Component{
        constructor(){
            super()
            this.state={
                likes:0,
                comments:[],
                current:''
            }
        }

        change = () => {
            this.setState({
                likes: this.state.likes + 1
            })
        }

        commentChange =(event) =>{
            this.setState({
                current:event.target.value
            })
        }

        addComment = () =>{
            if(this.state.current){
                this.state.comments.push(this.state.current)
            }

            this.setState({
                comments:this.state.comments,
                current:''
            })
        }

        render(){
            return(
                <div className='inputC'>
                    <input type='text' value={this.state.current} onChange={this.commentChange} placeholder='Enter your Comments'/>
                    <button onClick={this.addComment}>Post</button>
                    <button onClick={this.change}>Like</button>
                    <ResultComponent {...this.state}/>
                </div>
            )
        }

}

export default InputComponent;