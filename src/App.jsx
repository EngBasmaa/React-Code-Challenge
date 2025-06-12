import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { SharedLayout } from "./layouts/SharedLayout";
import { SkipSizesPage } from "./pages/SkipSizesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<SharedLayout />}>
              <Route index element={<SkipSizesPage />} />
              <Route path="/skips" element={<SkipSizesPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
