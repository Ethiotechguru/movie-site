import { moviesActions } from "./moviesSlice"
import { url_kids } from "../url/url";
import { url_popular } from "../url/url";
import { url_drama } from "../url/url";
const fetchMovies = ()=>{
    return async (dispatch)=>{
        try{
            const kidsRes = await fetch(url_kids);
            const kidsData = await kidsRes.json();
            const resKids = await kidsData.results;
            const popularRes = await fetch(url_popular);
            const popularData = await popularRes.json();
            const resPopular = await popularData.results;
            const dramaRes = await fetch(url_drama);
            const dramaData = await dramaRes.json();
            const resDrama = await dramaData.results;
            const data = {
				resKids,
				resPopular,
				resDrama,
			};
            dispatch(
				moviesActions.replaceMovies({
					kidsMovies: data.resKids,
					popularMovies: data.resPopular,
                    dramaMovies:data.resDrama,
				})
			);
        }catch(err){
            console.log(err)
        }
    }
}

export default fetchMovies;