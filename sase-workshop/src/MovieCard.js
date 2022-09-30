function MovieCard({movie}) {
    return(
        <div className="movie-card">
            <img  src={''} className="movie-image"/>
            <h3 className="movie-title">{movie.title}</h3>
            <div className="movie-subtext">{movie.voteAverage}</div>
            <div className="movie-subtext">{movie.release_date}:</div>
            <div className="movie-subtext">{movie.overview}</div>
        </div>
    )
}

export default MovieCard