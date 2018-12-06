import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import VenueCard from './VenueCard'

const rowsPerPage = 10

class App extends Component {

  state = {
    venues: [],
    page: 0
  }

  componentDidMount () {
      fetch('https://venue-lister.herokuapp.com/venues')
      .then(data => data.json())
      .then(venues => this.setState({ venues }))
  }

  handleChangePage = (page) => {
    this.setState({ page })
  }

  render() {
    const { page, venues } = this.state

    return (
      <div className="App">
        <Grid container spacing={ 16 }>
        {venues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(venue =>
          <Grid item xs={ 3 } key={ venue.id }>
            <VenueCard venue={ venue } />
          </Grid>
        )}
        </Grid>
        <Button variant='contained' onClick={ () => this.handleChangePage(page + 1) }>Next</Button>
        <Button variant='contained' onClick={ () => this.handleChangePage(page - 1) }>Previous</Button>
      </div>
    )
  }
}

export default App
