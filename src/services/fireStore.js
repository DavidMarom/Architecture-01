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

export const FSupdateItem = async (data) => {
    const itemDoc = doc(db, "list", data.id)
    const newFields = {
        name: data.name,
        age: data.age,
        address: data.address
    }
    await updateDoc(itemDoc, newFields);
    return data.id;
}

export const FSdeleteItem = async (id) => {
    const itemDoc = doc(db, "list", id)
    await deleteDoc(itemDoc);
    return id;
}

