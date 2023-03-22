import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city'
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
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
