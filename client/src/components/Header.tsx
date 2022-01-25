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
    <header className="w-full sticky top-0 z-50 bg-white ">
      <div className="container flex items-center justify-between p-3 mx-auto ">
        <div className="w-1 flex md:hidden" />
        <div className="flex items-center justify-between space-x-5">
          <Link href="/">
            <h1 className="w-100% px-1 text-2xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600 hover:from-transparent hover:to-purple-600 hover:ease-out hover:duration-100 hover:translate-x-1 md:text-2xl cursor-pointer">
              SYUNG~ ZA
              {/* Syuung~~Zaa~ */}
            </h1>
          </Link>

          <div className="hidden md:inline-flex items-center space-x-5">
            {menus.map((menu) => {
              return (
                <Link key={menu.id} href={menu.route || '/'}>
                  <h3
                    // onClick={moveRoute}

                    className={
                      selected === menu.route
                        ? 'text-white bg-gradient-to-tr from-green-400 to-purple-600 px-4 py-1 rounded-full '
                        : 'text-gray-500 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-600 hover:border-b-2  hover:border-purple-400 transition duration-150 ease-out hover:ease-in'
                    }
                  >
                    {menu.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-5 text-green-600 ">
          <h3 className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-600 hover:border-b-2  hover:border-purple-400 transition duration-150 ease-out hover:ease-in">
            Sign In
          </h3>
          <h3 className="border px-4 py-1 rounded-full border-green-600 cursor-pointer hover:text-purple-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-600 hover:border-purple-400 transition duration-150 ease-out hover:ease-in">
            Go to Github
          </h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex md:hidden h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
