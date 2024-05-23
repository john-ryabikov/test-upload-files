import Image from "next/image"

export default function Images({images}) {

    return (
        <div className={images.length === 0 ? "gallery-images gallery-images_empty" : "gallery-images"}>
            {images.length === 0 ? (
                <span className="gallery-images__empty-text">Здесь ничего нет</span>
            ) : (
                <>
                    {images.map(( image, i ) => (
                        <div className="gallery-images__img-cont" key={i}>
                            <span className="gallery-images__img-load"></span>
                            <Image
                                src={image.url} 
                                width={300} 
                                height={240} 
                                alt={"Image" + i}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
