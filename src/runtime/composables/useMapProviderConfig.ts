import { useRuntimeConfig } from "#app";

export const useMapProviderConfig = () => {
  const config = useRuntimeConfig()

  return config.map
}
