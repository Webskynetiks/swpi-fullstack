import Layout from '@/layout/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Layout>
        <div style={styles.container}>
          <h1 className="text-black" style={styles.title}>
            404 - Page Not Found
          </h1>
          <p className="text-black" style={styles.description}>
            Oops! The page you are looking for does not exist.
          </p>
          <Link href="/" style={styles.link}>
            Go back home
          </Link>
        </div>
      </Layout>
    </>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'underline',
    fontSize: '1.1rem',
    cursor: 'pointer',
  },
};
