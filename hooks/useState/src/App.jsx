// //counter // passing updeter function


// import { useState } from "react";

// export default function Counter() {
//   const [age, setAge] = useState(21);

//   function increment () {
//     setAge(a => a + 1);
//   }

//   return (
//     <>
//       {age}
//       <br />
//       <br />

//       <button onClick={ () => {
//         increment();
//         increment();
//         increment(); 
//       }}> + 3</button>
//       <br /><br />

//       <button onClick={ () => {
//         increment();
//       }}> + 1</button>
//     </>
//   )
// }


// passing next state dorectly

// import { useState } from "react";

// export default function Counter() {
//   const [age, setAge] = useState(21);

//   function increment () {
//     setAge(age + 1);
//   }

//   return (
//     <>
//       {age}
//       <br />
//       <br />

//       <button onClick={ () => {
//         increment();
//         increment();
//         increment(); 
//       }}> + 3</button>
//       <br /><br />

//       <button onClick={ () => {
//         increment();
//       }}> + 1</button>
//     </>
//   )
// }
//text feilds

// import { useState } from "react";

// export default function Myinput () {
//   const [input, setInput] = useState("Hello")

//   const handelChange = (e) => {
//     setInput(e.target.value);
//   }


//   return(
//     <>
//       <input value={input} onChange={handelChange} />
//       <p>
//         you typed: {input} 
//       </p>
//       <button onClick={() => setInput('Helllo')}>Reset</button>
//     </>
//   )

// }


//updating Objects in state
//Form (Object)

// import { useState } from "react";

// export default function Form () {

//   const [person, setPerson] = useState({
//     name: "Captain America",
//     artWork: {
//       title: "Marvel Hero",
//       city: "Newyork",
//       image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg"
//     }
//   });

//   const handelNameChange = (e) => {
//     setPerson({
//       ...person,
//       name: e.target.value
//     })
//   }
//   const handelTitleChange = (e) => {
//     setPerson({
//       ...person,
//       artWork: {
//         ...person.artWork,
//         title: e.target.value
//       }
//     });
//   }
//   const handelCityChange = (e) => {
//     setPerson({
//       ...person,
//       artWork: {
//         ...person.artWork,
//         city: e.target.value
//       }
//     });
//   }
//   const handelImageChange = (e) => {
//     setPerson({
//       ...person,
//       artWork: {
//         ...person.artWork,
//         image: e.target.value
//       }
//     });
//   }


//   return (
//     <>
//       <label>
//         Name:
//         <input value={person.name} onChange={ handelNameChange} />
//       </label>
//       <br /><br />
//       <label>
//         Title:
//         <input value={person.artWork.title} onChange={ handelTitleChange} />
//       </label>
//       <br /><br />
//       <label>
//         City:
//         <input value={person.artWork.city} onChange={ handelCityChange} />
//       </label>
//       <br /><br />
//       <label>
//         Image:
//         <input value={person.artWork.image} onChange={ handelImageChange} />
//       </label>
//       <br /><br />
//       <b>
//       <p>{person.name} {" "} {person.artWork.title}{" "} (located in {person.artWork.city})</p>
//       <img src={person.artWork.image} alt= {person.name} />
//       </b>
//     </>
//   )
// }



// // list {array}
// import { useState } from 'react';
// import AddTodo from './components/AddTodo.jsx';
// import TaskList from './components/TaskList.jsx';

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(initialTodos);

//   function handleAddTodo(title) {
//     setTodos([
//       ...todos,
//       {
//         id: nextId++,
//         title: title,
//         done: false
//       }
//     ]);
//   }

//   function handleChangeTodo(nextTodo) {
//     setTodos(todos.map(t => {
//       if (t.id === nextTodo.id) {
//         return nextTodo;
//       } else {
//         return t;
//       }
//     }));
//   }

//   function handleDeleteTodo(todoId) {
//     setTodos(
//       todos.filter(t => t.id !== todoId)
//     );
//   }

//   return (
//     <>
//       <AddTodo
//         onAddTodo={handleAddTodo}
//       />
//       <TaskList
//         todos={todos}
//         onChangeTodo={handleChangeTodo}
//         onDeleteTodo={handleDeleteTodo}
//       />
//     </>
//   );
// }



// //Writing concise update logic with Immer 
// import { useState } from 'react';
// import { useImmer } from 'use-immer';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [list, updateList] = useImmer(initialList);

//   function handleToggle(artworkId, nextSeen) {
//     updateList(draft => {
//       const artwork = draft.find(a =>
//         a.id === artworkId
//       );
//       artwork.seen = nextSeen;
//     });
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={list}
//         onToggle={handleToggle} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }    
