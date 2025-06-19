import loadIdentity from '@/lib/loadIdentity';
import { createActor as backendActor, canisterId as backendCanister } from '../src/declarations/backend';
import { createActor as tokenActor, canisterId as tokenCanister } from '../src/declarations/icrc1';

export async function useBackend() {
  return backendActor(backendCanister, {
    agentOptions: {
      host: 'https://icp-api.io',
      identity: await loadIdentity()
    },
  });
}

export async function useToken() {
  return tokenActor(tokenCanister, {
    agentOptions: {
        host: 'https://icp-api.io',
        identity: await loadIdentity()
    },
  });
}