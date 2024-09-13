import React, { useState } from 'react';
import { Event } from '@/Models/Event';

interface CreateEventFormProps {
    onClose: () => void;
    onEventSubmit: (event: Event) => void;
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ onClose, onEventSubmit }) => {
    const [title, setTitle] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [nummer, setNummer] = useState('');
    const [postnummer, setPostnummer] = useState('');
    const [by, setBy] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEvent: Event = { title, dateTime, description, address, nummer, postnummer, by };
        onEventSubmit(newEvent);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
            <div className="bg-white p-8 rounded-md shadow-md w-96 relative">
                {/* Close button to exit form */}
                <button
                    className="absolute top-2 right-2 text-black bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={onClose}
                >
                    &times;
                </button>

                <h2 className="text-center font-bold text-xl mb-4">Opret Begivenhed</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Titel</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-md"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Tidspunkt</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-md"
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Beskrivelse</label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded-md"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Vejnavn</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-md"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2">
                        <div className="mb-4">
                            <label className="block text-gray-700">Nummer</label>
                            <input
                                className="w-full border border-gray-300 p-2 rounded-md"
                                type="number"
                                value={nummer}
                                onChange={(e) => setNummer(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Postnummer</label>
                            <input
                                className="w-full border border-gray-300 p-2 rounded-md"
                                type="number"
                                value={postnummer}
                                onChange={(e) => setPostnummer(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">By</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-md"
                            type="text"
                            value={by}
                            onChange={(e) => setBy(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                            onClick={onClose}
                        >
                            Annuller
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Opret Begivenhed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEventForm;
