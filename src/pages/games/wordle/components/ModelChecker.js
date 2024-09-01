const ArabicCheckerPopUp = ({onClose, MsgError}) => {
  console.log('MsgError', MsgError)
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-lg text-black mb-4">{MsgError}</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
            أعد الكتابة
          </button>
        </div>
      </div>
    );
}

export default ArabicCheckerPopUp