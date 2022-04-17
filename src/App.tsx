import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";
const Loading: FC = () => (
  <div
    className={"w-screen h-screen flex items-center justify-center bg-gray-800"}
  >
    <div
      className={
        "inline-block text-gray-800 align-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 hover:p-2 rounded-lg"
      }
    >
      {"Cargando..."}
    </div>
  </div>
);

const App: FC = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<Loading />}>
      <div
        className={
          "w-screen h-screen flex items-center justify-center bg-gray-800"
        }
      >
        <div
          className={
            "inline-block text-gray-800 align-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 hover:p-2 rounded-lg"
          }
        >
          {t("hello-world")}
        </div>
      </div>
    </Suspense>
  );
};

export default App;
