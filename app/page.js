import UploadForm from "@components/UploadForm"
import GalleryImages from "@components/GalleryImages"

export default async function LocalUpload() {
    
    return (
        <main className="main">
            <section className="main__cont">
                <h1 className="main__title">Тестовый сервис для<br/>загрузки изображений</h1>
                <UploadForm/>
                <GalleryImages/>
            </section>
        </main>
    )
}
