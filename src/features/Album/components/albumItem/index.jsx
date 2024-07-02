import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'


function AlbumItem({album}) {
    return (
        <div className='album__item'>
            {album.state &&
                 <>
                     <img className='album__img' src={album.src} alt="" />
                     <h3 className='album__title'>{album.title}</h3>
                     <h2 className='album__arthur'>{album.arthur}</h2>
                 </>
            }
            {!album.state &&
                <h3>Album chưa có</h3>
            }
           
        </div>
    );
}

export default AlbumItem;