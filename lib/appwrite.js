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

const {
endpoint,
platform,
projectId,
databaseId,
userCollectionId,
gamesCollectionId,
storageId
} = config;

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
      throw new Error(error.message);
    }
}
  
  // Sign In
export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountid', currentAccount.$id)]
    )

    if(!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getAllGames = async () => {
  try {
    const games = await databases.listDocuments(
      databaseId,
      gamesCollectionId
    )
  return games.documents;
  } catch (error) {
    throw new Error(error);
  }
}