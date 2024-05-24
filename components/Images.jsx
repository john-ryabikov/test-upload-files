'use client'

import { useState } from "react"

import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Images({images}) {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    const deleteImage = async (url) => {

        setIsLoading(prev => !prev)

        try {

            let BASE_URL = "http://localhost:3000"

            if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
                BASE_URL = "https://test-upload-files.vercel.app"
            }
    
            await fetch(BASE_URL + "/api/delete",
                {
                    method: 'DELETE',
                    body: JSON.stringify({url}),
                    next: {
                        cache: "no-cache"
                    }
                }
            )

            setTimeout(() => {
                setIsLoading(false)
            }, 1500)

        } catch (e) {
            setIsLoading(false)
            console.log((e))
        }

        router.refresh()
    }

    return (
        <div className={images.length === 0 ? "gallery-images gallery-images_empty" : "gallery-images"}>
            {images.length === 0 ? (
                <span className="gallery-images__empty-text">Здесь ничего нет</span>
            ) : (
                <>
                    {images.map(( image, i ) => (
                        <div className="gallery-images__img-cont" key={i}>
                            <button 
                                className="gallery-images__img-delete"
                                onClick={() => deleteImage(image.url)}
                            >
                                {isLoading ? (
                                    <div className="gallery-images__img-delete-load">
                                        <Image priority src={"/img/UploadForm/loading_out.svg"} alt="Loading" width={15} height={15}/>
                                    </div>
                                ) : (
                                    <img src={"/img/UploadForm/delete_icon.svg"} alt="X"/>
                                )}
                            </button>
                            <span className="gallery-images__img-load"></span>
                            <Image
                                src={image.url} 
                                width={300} 
                                height={300} 
                                alt={"Image" + i}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
