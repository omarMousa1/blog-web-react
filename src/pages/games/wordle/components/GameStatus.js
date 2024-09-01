import React from "react";

const GameStatus = ({ status, solution }) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                {status === 'won' ? (
                    <h2 className="text-2xl font-bold mb-4">رائع<br />!لقد فزت</h2>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">لقد خسرت</h2>  
                        <p className="text-lg">الكلمة الصحيحة هي: <span className="font-bold">{solution}</span></p>
                    </div>
                )}
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => window.location.reload()}>إلعب مجدداَ</button>
            </div>
        </div>
    )
}

export default GameStatus