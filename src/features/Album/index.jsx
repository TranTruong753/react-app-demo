import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/albumList';


function AlbumFeature(props) {
    const ListAlbum = [
        {          
            id: 1,
            arthur: 'STM',
            title: 'ngày ngày vẫn vui vui',
            state: true,
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20230913/pngtree-music-record-album-holder-listen-image_13272785.jpg',

        },
        {          
            id: 2,
            arthur: 'MTP',
            title: 'Em của ngày hôm qua',
            state: true,
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20230913/pngtree-music-record-album-holder-listen-image_13272785.jpg',
        },
        {          
            id: 3,
            arthur: 'KTM',
            title: 'Yêu mãi một người',
            state: true,
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20230913/pngtree-music-record-album-holder-listen-image_13272785.jpg',
        }
    ]
    return (
        <div>
            <AlbumList ListAlbum = {ListAlbum}></AlbumList>
        </div>
    );
}

export default AlbumFeature;