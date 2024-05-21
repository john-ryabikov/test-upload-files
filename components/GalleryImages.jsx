import Image from "next/image"

export default async function GalleryImages({images}) {

    return (
        <div className="gallery-images">
            {images.length === 0 ? (
                <span className="gallery-images__empty">Здесь ничего нет</span>
            ) : (
                <>
                    {images.map(( image, i ) => (
                        <Image
                            className="gallery-images__img" 
                            key={i} 
                            priority 
                            src={"/main/" + image} 
                            width={380} 
                            height={240} 
                            alt={"Image" + i}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
