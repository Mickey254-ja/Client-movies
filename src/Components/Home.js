import React,{useState} from "react";
import { useEffect } from "react";
import './Home.module.css'
import MovieCard from "./MovieCard";
import { Header } from "./Header";
import { Link } from "react-router-dom"

let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://mikki-movies-production.up.railway.app";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedie"];

const Homepage=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])
    const[movies, setMovies] = useState([])
  const[users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://mikki-movies-production.up.railway.app/movies")
    .then(response=>response.json())
    .then(data=>setMovies(data))
    fetch("https://mikki-movies-production.up.railway.app/users")
    .then(response=>response.json())
    .then(data=> setUsers(data))
  },[])

  const movieArray=movies.map((movie)=>{
    return <div >
         <img src={movie.image_url}/>
         <h2>{movie.title}</h2>
         <p>{movie.genre}</p>
         <p>{movie.year}</p>
         <p>{movie.rating}</p>
      </div>

  })

  // const userArray=users.map((user)=>{
  //   return <div>
  //   <h2>{user.name}</h2>
  //   <p>{user.username}</p>
  //   <p>{user.password}</p>
  //   <p>{user.email}</p>
  //   </div>
  // })

  return (
    <div className="App">
      <h1>NINJA-MOVIES</h1>
      <Header />
      {/* <Link to="/add" className="btn btn-main">
                + Add
              </Link> */}
         <div >
            {movieArray}
         </div>
     
      </div>
  
 
  );
  
  const getData=(movieType)=>{
    if(movieType==="Popular") {
      url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
    }
    if(movieType==="Theatre") {
      url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
    }
    if(movieType==="Drama") {
      url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
    }
    if(movieType==="Comedie") {
      url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
    }
    setUrl(url);
  }
  
  const searchMovie=(evt)=>{
    if(evt.key==="Enter") {
      url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
      setUrl(url);
      setSearch(" ");
    }
  }
    
  return(
    <>
      <div className="header">   
        <nav>
          <ul>
            {
              arr.map((value,pos)=>{
                return(
                  <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                )
              })
            }         
          </ul>
        </nav>
               
        <form>
          <div className="search-btn">
            <input type="text" placeholder="Enter Movie Name" 
              className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
              value={search} onKeyPress={searchMovie}>
            </input>
            <button><i className="fas fa-search"></i></button>                        
          </div>
          <div className="add-btn">
            <input type="text" placeholder="Add Movie"></input>
          </div>
        </form>
      </div>
      <div className="container">
        {
          (movieData.length===0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
            return(
            <MovieCard info={res} key={pos}/>
            )
          })
        }
      </div>         
    </>
  )}
  export default Homepage; 