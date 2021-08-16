import './Content.css';
import ContentModal from '../ContentModal/ContentModal';

const Content = ({ Poster, Title, Year, Type }) => {
    return (
        <ContentModal Type={Type} Poster={Poster} Year={Year} Title={Title} className="content">
            <img className="poster" src={`${Poster}`} alt="Movie" />
            <b className="title">{Title}</b>
            <div className="description">
                <span className="type">{Type}</span>
                <span className="year">{Year}</span>
            </div>
        </ContentModal>
    )
}

export default Content
