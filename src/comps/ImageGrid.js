import React from 'react';
import useFireStore from '../hooks/useFireStore';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFireStore('images');
    //console.log(docs);

    return (
<div className = "img-grid">
        {docs && docs.map(doc => (            <div className = "img-wrap" key={doc.id} onClick = {() => setSelectedImg(doc.url)}>
                <img src = {doc.url} alt = "uploaded pic"></img> </div>
        ))}
</div>
    )
}

export default ImageGrid;