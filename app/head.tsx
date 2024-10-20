'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Chanthawat Kiriyadee ${
      pathname === '/' ? '' : '· ' + titleFixedToShow
    }`,
    description: `Hi! My name is Chanthawat Kiriyadee. I'm a software engineer. I write about web development, JavaScript, TypeScript, React, and more.`,
    keywords: 'Chanthawat Kiriyadee',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={`https://boring9.dev${pathname}`} />
      <link rel="canonical" href={`https://boring9.dev${pathname}`} />
      <link rel="me" href="mailto:wit.chanthawat@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Chanthawat Kiriyadee" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@enwuft" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
