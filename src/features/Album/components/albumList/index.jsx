import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../albumItem';
import './styles.scss'

AlbumList.propTypes = {
    ListAlbum: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        arthur: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.bool.isRequired,
        src: PropTypes.string.isRequired
    })).isRequired,
    
};

AlbumList.defaultProps = {
    ListAlbum: [],
}

function AlbumList({ListAlbum}) {
    return (
        <div>
            <ul className='listAlbum'>
            {ListAlbum.map(album => (
                <li className='listAlbum__item' key={album.id}><AlbumItem album = {album}></AlbumItem></li>
            ))}
            </ul>
        </div>
    );
}

export default AlbumList;