import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from "../../styles/User.module.css";
interface UsersProps {
  dataUsers: Array<any>;
}
export default function User(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
