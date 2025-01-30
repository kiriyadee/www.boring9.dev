'use client';

import { Badge } from '@mantine/core';

const ShowSkills = ({ skills }: { skills: string | string[] }) => {
  if (skills instanceof Array) {
    return (
      <>
        {skills.map((skill) => (
          <Badge
            key={skill}
            className="mx-1"
            color="dark"
            size="lg"
            radius="xs"
            variant="filled"
          >
            {skill}
          </Badge>
        ))}
      </>
    );
  }

  return (
    <Badge color="dark" size="lg" radius="xs" variant="filled">
      {skills}
    </Badge>
  );
};

export default ShowSkills;
