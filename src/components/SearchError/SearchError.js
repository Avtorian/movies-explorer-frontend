import './SearchError.css';
export default function SearchError(props) {
    return (
        <div className="search-error">
            <p className="search-error__info">{props.isErrorValue}</p>
        </div>
    )
}