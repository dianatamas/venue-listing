import React, { Component } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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
    const lastPage = Math.max(0, Math.ceil(venues.length / rowsPerPage) - 1)

    return (
      <div className="App">
        <Typography variant='h4' gutterBottom> Venues </Typography>
        <Grid container spacing={ 8 }>
        {venues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(venue =>
          <Grid item xs={ 9 } md={ 6 } lg ={ 4 } xl={ 3 } key={ venue.id }>
            <VenueCard venue={ venue } />
          </Grid>
        )}
        </Grid>
        <div className='buttonContainer'>
          <Typography>{ 'Page ' + (page + 1) + ' / ' + (lastPage + 1) }</Typography>
          <Button
            style={{ margin: '30px 10px' }}
            variant='contained'
            disabled={ page === 0 }
            onClick={ () => this.handleChangePage(page - 1) }
          >
            Previous
          </Button>
          <Button
            style={{ margin: '30px 10px' }}
            color='secondary'
            variant='contained'
            disabled={ page === lastPage }
            onClick={ () => this.handleChangePage(page + 1) }
          >
            Next
          </Button>
        </div>
      </div>
    )
  }
}

export default App
