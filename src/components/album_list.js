
import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from '../components/album_detail';

class AlbumList extends Component {

    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(({ data }) => this.setState({ albums: data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
