import React, { Component } from 'react';
import axios from 'axios';
import News from '../news/news';
import '../home/home.css';

class Home extends Component  {

    state = {
        holder: [],
        searchItem: ''
    }

    deleteText = () => {
        document.getElementById('search-text').value = "";
    }

    componentDidMount = () => {

        axios.get('https://gnews.io/api/v3/search?q='+ encodeURIComponent('Nigeria') + '&token=34bc8184823d6138a8386ca703e22b1e')
        .then(response => {
            this.setState ({
                holder: response.data.articles
            })

        }).catch ( error => {
            console.log(error);
        }) 
    }
    
    getQueryHandler = (e) => {
        e.preventDefault();


        axios.get('https://gnews.io/api/v3/search?q='+ encodeURIComponent(this.state.searchItem) + '&token=34bc8184823d6138a8386ca703e22b1e')
            .then(response => {
                this.setState ({
                    holder: response.data.articles
                })

            }).catch ( error => {
                console.log(error);
            })        
        this.deleteText();
    }

    titleChangedHandler = (e) => {

        let srch = e.target.value;
        this.setState ({
            searchItem: srch
        })
    }

    render () {

        return (

            <main className="main-app">
                <div className="header-container">
                    <header>
                        <h1>Find News</h1>
                        <p> All you have to do is search for it</p>
                    </header>
                </div>
                <form>
                    <input type="text" id="search-text" placeholder="Title" onChange={this.titleChangedHandler} />
                    <button id="btn-find" onClick={this.getQueryHandler}>find</button>
                </form>
                {
                    this.state.holder.map ( item => {
                        return <News 
                            key={item.publishedAt}
                            photo={item.image}
                            title={item.title}
                            desc={item.description}
                            link={item.url}    
                        />
                    })
                }
            </main>
        )
    }
}


export default Home;