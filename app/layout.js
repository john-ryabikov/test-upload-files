import { Manrope } from "next/font/google";
import "@styles/globals.scss"

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata = {
  title: "Загрузка файлов",
  description: "Тестовый веб-сервис для загрузки файлов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
