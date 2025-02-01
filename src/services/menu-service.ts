import { Menu } from "@/@types/menu";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

export const getMenusByUser = async (userId: string): Promise<Menu[]> => {
  const menusRef = collection(db, "menus");
  const q = query(menusRef, where("ownerId", "==", userId));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<Menu, "id">;
    return { id: doc.id, ...data };
  });
};

export const addMenu = async (
  menu: Omit<Menu, "id">,
  userId: string
): Promise<void> => {
  const menusRef = collection(db, "menus");
  await addDoc(menusRef, {
    ...menu,
    ownerId: userId,
  });
};

export const getMenus = async (): Promise<Menu[]> => {
  const menusRef = collection(db, "menus");
  const querySnapshot = await getDocs(menusRef);
  const menus: Menu[] = [];
  querySnapshot.forEach((doc) => {
    menus.push({
      id: doc.id,
      ...doc.data(),
    } as Menu);
  });
  return menus;
};

export const getMenuById = async (menuId: string): Promise<Menu | null> => {
  const menuRef = doc(db, "menus", menuId);
  const menuSnap = await getDoc(menuRef);

  if (menuSnap.exists()) {
    return { id: menuSnap.id, ...menuSnap.data() } as Menu;
  } else {
    return null;
  }
};
