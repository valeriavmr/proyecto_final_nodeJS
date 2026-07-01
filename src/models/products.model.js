import { db } from '../data/data.js';
import {
collection,
getDocs,
getDoc,
addDoc,
deleteDoc,
setDoc,
doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Método para buscar un producto por su ID
export async function getProductById(id) {

    const productDoc = await getDoc(doc(productsCollection, id));

    if (productDoc.exists()) {
    return {
        id: productDoc.id,
        ...productDoc.data()
    };

} else {

    return null;
}};

// Método para obtener todos los productos
export async function getAllProducts() {

    const querySnapshot = await getDocs(productsCollection);

    const products = [];
    querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });});
    return products;
};

// Método para guardar un producto en Firestore
export async function addProduct(product) {
    const docRef = await addDoc(productsCollection, product);

    return {
        id: docRef.id,
        ...product
    };
};

// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
 const productRef = doc(productsCollection, id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
        return null;
    }

    const product = {
        id: productSnap.id,
        ...productSnap.data()
    };

    await deleteDoc(productRef);

    return product;
}

//Metodo para actualizar un producto por su ID
export async function updateProduct(id, product) {
    const productRef = doc(productsCollection, id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
        return null;
    }

    await setDoc(productRef, product, { merge: true });

    return {
        id: productSnap.id,
        ...productSnap.data(),
        ...product
    };
}
