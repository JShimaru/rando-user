import { useState } from 'react';

function UserSummary(props){
        console.log(props.randomUser)

        function screwThis(){
            const userName = props.randomUser.login.username;
            const title = props.randomUser.name.title;
            const first = props.randomUser.name.first;
            const last = props.randomUser.name.last;
            
            return (<><h2>Username: {userName} </h2>
            <h4>{title} {first} {last}</h4></>)
        }

        function moreInfo(){
            const email = props.randomUser.email;
            const country = props.randomUser.location.country
            const city = props.randomUser.location.city
            const state = props.randomUser.location.state

            return (<><p>{email}</p><p>{city}, {state} {country}</p></>)
        }



    const [showMore, setShowMore] = useState(false)

    function reveal(){
      console.log(showMore)
      if(!showMore){
        setShowMore(true)
    }else{
        setShowMore(false)
    }
    }
//console.log(props.flag)
    return(
        <div className="user">
            <h1>{props.randomUser ? 'Current User -' : 'Loading User...'}</h1>
            <div>{props.flag && screwThis()}</div>
            <button onClick={reveal}>Show more info...</button>
            <p>{showMore && moreInfo()}</p>
        </div>
    )
}

export default UserSummary;