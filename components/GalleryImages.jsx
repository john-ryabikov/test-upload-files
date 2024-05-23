import Images from "./Images"

export default async function GalleryImages() {

    let BASE_URL = "http://localhost:3000"

    if (process.env.VERCEL_ENV === "production") {
        BASE_URL = "https://test-upload-files.vercel.app"
    }

    const blob = await fetch(BASE_URL + "/api/images", {
        cache: "no-store"
    })

    const images = await blob.json()


    return (
        <Images url={BASE_URL} images={images}/>
    )
}
