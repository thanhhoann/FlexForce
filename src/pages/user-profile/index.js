import { persistUser } from '../../utils/helpers/local-storage.helper';
export default function UserProfile() {
  return <>{persistUser.email}</>;
}
