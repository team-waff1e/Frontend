import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const InfiniteScrollList = () => {
    const [items, setItems] = useState([]); 
    const [page, setPage] = useState(1); 
    const containerRef = useRef(null);

    const loadMoreItems = () => {
        

        // try {
        //     // Make an Axios request to fetch more items
        //     const response = await axios.get(`your_api_endpoint?page=${page}`);
        //     const data = response.data;
      
        //     // Append the new items to the existing list
        //     setItems([...items, ...data.items]);
        //     setPage(page + 1);
        //   } catch (error) {
        //     console.error('Error fetching more items:', error);
        //   }

        const newItems = Array.from({ length: 10 }, (_, index) => `Item ${items.length + index + 1}`);
        setItems([...items, ...newItems]);
        setPage(page + 1);
    };


    // useEffect(() => {
    //     loadMoreItems(); // Initial load
    //   }, []); // Run this effect only when the component mounts

    const handleIntersection = (entries) => {
        if (entries[0].isIntersecting) {
            loadMoreItems();
        }
    };

    useEffect(() => {
        const options = {
            root: null, 
            rootMargin: '0px', 
            threshold: 1.0, 
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [containerRef]);

    return (
        <div>
            <div className="item-container" ref={containerRef}>
                {items.map((item, index) => (
                    <div key={index} className="list-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollList;
