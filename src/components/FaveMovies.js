import React from 'react'
import classes from './css/FavMovies.module.css';
import FavItem from './FavItem';
import { useSelector } from 'react-redux';
const FaveMovies = (props) => {
    const faveMovies = useSelector((state) => state.faveMovies.faveMovies);
	if(faveMovies.length === 0){
		return<h1>No Favorite Movie Added Yet!</h1>
	}
    return (
		<React.Fragment>
			<div className={classes.arrow} onClick={props.backToHome}></div>
			<div className={classes.cat_container}>
				<h2 className={classes.category}>Favorites</h2>
				<h2
					className={classes.clear_fav_action}
					onClick={() => console.log("hello")}
				>
					Clear All
				</h2>
			</div>
			<ul className={classes.fav_list}>
				{faveMovies.map((movie) => {
					return <FavItem key={movie.id} {...movie} />;
				})}
			</ul>
		</React.Fragment>
	);
}

export default FaveMovies
