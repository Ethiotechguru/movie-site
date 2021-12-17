import navStyle from "./css/nav.module.css";
import {NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = (props) => {
	const faveMovies = useSelector((state) => state.faveMovies.faveMovies);
	return (
		<nav className={navStyle.nav_container}>
			<h2 className={navStyle.logo}>
				<NavLink to="/all-movies">ተማር ልጄ</NavLink>
			</h2>
			<div className={navStyle.nav_link_cart}>
				<ul className={navStyle.genera}>
					<li>
						<NavLink
							activeClassName={navStyle.active}
							to="/all-movies"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={navStyle.active}
							to="/movies/kids"
						>
							Kids
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={navStyle.active}
							to="/movies/popular"
						>
							Popular
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={navStyle.active}
							to="/movies/drama"
						>
							Drama
						</NavLink>{" "}
					</li>
				</ul>
				<div
					className={navStyle.cart_container}
					onClick={props.onClick}
				>
					<div className={navStyle.cart}>
						<NavLink activeClassName={navStyle.active} to="/faves">
							Favorites{" "}
							<span
								className={
									faveMovies.length > 0
										? navStyle.quantity
										: ""
								}
							>
								{faveMovies.length}
							</span>{" "}
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
