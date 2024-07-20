import React, { useEffect } from 'react'

const ScrollAfterLoad = () => {
	useEffect(() => {
    const handleLoad = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

	return null
}

export default ScrollAfterLoad
