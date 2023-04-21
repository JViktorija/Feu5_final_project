import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuthCtx } from '../store/AuthProvider';
import { auth } from '../../firebase/firebase';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const Button = styled.button`
  background-color: #9E77ED;
  color: snow;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 2rem;
  border: none;
`;

function Logout() {
  const { isLoggedIn } = useAuthCtx();
  const [signOut, loading, error] = useSignOut(auth);
  const navigate = useNavigate();

  async function logoutFire() {
    try {
      await signOut();
      navigate('/');
    } catch (e) {
      navigate('/login');
    }
  }

  return !isLoggedIn ? null : (
    <Button onClick={logoutFire}>
      Logout
    </Button>
  );
}

export default Logout;