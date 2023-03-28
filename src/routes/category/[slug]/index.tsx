import { component$, useStore, useTask$, useStyles$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import ProductGrid from '../../../components/ProductGrid/ProductGrid';
import styles from './category.css?inline'

export const defaultOffset = 10;

export function handlePaginationItems(data: any, pathname: any) {
  const paginationList : any = []
  data.forEach((item: Object, i: number) => {
    if(i % defaultOffset === 0) {
      paginationList.push(`${pathname}?page=${Math.floor(i / defaultOffset) + 1}`)
    }
  })
  return paginationList
}

export default component$(() => {
  const { query, pathname } = useLocation()
  const fullItemsData = useStore({ pageItems: [] });
  const filteredProducts = useStore({ currentItems: []})
  const filter = useStore({ tag: ''})
  const pagination = useStore({ currentPageNumber: Number(query.page) || 1, list: [], })
  const nav = useNavigate()

  useStyles$(styles)

  // fetch all products data
  useTask$(async () => {
    try {
      const res = await fetch('https://raw.githubusercontent.com/traa/apiplp/master/db.json').then(data => data.text());
      const json = JSON.parse(res);
      fullItemsData.pageItems = json.pageItems;
      console.log("test fetch")
    } catch(e) {
      console.log("Error code: 1 -->", e)
    }
  });

  // useTask$(async ({ track }) => {
  //   track(() => pagination.currentPageNumber);
  //   try {
  //       if (query && query.page) {
  //         pagination.currentPageNumber = Number(query.page)
  //       }
  //   } catch(e) {
  //     console.log("Error code 2 -->", e)
  //   }
  // })


  useTask$(async () => {
    try {
      filteredProducts.currentItems = fullItemsData.pageItems.filter((item : any) => {
        if (!filter.tag) {
          return true
        }
        return item.productName.toLowerCase().includes(filter.tag.toLowerCase())
      });
      pagination.list = handlePaginationItems(filteredProducts.currentItems, pathname)
    } catch(e) {
      console.log("Error code 3 -->", e)
    }
  });

  // filter handler
  useTask$(async ({ track }) => {
    track(() => filter.tag);
    try {
      // with empty search field - return all items
      if (!filter.tag) {
        filteredProducts.currentItems = fullItemsData.pageItems.filter((item : any, i: number) => {
          return i < pagination.currentPageNumber * defaultOffset &&
                  i >= (pagination.currentPageNumber - 1) * defaultOffset
        })
      } else {
        const filteredList = fullItemsData.pageItems.filter((item : any) => {
          return item.productName.toLowerCase().includes(filter.tag.toLowerCase())
        })

        pagination.list = handlePaginationItems(filteredList, pathname)
        if (pagination.list.length < pagination.currentPageNumber) {
          nav.path = `${pathname}?page=1`
        }

        filteredProducts.currentItems = filteredList.filter((item : any, i: number) => {
          return i < pagination.currentPageNumber * defaultOffset &&
                  i >= (pagination.currentPageNumber - 1) * defaultOffset
        })
      }
    } catch(e) {
      console.log("Error code 4 -->", e)
    }
  });

  return (
    <>
      <input
        type="text"
        onInput$={(e) => (filter.tag = ((e.target as HTMLInputElement).value).trim())}
        placeholder="search more products"
      />
      <ProductGrid
        itemsData={filteredProducts.currentItems}
        pagination={pagination}
      />
    </>
  )
});
