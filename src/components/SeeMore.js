import React, { Component } from 'react'

export class SeeMore extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            url: ``,
            iurl: ``
        }
        this.loadMore = this.loadMore.bind(this)
    }

    componentDidMount(){
        fetch(this.state.url)
        .then(res => res.json())
        .then((res)=>{
            this.setState({items: res})
        })
    }
    loadMore(){
        this.setState((old)=>{
            return{}
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                {this.state.items.map((item)=> {
                    return(
                        
                    <div className="col-md-4">
                        <img src={this.state.iurl + item.pic}/>
                        <p>{item.title}</p>
                    </div>
                
                    )
                })}
                </div>
            </div>
        )
    }
}

export default SeeMore
