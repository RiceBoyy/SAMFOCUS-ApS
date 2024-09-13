import React, { useState } from 'react';
import { Event } from '@/Models/Event';

interface WeekCardProps {
    events: Event[];
    weekNumber: number;
}

const WeekCard: React.FC<WeekCardProps> = ({ events = [], weekNumber }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCardClick = (event: Event) => {
        setSelectedEvent(event);
    };

    const handleCloseOverlay = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="week w-full mb-4">
            <div
                className="flex justify-between w-full bg-green-500 p-2 rounded-lg cursor-pointer"
                onClick={toggleExpand}
            >
                <div className="flex w-full">
                    <h2 className="text-white text-lg font-bold w-11/12">Uge {weekNumber}</h2>
                </div>
            </div>

            {isExpanded && (
                <div className="w-full md:pb-4 bg-gray-100 rounded-lg md:gap-4 sm:gap-2 shadow-lg relative flex md:flex-row flex-wrap justify-center overflow-auto max-h-[400px]">

                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <div
                                key={index}
                                className="mt-4 p-2 border border-gray-300 rounded-md w-full md:w-96 cursor-pointer overflow-hidden text-ellipsis relative"
                                onClick={() => handleCardClick(event)}
                            >

                                <h3 className="font-bold text-lg text-black overflow-hidden text-ellipsis whitespace-nowrap">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                                    <strong>{event.dateTime}</strong><br />
                                    <strong>Adresse:</strong> {event.address} {event.nummer}, {event.postnummer} {event.by}
                                </p>
                                <p className="text-sm text-gray-600 mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                    {event.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">Ingen begivenheder.</p>
                    )}
                </div>
            )}

            {selectedEvent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg md:max-w-md w-full relative h-full md:h-auto  ">
                        <button
                            className="absolute top-4 right-4 text-black"
                            onClick={handleCloseOverlay}
                        >
                            &times;
                        </button>
                        <h3 className="font-bold text-lg text-black">{selectedEvent.title}</h3>
                        <p className="text-sm text-gray-600">
                            <strong>{selectedEvent.dateTime}</strong><br />
                            <strong>Adresse:</strong> {selectedEvent.address} {selectedEvent.nummer}, {selectedEvent.postnummer} {selectedEvent.by}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            {selectedEvent.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeekCard;
