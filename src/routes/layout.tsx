import { component$, Slot } from '@builder.io/qwik';
import { CustomFooter } from '../integrations/react/mui';
import { Link } from '@builder.io/qwik-city'
// import Header from '../components/Header/header';

export const Header = component$(() => {
  const pages = [{ title: 'Sales', url: '/category/sales' } , { title: 'About us', url: '/about-us' }];

  return (
    <header class="header">
      <h1 class="logo"><Link href='/'>LOGO</Link></h1>
      <div class="menu-items">
        {pages?.map((item) => (
          <div>
            <Link
              href={item.url}
            >
              {item.title}
            </Link>
          </div>
        ))
       }
      </div>
    </header>
  );
});

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
        <CustomFooter />
      </main>
    </>
  );
});

