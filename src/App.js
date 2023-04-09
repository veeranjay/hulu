import { Route, Routes } from "react-router-dom";

import Home from "./pages/Dashboard/Home";
import Watch from "./pages/Watch/Watch";

const NotFound = () => {
  return <div>Not FOund bitch</div>;
};
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/series/:id" element={<Watch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
