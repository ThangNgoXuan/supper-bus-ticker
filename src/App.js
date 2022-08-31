import "./App.scss";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Schedule from "./pages/Schedule";
import AboutUs from "./pages/AboutUs";
import Recruit from "./pages/Recruit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewsDetail from "./pages/NewsDetail";
import JobDetail from "./pages/JobDetail";
import BookingTicket from "./pages/BookingTicket";
import ScheduleDetail from "./pages/ScheduleDetail";

function App() {
  return (
    <>
      <Header />
      <div className="app_content">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/supper-bus-ticker" element={<Home/>}/>
          <Route exact path="/tin-tuc" element={<News/>}/>
          <Route exact path="/lich-trinh" element={<Schedule/>}/>
          <Route exact path="/ve-chung-toi" element={<AboutUs/>}/>
          <Route exact path="/tuyen-dung" element={<Recruit/>}/>
          <Route exact path="/lien-he" element={<Contact/>}/>
          <Route exact path="/tin-chi-tiet" element={<NewsDetail/>}/>
          <Route exact path="/cong-viec-chi-tiet" element={<JobDetail/>}/>
          <Route exact path="/dat-ve" element={<BookingTicket/>}/>
          <Route exact path="/chi-tiet-chuyen-xe" element={<ScheduleDetail/>}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
