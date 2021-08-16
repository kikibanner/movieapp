import './Content.css';

const Content = ({ Poster, Title, Year, Type }) => {
    return (
        <div className="content">
            <img className="poster" src={`${Poster}`} alt="Movie" />
            <b className="title">{Title}</b>
            <div className="description">
                <span className="type">{Type}</span>
                <span className="year">{Year}</span>
            </div>
        </div>
    )
}

export default Content
