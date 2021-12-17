import React from 'react'
import classes from './css/moviesLists.module.css'
import MovieItem from './MovieItem'
import { Link } from 'react-router-dom'
// import {useSelector } from "react-redux";
const Movies = (props) => {
    return (
		<React.Fragment>
			<h2 className={classes.category}><Link to={props.cat}>{props.category}</Link></h2>
			<ul className={`${classes.movies_list} ${props.uniq}`}>
				<button className={classes.left_scroll_btn} onClick={props.leftScroll}>{"<"}</button>
				{props.movies.map((movie) => {
					return <MovieItem key={movie.id} {...movie} />;
				})}
				<button className={classes.right_scroll_btn} onClick={props.rightScroll}>{">"}</button>
			</ul>
		</React.Fragment>
	);
}

export default Movies
