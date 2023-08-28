import { getFirestore, collection, where, getDocs } from "firebase/firestore";

export const getAuthFirebase = async (email) => {
  try {
    const db = getFirestore();
    const usersCollection = collection(db, "users"); // Cambia "users" al nombre de tu colección

    const query = where("email", "==", email); // Suponiendo que tengas un campo "email" en tus documentos

    const querySnapshot = await getDocs(query(usersCollection));

    if (!querySnapshot.empty) {
      // El usuario con el correo electrónico existe en la base de datos
      const userDoc = querySnapshot.docs[0];
      const uid = userDoc.id; // El UID del usuario
      console.log("UID:", uid);
    } else {
      console.log("No se encontró ningún usuario con ese correo electrónico en la base de datos.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
