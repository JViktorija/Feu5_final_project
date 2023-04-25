import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuthCtx } from '../store/AuthProvider';
import { auth } from '../../firebase/firebase';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LogOutBTN = styled.button`
  background-color: #331471;
  color: snow;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: none;
  border-radius: 20px;
`;

function Logout() {
  const { isLoggedIn } = useAuthCtx();
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();

  async function logoutFire() {
    try {
      await signOut();
      navigate('/');
    } catch (e) {
      navigate('/login');
    }
  }

  return !isLoggedIn ? null : <LogOutBTN onClick={logoutFire}>Logout</LogOutBTN>;
}

export default Logout;
