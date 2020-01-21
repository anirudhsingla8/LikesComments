import React,{Component} from "react";
class ResultComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            items:this.props.comments
        }
    }

    render(){
        let {items} = this.state;
        return(
            <div>
                <p>{this.props.likes}</p>
                {items.map(item=>(
                        <div>
                            <p className="result">{item}</p>
                        </div>
                    )
                )}
            </div>
        )
    }


}

export default ResultComponent;