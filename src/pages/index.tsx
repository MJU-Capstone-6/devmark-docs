import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const history = useHistory();
  const introURL = useBaseUrl("docs/intro");
  useEffect(() => {
    history.push(introURL);
  }, []);
  return (
    <Layout title={"Devmark docs"} description="Devmark docs">
      <h1>Hello</h1>
    </Layout>
  );
}
