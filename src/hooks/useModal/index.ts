import { useState } from 'react';

export const useModal = (initialModalState = false) => {
 const [isOpenModal, setIsOpenModal] = useState<boolean>(initialModalState);

 const openModal = () => setIsOpenModal(true);
 const closeModal = () => setIsOpenModal(false);

 return { isOpenModal, openModal, closeModal };
};
