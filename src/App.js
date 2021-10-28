
import './App.css';
import React, {useEffect,useState} from 'react'
import Nav from './components/Nav';
import { useDispatch,useSelector } from 'react-redux';
import Movies from './components/Movies';
import fetchMovies from './reduxToolKit/movieActionCreator';
import FaveMovies from './components/FaveMovies';
import { Route, Switch, Redirect } from "react-router-dom";
import MovieByGenre from './components/MovieByGenre';
function App() {
	// const [showFaves, setShowFavorite] = useState(false)
	const [count, setCount] = useState(0);
	const faveMovies = useSelector((state) => state.faveMovies.faveMovies);
	// useEffect(()=>{
	// 	if(faveMovies.length === 0){
	// 		setShowFavorite(false)
	// 	}
	// },[faveMovies])
    const scroll_left = (c) => {
		const ul = document.querySelector(c);
		console.log(c)
		const li = ul.querySelector("li");;
		let num = ul.clientWidth;
		let li_width = li.clientWidth;
		let itemPerView = num / li_width;
		let fullScrollCount = kidsMovies.kidsMovies.length / itemPerView;
		// let existingId = movies.find(item=>item.classId === c);
		if (count === 0) {
			ul.scrollBy({
				left: fullScrollCount * num,
				behavior: "smooth",
			});
			setCount(Math.floor(fullScrollCount));
		} else {
			ul.scrollBy({
				left: -num,
				behavior: "smooth",
			});
			setCount(count - 1);
		}
	};
	const scroll_right = (c) => {
		const ul = document.querySelector(c);
		const li = ul.querySelector("li");
		let num = ul.clientWidth;
		let li_width = li.clientWidth;
		let itemPerView = num/li_width;
		let fullScrollCount = kidsMovies.kidsMovies.length / itemPerView;
		if (count >= Math.floor(fullScrollCount)) {
			ul.scrollBy({
				left: -fullScrollCount * num,
				behavior: "smooth",
			});
			setCount(0);
		} else {
			ul.scrollBy({
				left: num,
				behavior: "smooth",
			});
			setCount(count + 1);
		}
	};
	const kidsMovies = useSelector((state) => state.kidsMovies);
	const dispatch = useDispatch();
	useEffect(() => {
			dispatch(fetchMovies());
	}, [dispatch]);
	return (
		<React.Fragment>
			<Nav
				onClick={() => {
					console.log(faveMovies);
					// if (faveMovies.length > 0) {
					// 	setShowFavorite(!showFaves);
					// 	return;d
					// }
				}}
			/>
			<div className="App">
				<Switch>
					<Route path="/" exact>
						<Redirect to="/all-movies" />
					</Route>
					<Route path="/all-movies" exact>
						{kidsMovies.kidsMovies.length > 0? (
							<Movies
								movies={kidsMovies.kidsMovies}
								category="Kids Movie"
								uniq="kidsMovie"
								cat="/movies/kids"
								leftScroll={() =>
									scroll_left(
										".kidsMovie",
										kidsMovies.kidsMovies.length
									)
								}
								rightScroll={() =>
									scroll_right(
										".kidsMovie",
										kidsMovies.kidsMovies.length
									)
								}
							/>
						):""}
						{kidsMovies.popularMovies.length > 0? (
							<Movies
								movies={kidsMovies.popularMovies}
								category="Popular Movies"
								uniq="popular"
								cat="/movies/popular"
								leftScroll={() => scroll_left(".popular")}
								rightScroll={() => scroll_right(".popular")}
							/>
						):''}
						{kidsMovies.dramaMovies.length > 0? (
							<Movies
								movies={kidsMovies.dramaMovies}
								category="Drama"
								uniq="drama"
								cat="/movies/drama"
								leftScroll={() => scroll_left(".drama")}
								rightScroll={() => scroll_right(".drama")}
							/>
						):<h1>No Movie Found</h1>}
					</Route>
					<Route path="/faves">
						<FaveMovies />
					</Route>
					<Route path="/movies/kids" exact>
						{kidsMovies.kidsMovies.length>0?<MovieByGenre
							movieByGenre={kidsMovies.kidsMovies}
							genre="Kids Movie"
							showDetail={() => console.log("hello")}
						/>:<h2>No Movie Found</h2>}
					</Route>
					<Route path="/movies/drama" exact>
						{kidsMovies.dramaMovies.length>0?<MovieByGenre
							movieByGenre={kidsMovies.dramaMovies}
							genre="Drama"
							// cat="/drama"
							showDetail={() => console.log("hello")}
						/>:<h2>No Movie Found</h2>}
					</Route>
					<Route path="/movies/popular" exact>
						{kidsMovies.popularMovies.length>0?<MovieByGenre
							movieByGenre={kidsMovies.popularMovies}
							genre="Popular Movies"
							// car="/popular"
							showDetail={() => console.log("hello")}
						/>:<h2>No Movie Found</h2>}
					</Route>
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
