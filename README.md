# Responsive Form Assignment

This project contains a simple login form that after successful login redirects to the table page. The table fetches data from StarWars API and displays.

Tools: Build with vite, the application uses React, React-router and TypeScript. Axios is utilized to fetch data from the API.

## Hooks 

   | Name    | Accepts Props                     | Description                               |
   | ------- | --------------------------------- | ----------------------------------------- |
   | useData | initial state(values, pagination) | Handles data fetching and pagination      |
   | useForm | {user: string; password: string}  | Handles form validation, state and submit |

## Constants

   | Name        | Description                        |
   | ----------- | ---------------------------------- |
   | API         | StarWars API url endpoints         |
   | tableTitles | Holds the table titles in an array |

## Pages

| Name  | Description                                 |
| ----- | ------------------------------------------- |
| Login | Contains form and login button              |
| Table | Simple table with data fetched from the API |

## Components

   | Name        | Accepts Props            | Description            |
   | ----------- | ------------------------ | ---------------------- |
   | Table       | array, array             | Table component        |
   | TableRow    | Object with props        | Table row component    |
   | CustomInput | Object with props        | Custom input component |
   | CustomForm  | children, handler        | Custom form component  |
   | Button      | string, handler, boolean | Button component       |

   ## Services

   * dataService

        | method name | props        | Description                 |
        | ----------- | ------------ | --------------------------- |
        | getPeople   | url : string | Fetches characters from API |
