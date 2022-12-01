import { HeaderMin } from '../components/HeaderMin/HeaderMin';

export default function HomePage() {
  return (
    <>
      {/* Home | Blog | Projects |  GuestBook | Dashboard */}
      <HeaderMin links={
        [
          {
            link: '',
            label: 'Home',
          },
          {
            link: '',
            label: 'Blog',
          },
          {
            link: '',
            label: 'Projects',
          },
          {
            link: '',
            label: 'Guestbook',
          },
          {
            link: '',
            label: 'Dashboard',
          },
        ]
      }
      />
    </>
  );
}
