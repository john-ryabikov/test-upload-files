import { Golos_Text } from "next/font/google";
import "@styles/globals.scss"

const golos = Golos_Text({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--golos"
});

export const metadata = {
  title: "Загрузка файлов",
  description: "Тестовый веб-сервис для загрузки файлов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={golos.variable}>{children}</body>
    </html>
  );
}
