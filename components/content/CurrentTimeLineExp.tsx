'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.fulcrum.co.th' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Fulcrum Engineering Thailand</a> | may. 2022 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
          "I spend the majority of my free time learning coding, electrical engineering, and hacking. I'm particularly interested in the Rust programming language. I've been an amateur programmer for a long time, driven by my passion for coding."
        </TimelineEvent.Description>

      </TimelineEvent>

      {/* <TimelineEvent>

        <TimelineEvent.Title>Freelance | feb. 2022 - mar. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards.
        </TimelineEvent.Description>

      </TimelineEvent> */}

      {/* <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | may. 2022 - jul. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent> */}

      <TimelineEvent last>
      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;