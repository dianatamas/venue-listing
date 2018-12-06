import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

class VenueCard extends Component {

  render ()  {
    const { venue } = this.props

    return (
      <Card raised style={{ height: 250 }}>
        <CardHeader title={ venue.name } subheader={ venue.address1 + ', ' + venue.city + ' ' + venue.postcode } />
        <CardContent>
          <Typography>{ venue.listing_text }</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default VenueCard
