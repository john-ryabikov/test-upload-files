"use client"

import { useState, useRef } from "react"

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UploadForm() {

    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const inputFileRef = useRef(null);

    const changeFile = (e) => {
        if (e.target.files) {
            const image = e.target.files[0]
            setFile(image)
        }
    }

    const uploadFile = async (e) => {
        e.preventDefault()
        setIsLoading(prev => !prev)
        try {
            if (!file) return console.log("Загрузите файл")

            // let BASE_URL = "http://localhost:3000"

            // if (process.env.VERCEL_ENV === "production") {
            //     BASE_URL = "https://test-upload-files.vercel.app"
            // }

            // console.log(BASE_URL)

            await fetch(`https://test-upload-files.vercel.app/api/upload?filename=${file.name}`,
                {
                    method: 'POST',
                    body: file,
                    next: {
                        cache: "no-cache"
                    }
                }
            )

            setFile(null)
            setIsLoading(false)
            router.refresh()

        } catch (e) {
            setIsLoading(false)
            console.log((e))
        }
    }

    const deleteFile = () => {
        setFile(null)
        router.refresh()
    }

    return (
        <form className="upload-form" onSubmit={uploadFile}>
            <div className="upload-form__label">
                <div className="upload-form__label-img">
                    <Image priority src={"/img/UploadForm/file_upload_icon.svg"} width={30} height={50} alt="Upload Image"/>
                </div>
                <p className="upload-form__label-text">Загрузите изображение</p>
                <input 
                    className="upload-form__input"
                    ref={inputFileRef} 
                    type="file" 
                    name="image"
                    accept="image/*"
                    onChange={changeFile}
                    required
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
            <button className="upload-form__button" type="submit" disabled={isLoading}>
                {isLoading ? (
                    <Image priority src={"/img/UploadForm/loading_out.svg"} alt="Loading" width={30} height={30}/>
                ) : "Добавить изображение"}
            </button>
        </form>
    )
}
