import React, { Component } from 'react'

export class Search extends Component {
    
    render() {
        let searchContents = ''
        
        return (
            <div>
                <Form inline>
      <FormControl onChange={e => {searchContents = e.target.value;}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
</Form>
            </div>
        )
    }
}

export default Search
