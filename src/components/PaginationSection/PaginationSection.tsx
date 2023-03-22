import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './paginationSection.css?inline'

export default component$(({ pagination } : any) => {
  useStyles$(styles)
  const { currentPageNumber, list } = pagination
  return (
    <div class="pagination">
      <ul>
        {list.map((link: string, i: number) => {
          return (
            <li>
              <a href={link} class={currentPageNumber === i + 1 ? 'active' : null}>
                {i + 1}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
});
