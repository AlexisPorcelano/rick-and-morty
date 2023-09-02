import Card from '../card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
   return (
         <div className={styles.Cards}>
         {props.characters.map((character) => (
            <Card
               onClose={() => props.onClose(character.id)}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin}
               image={character.image}
               id={character.id}
            />
         ))}
         </div>
   );
}

