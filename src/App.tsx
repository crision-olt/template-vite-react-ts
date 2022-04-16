import { FC, Suspense } from "react";
const Loading: FC = () => (
  <div
    className={"w-screen h-screen flex items-center justify-center bg-gray-800"}
  >
    <div
      className={
        "inline-block text-gray-800 align-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 hover:p-2 rounded-lg"
      }
    >
      {"Hello World"}
    </div>
  </div>
);

const App: FC = () => {
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
          {"Hello World"}
        </div>
      </div>
    </Suspense>
  );
};

export default App;
