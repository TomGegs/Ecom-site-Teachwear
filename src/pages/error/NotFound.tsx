import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            No page found - please return
            <Link to="/">home</Link>
        </div>
    );
};

export default NotFound;
