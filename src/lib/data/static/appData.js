export const appData = [
    {
      "id": 0,
      "slug": "start",
      "head": {
        "titel": "Nwp-Studio",
        "sub": "Pico-Css",
        "bg": "https://nwp-cgn.de/img/poser/imgA02.png"
      },
      "link": {
        "path": "/",
        "name": "Start",
        "icon": "home",
        "exact": true
      }
    },
    {
      "id": 1,
      "slug": "archiv",
      "head": {
        "titel": "Nwp-Studio",
        "sub": "Archiv",
        "bg": "https://nwp-cgn.de/img/poser/imgA05.png"
      },
      "link": {
        "path": "/archiv",
        "name": "Archiv",
        "icon": "database"
      }
    },
    {
      "id": 2,
      "slug": "components",
      "head": {
        "titel": "Nwp-Components",
        "sub": "Svelte WindiCss",
        "bg": "https://nwp-cgn.de/img/poser/imgA06.png"
      },
      "link": {
        "path": "/users",
        "name": "Components",
        "icon": "user"
      }
    },
    {
      "id": 0,
      "head": {
        "titel": "Nwp-User",
        "sub": "User Details"
      },
      "link": {
        "path": "/user/123",
        "name": "Details",
        "icon": "album",
        "exact": true
      }
    }
  ];
export const navData = appData.map((x) => x.head);
export const pageData = appData.map((x) => x.head);

export default appData;

