import Typewriter from 'typewriter-effect';
import { knowledge } from '../Helper';


const TypeEffect = () => {
    return (
        <Typewriter
        options={{
            strings: knowledge,
            autoStart: true,
            loop: true,
        }}
        />
    )
}

export default TypeEffect
