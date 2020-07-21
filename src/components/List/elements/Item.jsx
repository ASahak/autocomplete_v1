import React from 'react';
import PropTypes from 'prop-types';
import {
    AXIOS_IMAGES_URL
} from '../../../utils/constants';
import Avatar from './Avatar';

export default function Item (props) {
    const {imgPath, title, desc} = props.data;

    return (
        <div className="list-item">
            <Avatar src={AXIOS_IMAGES_URL + imgPath}/>
            <div className="list-item_right">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <style jsx="true">{`
                .list-item {
                    display: flex;
                    padding: 10px;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 15px;
                }
                .list-item img {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                }
                .list-item_right p {
                    font-size: 12px;
                    text-align: left;
                }
                .list-item_right h4 {
                    text-align: left;
                    margin: 0;
                }
                .list-item_right {
                    padding-left: 10px;
                }
            `}</style>
        </div>
    )
}

Item.propTypes = {
  data: PropTypes.object,
};
