import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

function Home() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <form>
      <h1>{user.userData.login}</h1>
      <h3>Alurite agora mesmo...</h3>
      <textarea />
      <button>aluritar</button>
    </form>
  );
}

export default Home;
