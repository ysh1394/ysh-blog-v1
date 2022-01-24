import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [selected, setSelected] = useState('/');

  const menus = [
    {
      id: '1',
      title: 'Blog',
      route: '/',
    },
    {
      id: '2',
      title: 'About',
      route: 'about',
    },
  ];

  useEffect(() => {
    if (router.isReady) {
      const mainRoute = router.asPath.split('/')[1];
      setSelected(mainRoute || '/');
    }
  }, [router]);

  // const moveRoute = (): void => {
  //   router.push
  // };

  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            alt="#"
            src="https://links.papareact.com/yvf"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          {menus.map((menu) => {
            return (
              <Link href={menu.route || '/'}>
                <h3
                  // onClick={moveRoute}
                  key={menu.id}
                  className={
                    selected === menu.route
                      ? 'text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer'
                      : 'hover:underline hover:text-green-600 cursor-pointer'
                  }
                >
                  {menu.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
