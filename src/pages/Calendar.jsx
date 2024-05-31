import { useProjects } from '../features/projects/useProjects'
import { HiOutlineCalendar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Spinner from '../ui/Spinner'
import PageSection from '../ui/PageSection';
import PageHeading from '../ui/PageHeader';
import PageSubHeading from '../ui/PageSubHeading';
import { useUser } from '../features/auth/useUser';

export default function Calendar() {

  const { user, isPending: isLoadingUser } = useUser()

  const { projects, isPending: isLoadingProjects } = useProjects(user.id)

  const isPending = isLoadingUser || isLoadingProjects

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
    <Link to={`/projects/${eventInfo.event.id}`} className="flex items-center justify-center mx-auto bg-tremor-background-muted dark:bg-dark-tremor-background-muted px-2 py-1 rounded-lg border shadow-sm gap-4 cursor-pointer">
      <HiOutlineCalendar className={`${title.split(" ").includes("due") ? "text-danger" : "text-green-500"} text-tremor-title`} />
      <div className="flex flex-col items-start">
        <p className="text-tremor-default font-medium text-wrap">{projectName}</p>
        <span className="text-tremor-default">{`${title.split(" ").includes("due") ? "Due" : "Start"} date`}</span>
      </div>
    </Link>
  );
};