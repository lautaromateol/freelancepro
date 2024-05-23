import { useProjects } from '../features/projects/useProjects'
import { HiOutlineCalendar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Spinner from '../ui/Spinner'
import PageSection from '../ui/PageSection';
import PageHeading from '../ui/PageHeader';
import PageSubHeading from '../ui/PageSubHeading';

export default function Calendar() {

  const { projects, isPending } = useProjects()

  if (isPending) return <Spinner />

  const startDates = projects.map((project) => {
    return (
      {
        title: `${project.name} start date`,
        date: new Date(project.startDate),
        id: project.id
      }
    )
  })

  const finishDates = projects.map((project) => {
    return (
      {
        title: `${project.name} due date`,
        date: new Date(project.finishDate),
        id: project.id
      }
    )
  })

  return (
    <PageSection>
      <header>
          <PageHeading>Calendar</PageHeading>
          <PageSubHeading>See your future projects here.</PageSubHeading>
      </header>
      <FullCalendar
        events={[...startDates, ...finishDates]}
        eventContent={renderEventContent}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </PageSection>
  )
}

const renderEventContent = (eventInfo) => {

  const title = eventInfo.event.title

  const [projectName] = title.split(title.split(" ").includes("due") ? " due" : " start")

  return (
    <Link to={`/projects/${eventInfo.event.id}`} className="flex items-center justify-center mx-auto bg-slate-100 px-2 py-1 rounded-lg border shadow-sm gap-4 cursor-pointer">
      <HiOutlineCalendar className={`${title.split(" ").includes("due") ? "text-red-500" : "text-green-500"} text-5xl`} />
      <div className="flex flex-col items-start">
        <p className="text-xl font-medium text-wrap">{projectName}</p>
        <span className="text-xl">{`${title.split(" ").includes("due") ? "Due" : "Start"} date`}</span>
      </div>
    </Link>
  );
};