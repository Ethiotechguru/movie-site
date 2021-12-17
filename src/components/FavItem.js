import React from "react";
import style from "./css/FavItem.module.css";
import { faveMoviesAction } from "../reduxToolKit/faveSlice";
import { useDispatch } from "react-redux";
const FavItem = (props) => {
	const dispatch = useDispatch();
	const removeFaveItem = ()=>{
		console.log(props)
		dispatch(faveMoviesAction.removeFave(props.id))
	}
	return (
		<React.Fragment>
			<li className={style.fav_item} id={props.id}>
				<img
					src={
						!props.poster_path
							? "https://cdn.mmaweekly.com/wp-content/uploads/2020/05/UFC-Woodley-vs-Burns-fight-poster-500px.jpg"
							: `https://image.tmdb.org/t/p/w500${props.poster_path}`
					}
					alt={props.title}
					onClick={(e) =>
						props.showDetail(props, {
							topVa: e.pageY - e.clientY,
							clintWidth: e.view.innerWidth,
						})
					}
				/>
				<div className={style.info}>
					<button
						className={style.bred_cramp}
						onClick={() => console.log(props)}
					>
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</button>
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
					<button onClick={removeFaveItem}>Remove Fave</button>
				</div>
			</li>
		</React.Fragment>
	);
};

export default FavItem;
