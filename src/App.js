import React, { Component } from 'react'

import Footer from './Footer'
import Login from './Login'
import List from './List'

const SC = require('soundcloud')

class App extends Component {
  constructor (props) {
    super(props)

    this.apiBase = 'https://api.soundcloud.com'
    this.redirectUri = 'https://downcloud.ruud.ninja/callback.html'
    this.clientId = 'c205c3e2eedb509dff1c1147765b055d'
    this.pageSize = 200

    this.state = {
      accessToken: null,
      tracks: []
    }
  }

  componentDidMount () {
    SC.initialize({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      baseUrl: ''
    })
  }

  authenticateWithSoundcloud () {
    SC.connect().then(session => {
      this.setState({
        accessToken: session.oauth_token
      })

      this.fetchTracks()
    })
  }

  fetchTracks () {
    SC.get(this.apiBase + '/me/tracks', {
      limit: this.pageSize,
      linked_partitioning: 1
    }).then(tracks => this.fetch(tracks))
  }

  fetch (tracks) {
    let newTracks = []

    tracks.collection.forEach(track =>
      newTracks.push({
        title: track.title,
        url: track.download_url + '?oauth_token=' + this.state.accessToken
      })
    )

    this.setState(old => ({tracks: [...old.tracks, newTracks]}))

    if (tracks.next_href) {
      SC.get(tracks.next_href).then(tracks => this.fetch(tracks))
    }
  }

  render () {
    return [
      (!this.state.accessToken && <Login key='login' onLoginClick={this.authenticateWithSoundcloud} />),
      (this.state.accessToken && <List key='list' tracks={this.props.tracks} />),
      <Footer key='footer' />
    ]
  }
}

export default App
