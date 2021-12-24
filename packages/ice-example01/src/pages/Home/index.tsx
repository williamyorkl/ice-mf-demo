import React, { useEffect, Suspense } from 'react';
import { useRequest } from 'ice';
import { Table } from 'antd';
import styles from './index.module.css';

const RemoteApp = React.lazy(() => import('lihuaAssamblyUI/TestCmp'));

export default function Home() {
  const { data, error, loading, request: fetchRepos } = useRequest({ url: '/api/getRepos' });
  const { dataSource = [] } = data || {};

  useEffect(() => {
    console.log('Home useEffect....');
    (async function () {
      await fetchRepos();
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Home page</h2>
      {error ? (
        <div>request error: {error.message}</div>
      ) : (
        <div>
          <Suspense fallback={'...loading'}>
            <RemoteApp />
          </Suspense>
        </div>
      )}
    </div>
  );
}
