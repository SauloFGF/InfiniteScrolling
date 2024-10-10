import { useEffect, useState } from 'react'

const FeedView = () => {
    const [images, setImages] = useState<string[]>([]);

    async function loadImages(numImages = 9) {
        const newImagens: string[] = [];

        for (let i = 0; i < numImages; i++) {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                newImagens.push(data.message);
            } catch (error) {
                console.log(error);
            }
        }
        setImages(prevImages => [...prevImages, ...newImagens]);
    }

    useEffect(() => {
        loadImages();
    }, [])

    const handleScroll = () => {

    }

    console.log('ddd')

  return (<div>
    {images.length > 0 ? (
        images.map((image, index) => <img key={index} src={image} alt={`Random dog ${index}`}/>)
    ) : (
        <p>Loading...</p>
    )}
    </div>)
}

export default FeedView