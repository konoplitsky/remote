import useStore from '@happycode-core/counter-store';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  const { count, increment } = useStore();

  return (
    <div className='mf-remote-card'>
      <h2 className='mf-remote-title'>REMOTE - ABOUT PAGE</h2>
      <div className='mf-remote-counter'>Счетчик: {count}</div>
      <button className='mf-remote-button' onClick={increment} type='button'>
        +
      </button>

      <Link className='mf-remote-link' to='/test'>Тест</Link>
    </div>
  );
};

export default About;
