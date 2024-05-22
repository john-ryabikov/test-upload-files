import Image from "next/image"
import { list } from "@vercel/blob"

export default async function GalleryImages() {

    const { blobs } = await list()

    return (
        <div className="gallery-images">
            {blobs.length === 0 ? (
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
