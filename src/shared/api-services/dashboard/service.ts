import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Opportunity } from "./opportunity";

const BASE_URL = "/api/opportunities";

export const useOpportunitiesQuery = () => {
  return useQuery<Opportunity[], Error>(["opportunities"], async () => {
    const { data } = await axios.get<Opportunity[]>(BASE_URL);
    return data;
  });
};
export const useUpdateOpportunityMutation = () => {
  return useMutation<Opportunity, Error, Partial<Opportunity>>(
    (opportunitie) => {
      const { oppId, ...data } = opportunitie;
      return axios
        .put<Opportunity>(`${BASE_URL}/${oppId}`, data)
        .then((res) => res.data);
    }
  );
};
