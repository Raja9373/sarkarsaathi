import { verifyProductionDataIntegrity } from './integrityGuard';

async function runTest() {
  try {
    await verifyProductionDataIntegrity();
    console.log('Integrity guard test PASSED.');
  } catch (err) {
    console.error('Integrity guard test failed:', err);
    process.exit(1);
  }
}

runTest();
