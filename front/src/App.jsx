import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { useEffect } from "react";
import { useUserMeQuery } from "./queries/userQuery";

function App() {

  useUserMeQuery();

  // useEffect(() => {
  //   const disableZoom = (event) => {
  //     if (event.ctrlKey) {
  //       event.preventDefault();
  //     }
  //   };

  //   const disableKeyboardZoom = (event) => {
  //     if (event.ctrlKey && ["+", "-", "0"].includes(event.key)) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("wheel", disableZoom, { passive: false });
  //   document.addEventListener("keydown", disableKeyboardZoom);

  //   return () => {
  //     document.removeEventListener("wheel", disableZoom);
  //     document.removeEventListener("keydown", disableKeyboardZoom);
  //   };
  // }, []);

  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Routes>
          <Route path="/auth/*" element={<AuthRoute />} />
          <Route path="/*" element={<MainRoute />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
