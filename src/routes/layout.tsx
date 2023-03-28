import { component$, Slot } from '@builder.io/qwik';
// import { CustomFooter } from '../integrations/react/mui';
// import Header from '../components/Header/header';
// There are some building issues with Vercel
// Please use these code instead of imported Header whenever you need to deploy on Vercel
import { Link } from '@builder.io/qwik-city'

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
        {/* <CustomFooter /> */}
      </main>
    </>
  );
});

