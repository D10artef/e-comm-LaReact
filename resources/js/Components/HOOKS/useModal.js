import {useState} from "react";

export const useModal = (hide = false) => {
  const [showModal, setShowModal] = useState(hide)
  const closeModal = () => {
    setShowModal(false)
  }
  const openModal = () => {
    setShowModal(true)
  }

  return [showModal, openModal, closeModal];
}