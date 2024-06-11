import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";
export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.wsa.sporti',
    projectId: "665f048b0010abac8332",
    databaseId: "665f066c001677d0cb07",
    userCollectionId: "665f068f0028f12494c1",
    gamesCollectionId: "665f06b1002961d8f86d",
    storageId: "665f151300213a080c13",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Appwrite Endpoint
    .setProject(config.projectId) // project ID
    .setPlatform(config.platform) // application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountid: newAccount.$id,
          email,
          username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      'please'
    }
}
  
  // Sign In
export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);
    }
}