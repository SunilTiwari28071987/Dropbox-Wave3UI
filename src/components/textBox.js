import React, { Component } from 'react';
import { connect } from 'react-redux'

class TextBox extends Component {


    render() {
        let input;
        return (
            <div>

                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    //this.props.creatingFolder(input.value)
                    this.props.onClick(input.value);
                    input.value = ''
                }}>
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit" >
                       OK
                    </button>
                </form>
            </div>
        )

    }
}

export default TextBox;