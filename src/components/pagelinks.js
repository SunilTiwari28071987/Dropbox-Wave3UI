import React,{Component} from 'react';

class PageLink extends Component{

    render(){

        const visible={
            display: "All"
        }
        const invisible={
            display: "None"
        }

        return(
            <div>
                <button type="button" className="form-control btn btn-primary" name={this.props.name} id={this.props.id} value={this.props.value} onClick={()=>{this.props.onClick()}}>{this.props.text}</button>
                <div>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default PageLink;