import React from 'react';

class SeachBar extends React.Component{
    state = { term: ''}
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    action=""
                    className="ui form">
                    <div className="field">
                        <label>Image Seach</label>
                        <div className="ui search">
                            <div className="ui icon input">
                                <input
                                    className="prompt"
                                    type="text"
                                    value={this.state.term}
                                    onChange={e=> this.setState({term: e.target.value})}
                                />
                                <i className="search icon"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SeachBar;