import React from 'react'
import style from './css/movie.module.css';
import { faveMoviesAction } from '../reduxToolKit/faveSlice';
import { useDispatch } from 'react-redux';
const MovieItem = (props) => {
    const dispatch = useDispatch();

    const addToFave = (props)=>{
        dispatch(faveMoviesAction.addToFave(props))
    }
    return (
		<li className={style.movie_item} id={props.id} cat={props.cat}>
			<img
				src={
					!props.poster_path
						? "https://cdn.mmaweekly.com/wp-content/uploads/2020/05/UFC-Woodley-vs-Burns-fight-poster-500px.jpg"
						: `https://image.tmdb.org/t/p/w500${props.poster_path}`
				}
				alt={props.title}
				onClick={(e) => {
					props.showDetail(props, {
						topVa: e.pageY - e.clientY,
						clintWidth: e.view.innerWidth,
					});
				}}
			/>
			<div className={style.info}>
				<h4
					onClick={(e) => {
						props.showDetail(props, {
							topVa: e.pageY - e.clientY,
							clintWidth: e.view.innerWidth,
						});
					}}
				>
					{props.title}
				</h4>
				<p>Rating {props.vote_average}/10</p>

				<button className={style.add_to_fav_action} onClick={addToFave.bind(null, props)}>
					Add To Favorite
				</button>

				{/* <button onClick={() => console.log("Remove from cart")}>
					Remove Fave
				</button> */}
			</div>
		</li>
	);
}

export default MovieItem
