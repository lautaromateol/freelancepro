import { HiOutlineArchiveBox, HiOutlineCalendar, HiOutlineCheckCircle, HiOutlineExclamationTriangle } from "react-icons/hi2";
import { isAfter, isBefore, isToday, startOfDay } from "date-fns";
import SummaryChart from "./SummaryChart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

/* eslint-disable react/prop-types */
export default function ProjectsSummary({ projects }) {

  const active = projects.filter(({ status }) => status === "In Progress").length
  const completed = projects.filter(({ status }) => status === "Complete").length
  const overdue = projects.filter(({ status, finishDate }) => status === "In Progress" && isAfter(startOfDay(new Date()), startOfDay(new Date(finishDate)))).length
  const upcoming = projects.filter(({ status, finishDate }) => status === "In Progress" && isBefore(startOfDay(new Date()), startOfDay(new Date(finishDate))) || isToday(new Date(finishDate))).length

  return (
    <>
      <section className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryChart title="Active Projects" icon={<HiOutlineArchiveBox />} data={active} />
        <SummaryChart title="Completed Projects" icon={<HiOutlineCheckCircle />} data={completed} />
        <SummaryChart title="Overdue Projects" icon={<HiOutlineExclamationTriangle />} data={overdue} />
        <SummaryChart title="Upcoming Projects" icon={<HiOutlineCalendar />} data={upcoming} />
      </section>
      <section className="md:hidden">
        <Slider {...settings}>
          <SummaryChart title="Active Projects" icon={<HiOutlineArchiveBox />} data={active} />
          <SummaryChart title="Completed Projects" icon={<HiOutlineCheckCircle />} data={completed} />
          <SummaryChart title="Overdue Projects" icon={<HiOutlineExclamationTriangle />} data={overdue} />
          <SummaryChart title="Upcoming Projects" icon={<HiOutlineCalendar />} data={upcoming} />
        </Slider>
      </section>
    </>
  )
}
