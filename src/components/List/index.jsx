import React from 'react';
import PropTypes from 'prop-types';
import Item from './elements/Item';

class List extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            dataList: [],
        };
    }
    componentDidMount() {
        this.setState({
            dataList: this.props.data
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data) { // Detect changes of data list
            this.setState({
                dataList: this.props.data
            })
        }
    }

    render() {
        return (
            <div className="list-wrap">
                {this.state.dataList.map((el) => {
                    const propsList = {
                        imgPath: el.images.default.filePath,
                        title: el.title,
                        desc: el.description,
                    };
                    return <Item data={propsList} key={el.id} />
                })}
                <style jsx="true">{`
                    .list-wrap {
                        border: 1px solid #ccc;
                        padding: 10px;
                        margin-top: 10px;
                        height: 80vh;
                        overflow-x: hidden;
                    }
                `}</style>
            </div>
        )
    }
}

List.defaultProps = {
    data: []
};
List.propTypes = {
  data: PropTypes.array,
};

export default List;
