const conf = {
  appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
  // https://cloud.appwrite.io/v1
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  // 66acc9d500126ea52d04
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  // 66accafc002261d7cf04
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  // 66accb3a000982523337
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  // 66accd1700141d1f8c8e
};

export default conf