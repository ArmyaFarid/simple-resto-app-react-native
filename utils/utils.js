import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items. 
  // Each item has the following properties: "id", "title" and "price"
  const section = [];
  data.forEach(dt => {
    const idx = section.findIndex(item => item.title === dt.category);
    if (idx !== -1) {
      // Section already exists, push the menu item to its data array
      section[idx].data.push({
        id: dt.id,
        title: dt.title,
        price: dt.price,
      });
    } else {
      // Section doesn't exist, create a new section
      section.push({
        title: dt.category,
        data: [
          {
            id: dt.id,
            title: dt.title,
            price: dt.price,
          }
        ],
      });
    }
  });
  
 
  console.log(JSON.stringify(section));
  return section;
}

// export function getSectionListDataWithReducer(data) {
//     const sectionListData = data.reduce((acc, menuItem) => {
//       // Find the section that matches the category of the current menu item
//       const section = acc.find((section) => section.title === menuItem.category);
  
//       if (section) {
//         // If the section already exists, add the menu item to its "data" array
//         section.data.push({
//           id: menuItem.id, // Ensure id is a string
//           title: menuItem.title,
//           price: menuItem.price, // Ensure price is a string
//         });
//       } else {
//         // If the section doesn't exist, create a new section with the current menu item
//         acc.push({
//           title: menuItem.category,
//           data: [
//             {
//               id: menuItem.id, // Ensure id is a string
//               title: menuItem.title,
//               price: menuItem.price, // Ensure price is a string
//             },
//           ],
//         });
//       }
  
//       return acc;
//     }, []);
  
//     return sectionListData;
//   }
  

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
