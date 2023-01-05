import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries.js";

const useRepositories = () => {
  /* const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
  const { repositories = null } = data; */

  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    //no poner localhost, sino desde el telefono no funciona
    const response = await globalThis.fetch('http://192.168.0.4:5000/api/repositories')
    const json = await response.json()
    setRepositories(json)
  };

  useEffect(() => {
    fetchRepositories()
  }, []);


  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return { repositories: repositoriesNodes }
    //return { loading, repositories: repositoriesNodes, refetch }
};

export default useRepositories;