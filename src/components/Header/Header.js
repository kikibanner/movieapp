import './Header.css'

const Header = () => {
    return (
        <div className="header" onClick={() => window.scroll(0,0)}>
            MovieSearch
            <p className="subheader">by kikibanner</p> 
        </div>
    )
}

export default Header
