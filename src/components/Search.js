import React, { Component } from 'react'
import {Button,Form,FormControl} from 'react-bootstrap'

export class Search extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            searchContents: '',
            
        }
    }

    searchkeyWord = (e) =>{
        this.state.searchContents = e.target.value;
        this.props.searchKeywordProps(this.state.searchContents)
    }

    render() {
 
        return (
            <div className="search">
                <Form inline onSubmit={(e) =>{this.searchByKeyword(e)}
            } >
      <FormControl onChange={e => this.searchkeyWord(e)} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" type="submit">Search</Button>
</Form>
            </div>
        )
    }
}


export default Search
