import { getPgVersion } from "./db";

export default async function PostgresVersion() {
  const version = await getPgVersion();
  return <p>{version}</p>;
}
