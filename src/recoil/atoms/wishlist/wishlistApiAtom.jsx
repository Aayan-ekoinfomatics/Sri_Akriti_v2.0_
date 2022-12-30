import { atom } from "recoil";

const wishlistApiAtom = atom({
    key: 'wishlistApiAtom',
    default: [],
})

export default wishlistApiAtom;