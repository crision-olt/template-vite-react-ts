/*
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/modulesTypes/firebase";

export const useFirestore = (collectionName: string) => {
  const collectionRef = collection(db, collectionName);

  const getAll = async () => {
    let data: Array<any>;
    try {
      const result = await getDocs(collectionRef);
      return result.docs.map((element) => ({
        ...element.data(),
        id: element.id,
      }));
    } catch (e) {
      return [];
    }
  };
  const getById = async (id: string) => {
    const docRef = doc(db, collectionName, id);
    try {
      const result = await getDoc(docRef);
      return result.data();
    } catch (e) {
      return undefined;
    }
  };
  const updateDocument = async (id: string, newFields: any) => {
    const docRef = doc(db, collectionName, id);
    try {
      await updateDoc(docRef, newFields);
      return true;
    } catch (e) {
      return false;
    }
  };
  const createDocument = async (document: any) => {
    try {
      return await addDoc(collectionRef, document);
    } catch (e) {
      return undefined;
    }
  };
  const deleteDocument = async (id: string) => {
    const docRef = doc(db, collectionName, id);
    try {
      await deleteDoc(docRef);
      return true;
    } catch (e) {
      return false;
    }
  };
  return { getAll, getById, updateDocument, createDocument, deleteDocument };
};
*/

export const useFirestore = () => {
  //useFirestore
};
