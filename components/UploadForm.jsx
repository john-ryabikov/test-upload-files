"use client"

import { useState } from "react"

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UploadForm() {

    const [file, setFile] = useState(null)
    // const [urlFile, setUrlFile] = useState("")

    const router = useRouter()

    const changeFile = (e) => {
        if (e.target.files) {
            const image = e.target.files[0]
            // setUrlFile(URL.createObjectURL(image))
            setFile(image)
        }
    }

    const uploadFile = async (e) => {
        e.preventDefault()

        try {
            if (!file) {
                return console.log("Загрузите файл")
            }
            const data = new FormData()
            data.set("file", file)

            await fetch(process.env.URL + "/api/upload", {
                method: "POST",
                body: data
            }, {cache: 'no-cache'})

            // console.log(file)
            router.refresh()
            setFile(null)

        } catch (e) {
            console.log((e))
        }
    }

    const deleteFile = () => {
        setFile(null)
        // setUrlFile("")
        router.refresh()
    }

    return (
        <form className="upload-form" onSubmit={uploadFile}>
            <div className="upload-form__label">
                <div className="upload-form__label-img">
                    <Image className="upload-form__label-img" priority src={"/img/UploadForm/file_upload_icon.svg"} width={60} height={80} alt="Upload Image"/>
                </div>
                <p className="upload-form__label-text">Загрузите изображение</p>
                <input 
                    className="upload-form__input" 
                    type="file" 
                    name="image"
                    accept="image/*"
                    onChange={changeFile}
                />
            </div>
            {file && (
                <div className="upload-form__list">
                    <p className="upload-form__list-title">
                        <span>{file.name}</span><br/>
                        <span>{Math.floor((file.size / 1024 / 1000) * 100) / 100 } MB</span>
                    </p>
                    <p className="upload-form__list-delete" onClick={deleteFile}>
                        <Image priority src={"/img/UploadForm/delete_icon.svg"} width={30} height={30} alt="X"/>
                    </p>
                </div>
            )}
            <button className="upload-form__button" type="submit">Добавить изображение</button>
        </form>
    )
}
