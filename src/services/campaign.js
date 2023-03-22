import { client } from './client.js';

export async function getCampaignHomeImage() {
  return await client.storage.from('images').select('*').order('created_at').single();
}
