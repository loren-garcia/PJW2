import React from 'react';
import firebase from './config/firebase';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            query: ""
        }
    }

    componentDidMount() {

        const url = 'https://cors-anywhere.herokuapp.com/24pullrequests.com/users.json';

        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                users: json
            })
        });
    }
    
    onChange = event => {
        const { value } = event.target;
        this.setState({
            query: value
        });
    }
    
    processExit() {
        firebase.auth().signOut();
    }

    render() {

        var { users, query} = this.state;

        return(
            <div id="home">
                <button id="exitBtn" onClick={() => this.processExit()}>SAIR</button>
                <input id="searchInput"
                       type="text"
                       className="search-box"
                       placeholder="Buscar apelido..."
                       onChange={this.onChange} />
                    <ul>
                        {users.map(user => {
                            console.log(query);
                            if(query.length > 0 && user.nickname.includes(query)) {
                                return <div key={user.nickname}>
                                    Nickname: {user.nickname}
                                    <p id="search-result">Github: <a href={user.github_profile}>{user.github_profile}</a></p>
                                    <p>Twitter: <a href={user.twitter_profile}>{user.twitter_profile}</a></p>
                                    <p>Contributions: {user.contributions_count}</p>
                                </div>
                            }
                        })}
                    </ul>
            </div>
        );
    }
}

export default Home;