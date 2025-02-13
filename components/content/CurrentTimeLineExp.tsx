'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.fulcrum.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Fulcrum Engineering Thailand
          </a>{' '}
          | may. 2022 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          "I spend the majority of my free time learning coding, electrical
          engineering, and hacking. I'm particularly interested in the Rust
          programming language. I've been an amateur programmer for a long time,
          driven by my passion for coding."
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
