import React from "react";
// import classes from "./css/FavMovies.module.css";
import  classes from './css/movieByGenre.module.css'
import GenreItems from "./GenreItems";
const MovieByGenre = (props) => {
	return (
		<React.Fragment>
			<div className={classes.cat_container}>
				<h2 className={classes.category}>{props.genre}</h2>
			</div>
			<ul className={classes.genre_list}>
				{props.movieByGenre.map((movie) => {
					return <GenreItems key={movie.id} {...movie} showDetail={props.showDetail}/>;
				})}
			</ul>
		</React.Fragment>
	);
};

export default MovieByGenre;
