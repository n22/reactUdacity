import React, {Component} from 'react'



class FavList extends Component{
render(){
return(
		<ol>
  {this.props.profiles.map((profile)=>
(
  <li>
  {this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}
  </li>
)
)}
 		</ol> 
)
}
}

export default FavList