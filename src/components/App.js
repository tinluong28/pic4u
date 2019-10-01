import React from 'react';
import unsplash from '../api/unsplash';
import SeachBar from './SeachBar';
import ImageList from './ImageList';
import '../styles/App.css'


class App extends React.Component{
    state = {
        images: [],
    }
    componentDidMount(){
        unsplash.get('search/photos', {
            params: {query: 'unsplash'}
        }).then(res=>this.setState({images:res.data.results}))
    }

    onSeachSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
        console.log(this.state.images)
    }
    render(){
        const notFound = this.state.images.length > 0 ? null : 'No related pictures found.'
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <h1 className="ui header">Welcome to Pic4U</h1>
                <h3 className="ui header">Pictures in this application are provided by Unsplash's API.</h3>
                    <SeachBar onSubmit={this.onSeachSubmit}/>
                    <ImageList
                        images = {this.state.images}
                        notFound = {notFound}
                    />
            </div>
        )
    }
}

export default App;