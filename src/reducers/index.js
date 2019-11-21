import { combineReducers} from 'redux';

const songsReducer = ()=>{
    return [
        {title: 'lover', artist: 'tylor swift'},
        {title: 'seniorita', artist: 'shaen mendes'},
        {title: 'juice', artist: 'lizzo'},
        {title: '7 rings', artist: 'ariana grande'}
    ]
}
const selectedSongReducer = (selectedSong=null, action) =>{
    if (action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})