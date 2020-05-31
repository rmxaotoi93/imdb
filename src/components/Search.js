import React, { Component } from 'react'
import {Button,Form,FormControl} from 'react-bootstrap'

export class Search extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            searchContents: '',
            
        }
    }
    searchByKeyword = (e) =>{
        
        e.preventDefault()
        console.log('heeee',this.state.searchContents)
        this.props.searchKeywordProps(this.state.searchContents)
    }
    render() {
 
        return (
            <div class="search">
                <Form inline onSubmit={(e) =>{this.searchByKeyword(e)}} >
      <FormControl onChange={e => {this.state.searchContents = e.target.value;}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" type="submit">Search</Button>
</Form>
            </div>
        )
    }
}

export default Search
