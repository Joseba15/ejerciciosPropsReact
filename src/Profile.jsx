import { getImageUrl } from './utils.jsx';

export default function Profile( props ) {
    return (
    <div>
      <h1>Científicos Notables</h1>
      <section className="profile">
        <h2>{props.nombre}</h2>
        <img
          className="avatar"
          src={getImageUrl(props.imageId)}
          alt={props.nombre}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {props.profesion}
          </li>
          <li>
            <b>Reconocimientos: {props.numReconoc} </b> 
            ({props.reconoc})
          </li>
          <li>
            <b>Descubrió: </b>
            {props.descubrim}
          </li>
        </ul>
      </section>
    </div>
  );
}