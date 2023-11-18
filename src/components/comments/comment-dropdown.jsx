import React from 'react';

const commentDropdown = (children) => {
    return (
        <div style={{ position: 'absolute', top: '20px', right: '0', backgroundColor: '#fff', border: '1px solid #ccc', padding: '8px', zIndex: '1000' }}>
            {children}
        </div>
    );
};
export default commentDropdown;