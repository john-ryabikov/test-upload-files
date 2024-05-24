"use client"

import { useState, useRef } from "react"

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UploadForm() {

    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const inputFile = useRef(null)

    const router = useRouter()

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

            let BASE_URL = "http://localhost:3000"

            if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
                BASE_URL = "https://test-upload-files.vercel.app"
            }

            await fetch(`${BASE_URL}/api/upload?filename=${file.name}`,
                {
                    method: 'POST',
                    body: file,
                    next: {
                        cache: "no-cache"
                    }
                }
            )

            inputFile.current.value = ""
            setFile(null)
            setIsLoading(false)
            router.refresh()

        } catch (e) {
            setIsLoading(false)
            console.log((e))
        }
    }

    const deleteFile = () => {
        inputFile.current.value = ""
        setFile(null)
        router.refresh()
    }

    return (
        <form className="upload-form" onSubmit={uploadFile}>
            <div className="upload-form__label">
                <div className="upload-form__label-img">
                    <Image priority src={"/img/UploadForm/file_upload_icon.svg"} width={42} height={60} alt="Upload Image"/>
                </div>
                <p className="upload-form__label-text">Загрузите изображение</p>
                <input 
                    className="upload-form__input"
                    ref={inputFile}
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
                        <img src={"/img/UploadForm/delete_icon.svg"} alt="X"/>
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
