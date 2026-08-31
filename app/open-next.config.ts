import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Empty on purpose. The docs' example enables R2-backed incremental caching,
// but R2 is a paid service and every route here is prerendered static, so
// there is nothing to revalidate and nothing to cache.
export default defineCloudflareConfig({});
