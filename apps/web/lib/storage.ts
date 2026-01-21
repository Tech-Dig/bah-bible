import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.client";

export async function uploadDocFile(docId: string, file: File) {
  const path = `docs/${docId}/${file.name}`;
  const r = ref(storage, path);
  await uploadBytes(r, file, { contentType: file.type });
  return { path, url: await getDownloadURL(r) };
}