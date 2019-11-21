import React from 'react';
import { connect } from 'react-redux';

const SongDetail =({song})=>{
    console.log({song})
    if (!song){
        return <div> Select A Song</div>
    }

    return <div>
        <h3> Details For</h3>
        <p> Title: {song.title}</p>
        <p> Artist: {song.artist}</p>
        </div>
}
const mapStateToProps =state=>{
    return {song: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetail);