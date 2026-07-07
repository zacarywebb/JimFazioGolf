import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top instantly on route change so reveal animations
// trigger from a consistent scroll position.
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
