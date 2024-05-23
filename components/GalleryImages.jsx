import Image from "next/image"

export default async function GalleryImages() {

    const blob = await fetch("https://test-upload-files.vercel.app/api/images", {
        cache: "no-store"
    })

    const images = await blob.json()


    return (
        <div className="gallery-images">
            {images.length === 0 ? (
                <span className="gallery-images__empty">Здесь ничего нет</span>
            ) : (
                <>
                    {blobs.map(( image, i ) => (
                        <div className="gallery-images__img-cont" key={i} >
                            <Image
                                className="gallery-images__img" 
                                priority 
                                src={image.url} 
                                width={380} 
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
