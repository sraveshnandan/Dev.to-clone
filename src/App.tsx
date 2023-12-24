import { Route, Routes } from "react-router-dom";
import { AuthLayout, RootLayout } from "./layouts";
import { LoginPage, HomePage, SignUpPage } from "./pages";
import { Toaster } from "sonner";
import axios from "axios";


export default function App() {
  axios.defaults.baseURL = "http://127.0.0.1:4000/api/v1";
  axios.defaults.withCredentials = true;

  return (
    <>
      <Toaster richColors closeButton />
      <Routes>


        {/* Home  Routes  */}
        <Route element={<RootLayout />} >
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Authentication Routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />


        </Route>



      </Routes>
    </>

  )
}