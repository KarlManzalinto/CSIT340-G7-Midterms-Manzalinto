import { useState } from 'react';

function Hire({ hours: initialHours = 0 }) {
    const [hours, setHours] = useState(initialHours);

    const handleAddHour = () => setHours((currentHours) => currentHours + 1);
    const handleClear = () => setHours(0);

    return (
        <div className="mx-20 mt-8 flex items-center justify-between rounded-xl bg-[#222222] p-6 text-[#FAF3E1]">
            <div>
                <h3 className="text-2xl font-bold">
                    Hire me for {hours} hours
                </h3>
                <p className="mt-1 text-xl">Total: </p>
                <span className="font-bold text-[#FA8112]">
                    PHP {hours * 500}
                </span>
            </div>
            <div className="flex gap-4">
                <button className="rounded-lg bg-[#FA8112] px-8 py-3 font-bold text-[#222222] hover:bg-[#FA8112]/80"
                    onClick={handleAddHour}
                >
                    Add hour
                </button>
                <button className="rounded-lg border-2 border-[#FAF3E1] px-8 py-3 font-bold text-[#FAF3E1] hover:bg-[#FAF3E1]/80"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default Hire;