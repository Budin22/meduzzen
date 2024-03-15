import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import { getHealthCheck } from "../../Api/health-check-api";
import { useMemo } from "react";

export interface HealthCheck {
  status_code: number;
  detail: string;
  result: string;
}

export const useHealthCheckQuery = (): UseBaseQueryResult<HealthCheck> => {
  const data = useQuery({
    queryKey: ["health-check"],
    queryFn: getHealthCheck,
  });
  return useMemo(() => data, [data]);
};
