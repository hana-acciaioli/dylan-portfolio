import { client, checkError } from './client';

export async function getClients() {
  const resp = await client.from('clients').select('*').order('name', { ascending: true });
  return checkError(resp);
}
