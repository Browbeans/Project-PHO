import React, { Component, CSSProperties } from 'react';

interface Props {}
interface State {
    isLiked: boolean
}

class Like extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isLiked: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isLiked: !state.isLiked
        }));
    }

    render() {
        return(
            <div>
                <button 
                    onClick={this.handleClick} 
                    style={btnStyle}>
                        {this.state.isLiked ? "Like" : "❤️"}
                </button>
            </div>
        );
    }
}

export default Like;

const btnStyle: CSSProperties = {
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    background: '#f3cf7a',
    outline: 'none',
    borderRadius: '1rem',
    color: "#6e3b3b",
    fontWeight: 'bold',
    cursor: 'pointer'
}