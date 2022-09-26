import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const listCollectionRef = collection(db, "list")

export const FSfetchList = async () => {
    return await getDocs(listCollectionRef).then((res) => {
        return res.docs.map(
            (doc) => { return { ...doc.data(), id: doc.id } }
        )
    })
}

export const FScreateNew = async (newItem) => {
    await addDoc(listCollectionRef, newItem
    )
}

export const FSupdateItem = async (id) => {
    const itemDoc = doc(db, "list", id)
    const newFields = { item01: 'aaaaaaaaaa' }
    await updateDoc(itemDoc, newFields);
    return id;
}

export const FSdeleteItem = async (id) => {
    const itemDoc = doc(db, "list", id)
    await deleteDoc(itemDoc);
    return id;
}

