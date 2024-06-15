const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 w-full">
            <div className="relative bg-white p-4 rounded-lg w-[80%] lg:w-[50%]">
                <button className="absolute -top-12 -right-2 lg:-top-10 lg:-right-20 text-white text-4xl" onClick={onClose}>
                    &times;
                </button>
                <img src={imageSrc} alt="Enlarged" className="max-w-full max-h-screen" />
            </div>
        </div>
    );
};

export default Modal;