import UploadForm from "@components/UploadForm"
import GalleryImages from "@components/GalleryImages"

export default async function LocalUpload() {

    const res = await fetch("http://localhost:3000/api/images", {
        cache: 'no-cache'
    })
    const images = await res.json()
    
    return (
        <main className="main">
            <section className="main__cont">
                <h1 className="main__title">Тестовый сервис для<br/>загрузки изображений</h1>
                <UploadForm/>
                <GalleryImages images={images}/>
            </section>
        </main>
    )
}
