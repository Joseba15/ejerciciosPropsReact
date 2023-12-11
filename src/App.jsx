
// const baseUrl = 'https://i.imgur.com/';
// const person = {
// name: 'Gregorio Y. Zara',
// imageId: '7vQD0fP',
// imageSize: 's',
// theme: {
// backgroundColor: 'black',
// color: 'pink'
// }
// };

// export default function TodoList() {
// return (
// <div style={person.theme}>
//   <h1>{person.name}'s Todos</h1>
//   <img
//     className="avatar"
//     src={baseUrl+person.imageId+person.imageSize+".jpg"}
//     alt={person.name}
//   />
//   <ul>
//     <li>Improve the videophone</li>
//     <li>Prepare aeronautics lectures</li>
//     <li>Work on the alcohol-fuelled engine</li>
//   </ul>
// </div>
// );
// }


import  Profile  from './Profile.jsx';

const personA = {
  nombre : 'Maria Skłodowska-Curie',
  imageId: 'szV5sdG',
  profesion : 'física y química',
  numReconoc: 4,
  reconoc : 'Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci',
  descubrim: 'polonio (elemento químico)'

} 

export default function Gallery() {
  return (
  <>
    {/* <Profile  ></Profile> */}
    <Profile  props = {personA}></Profile>;
  </>
  )
}