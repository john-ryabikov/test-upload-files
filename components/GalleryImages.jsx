import Images from "./Images"

export default async function GalleryImages() {

    let BASE_URL = "http://localhost:3000"

    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
        BASE_URL = "https://test-upload-files.vercel.app"
    }

    const blob = await fetch(BASE_URL + "/api/images", {
        cache: "no-cache"
    })

    const images = await blob.json()


    return (
        <Images images={images}/>
    )
}
